import { NextRequest } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

// Initialize Resend with API key if present
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Cloudflare GraphQL query definitions
const CLOUDFLARE_GRAPHQL_URL = "https://api.cloudflare.com/client/v4/graphql";

const fetchCloudflareData = async (zoneId: string, apiToken: string, startDate: string, endDate: string) => {
  const query = `
    query GetZoneAnalytics($zoneId: String!, $startDate: Date!, $endDate: Date!) {
      viewer {
        zones(filter: { zoneTag: $zoneId }) {
          httpRequests1dGroups(
            limit: 30,
            filter: { date_geq: $startDate, date_leq: $endDate },
            orderBy: [date_ASC]
          ) {
            dimensions {
              date
            }
            sum {
              requests
              pageViews
              bytes
            }
            uniq {
              uniques
            }
          }
        }
      }
    }
  `;

  const response = await fetch(CLOUDFLARE_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        zoneId,
        startDate,
        endDate,
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`Cloudflare API returned status ${response.status}: ${response.statusText}`);
  }

  const result = await response.json();
  if (result.errors && result.errors.length > 0) {
    throw new Error(`Cloudflare GraphQL Error: ${result.errors[0].message}`);
  }

  return result?.data?.viewer?.zones?.[0]?.httpRequests1dGroups || [];
};

// Generate mock data for development or fallback
const getMockData = (startDate: Date) => {
  const data = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(startDate);
    d.setDate(startDate.getDate() + i);
    const dateStr = d.toISOString().split("T")[0];
    
    // Generate organic-looking mock numbers
    const baseUniques = 150 + Math.floor(Math.random() * 80);
    const uniques = d.getDay() === 0 || d.getDay() === 6 ? Math.floor(baseUniques * 0.6) : baseUniques; // lower on weekends
    const pageViews = uniques * (2 + Math.floor(Math.random() * 2));
    const requests = pageViews * (10 + Math.floor(Math.random() * 15));
    const bytes = requests * 25000 + Math.floor(Math.random() * 1000000); // approx bytes

    data.push({
      dimensions: { date: dateStr },
      sum: { requests, pageViews, bytes },
      uniq: { uniques },
    });
  }
  return data;
};

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("Authorization");
    const searchParams = request.nextUrl.searchParams;
    const isManualTrigger = searchParams.get("manual") === "true";
    const secretParam = searchParams.get("secret");

    const expectedSecret = process.env.CRON_SECRET;
    
    // Auth validation: check Authorization Header (Vercel Cron) or query param secret (manual trigger)
    if (expectedSecret) {
      const isAuthValid =
        authHeader === `Bearer ${expectedSecret}` || secretParam === expectedSecret;
      if (!isAuthValid) {
        return Response.json({ error: "Unauthorized access." }, { status: 401 });
      }
    } else if (!isManualTrigger) {
      // In development if CRON_SECRET is not configured, we allow it only if manual=true is passed
      return Response.json({ error: "Unauthorized: CRON_SECRET not configured." }, { status: 401 });
    }

    // Date range calculations (last 7 completed days)
    const endDateObj = new Date();
    endDateObj.setDate(endDateObj.getDate() - 1); // exclude today since it's incomplete
    const startDateObj = new Date();
    startDateObj.setDate(startDateObj.getDate() - 7);

    const startDateStr = startDateObj.toISOString().split("T")[0];
    const endDateStr = endDateObj.toISOString().split("T")[0];

    const cfZoneId = process.env.CLOUDFLARE_ZONE_ID;
    const cfApiToken = process.env.CLOUDFLARE_API_TOKEN;
    const recipientEmail = process.env.REPORT_RECIPIENT_EMAIL || "info@lauls.in";

    let trafficData = [];
    let isMock = false;

    if (cfZoneId && cfApiToken) {
      try {
        trafficData = await fetchCloudflareData(cfZoneId, cfApiToken, startDateStr, endDateStr);
      } catch (err) {
        console.error("Failed to fetch Cloudflare data, falling back to mock:", err);
        trafficData = getMockData(startDateObj);
        isMock = true;
      }
    } else {
      console.log("No Cloudflare credentials found. Generating mock report.");
      trafficData = getMockData(startDateObj);
      isMock = true;
    }

    // Process summary metrics
    let totalUniques = 0;
    let totalPageViews = 0;
    let totalRequests = 0;
    let totalBytes = 0;

    trafficData.forEach((day: any) => {
      totalUniques += day.uniq.uniques;
      totalPageViews += day.sum.pageViews;
      totalRequests += day.sum.requests;
      totalBytes += day.sum.bytes;
    });

    const averageDailyUniques = Math.round(totalUniques / trafficData.length) || 0;
    const totalMB = (totalBytes / (1024 * 1024)).toFixed(2);

    // Build CSV Content
    let csvContent = "Date,Unique Visitors,Page Views,Total Requests,Bandwidth (MB)\n";
    trafficData.forEach((day: any) => {
      const mb = (day.sum.bytes / (1024 * 1024)).toFixed(2);
      csvContent += `${day.dimensions.date},${day.uniq.uniques},${day.sum.pageViews},${day.sum.requests},${mb}\n`;
    });
    
    // Add summary row to CSV
    csvContent += `\nTOTAL,${totalUniques},${totalPageViews},${totalRequests},${totalMB}\n`;
    csvContent += `DAILY AVERAGE,${averageDailyUniques},${Math.round(totalPageViews / trafficData.length) || 0},${Math.round(totalRequests / trafficData.length) || 0},-\n`;

    // Render HTML Email body
    const emailSubject = `Weekly Website Traffic Report: ${startDateStr} to ${endDateStr} ${isMock ? "[MOCK]" : ""}`;
    
    const tableRows = trafficData.map((day: any) => {
      const mb = (day.sum.bytes / (1024 * 1024)).toFixed(2);
      return `
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 12px 16px; font-weight: 500; color: #0a1628;">${day.dimensions.date}</td>
          <td style="padding: 12px 16px; text-align: right; color: #475569;">${day.uniq.uniques.toLocaleString()}</td>
          <td style="padding: 12px 16px; text-align: right; color: #475569;">${day.sum.pageViews.toLocaleString()}</td>
          <td style="padding: 12px 16px; text-align: right; color: #475569;">${day.sum.requests.toLocaleString()}</td>
          <td style="padding: 12px 16px; text-align: right; color: #475569;">${mb} MB</td>
        </tr>
      `;
    }).join("");

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>${emailSubject}</title>
      </head>
      <body style="font-family: system-ui, -apple-system, sans-serif; background-color: #f8fafc; margin: 0; padding: 40px 20px; -webkit-font-smoothing: antialiased;">
        <div style="max-width: 600px; margin: 0 auto; bg-color: #ffffff; background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05); border: 1px solid #e2e8f0; overflow: hidden;">
          
          <!-- Header -->
          <div style="background-color: #0A1628; padding: 32px; text-align: center; border-bottom: 4px solid #DCA54C;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.025em;">Lauls Private Limited</h1>
            <p style="color: #DCA54C; margin: 8px 0 0 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em;">Website Traffic Analytics</p>
          </div>

          <!-- Body -->
          <div style="padding: 32px;">
            <p style="margin-top: 0; color: #475569; font-size: 15px; line-height: 1.6; font-weight: 300;">
              Hello Sir,<br /><br />
              Please find below the weekly website traffic performance report for <strong>lauls.in</strong> from <strong>${startDateStr}</strong> to <strong>${endDateStr}</strong>.
            </p>

            ${isMock ? `
              <div style="background-color: #fef3c7; border: 1px solid #fde68a; border-radius: 8px; padding: 12px 16px; color: #92400e; font-size: 13px; font-weight: 500; margin-bottom: 24px;">
                ⚠️ Note: Showing simulated/mock data because Cloudflare API credentials are not yet configured in env variables.
              </div>
            ` : ""}

            <!-- Dashboard Summary Grid -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0;">
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 12px; text-align: center;">
                <span style="display: block; text-transform: uppercase; font-size: 10px; font-weight: 700; color: #94a3b8; letter-spacing: 0.05em; margin-bottom: 4px;">Total Visitors</span>
                <span style="font-size: 28px; font-weight: 800; color: #0a1628;">${totalUniques.toLocaleString()}</span>
              </div>
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 12px; text-align: center;">
                <span style="display: block; text-transform: uppercase; font-size: 10px; font-weight: 700; color: #94a3b8; letter-spacing: 0.05em; margin-bottom: 4px;">Page Views</span>
                <span style="font-size: 28px; font-weight: 800; color: #0a1628;">${totalPageViews.toLocaleString()}</span>
              </div>
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 12px; text-align: center;">
                <span style="display: block; text-transform: uppercase; font-size: 10px; font-weight: 700; color: #94a3b8; letter-spacing: 0.05em; margin-bottom: 4px;">Daily Avg Visitors</span>
                <span style="font-size: 28px; font-weight: 800; color: #0a1628;">${averageDailyUniques.toLocaleString()}</span>
              </div>
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 12px; text-align: center;">
                <span style="display: block; text-transform: uppercase; font-size: 10px; font-weight: 700; color: #94a3b8; letter-spacing: 0.05em; margin-bottom: 4px;">Data Transferred</span>
                <span style="font-size: 28px; font-weight: 800; color: #0a1628;">${totalMB} MB</span>
              </div>
            </div>

            <!-- Daily Breakdown Table -->
            <h3 style="font-size: 14px; font-weight: 700; text-transform: uppercase; color: #0a1628; margin-top: 32px; margin-bottom: 12px; letter-spacing: 0.05em;">Daily Traffic Log</h3>
            <div style="width: 100%; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin-bottom: 24px;">
              <table style="width: 100%; border-collapse: collapse; font-size: 13px; text-align: left;">
                <thead>
                  <tr style="background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">
                    <th style="padding: 12px 16px; font-weight: 700; color: #0a1628;">Date</th>
                    <th style="padding: 12px 16px; text-align: right; font-weight: 700; color: #0a1628;">Visitors</th>
                    <th style="padding: 12px 16px; text-align: right; font-weight: 700; color: #0a1628;">Pageviews</th>
                    <th style="padding: 12px 16px; text-align: right; font-weight: 700; color: #0a1628;">Requests</th>
                    <th style="padding: 12px 16px; text-align: right; font-weight: 700; color: #0a1628;">Bandwidth</th>
                  </tr>
                </thead>
                <tbody>
                  ${tableRows}
                </tbody>
              </table>
            </div>

            <p style="color: #64748b; font-size: 12px; margin-top: 32px; line-height: 1.5;">
              A full detailed report is attached as a CSV spreadsheet (openable in Microsoft Excel / Google Sheets). 
            </p>
          </div>

          <!-- Footer -->
          <div style="background-color: #f8fafc; padding: 24px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8;">
            This is an automated system report dispatched weekly by lauls.in.<br />
            © ${new Date().getFullYear()} Lauls Private Limited. All rights reserved.
          </div>
        </div>
      </body>
      </html>
    `;

    // Dispatch email
    let emailSent = false;
    let emailResponseInfo = "";

    if (resend) {
      try {
        const sendResult = await resend.emails.send({
          from: "Lauls Analytics <reporting@lauls.in>",
          to: recipientEmail,
          subject: emailSubject,
          html: emailHtml,
          attachments: [
            {
              filename: `weekly-traffic-report-${startDateStr}-to-${endDateStr}.csv`,
              content: Buffer.from(csvContent),
            },
          ],
        });
        
        if (sendResult.error) {
          throw new Error(sendResult.error.message);
        }
        
        emailSent = true;
        emailResponseInfo = `Email sent successfully via Resend to ${recipientEmail}. ID: ${sendResult.data?.id}`;
      } catch (err: any) {
        console.error("Resend delivery failed:", err);
        emailResponseInfo = `Failed to send email via Resend: ${err.message}`;
      }
    } else {
      emailResponseInfo = "Resend API key not configured. Logging output to console/response.";
    }

    return Response.json({
      success: true,
      reportRange: { start: startDateStr, end: endDateStr },
      metrics: {
        totalVisitors: totalUniques,
        totalPageViews,
        totalRequests,
        bandwidthMB: parseFloat(totalMB),
        dailyAverageVisitors: averageDailyUniques,
      },
      email: {
        sent: emailSent,
        recipient: recipientEmail,
        info: emailResponseInfo,
      },
      isMock,
      // Include CSV and HTML preview in response body for verification
      verification: {
        csvPreview: csvContent.substring(0, 500) + "...",
      }
    }, { status: 200 });

  } catch (err: any) {
    console.error("Cron Traffic Report failed:", err);
    return Response.json({ error: err.message || "Internal server error." }, { status: 500 });
  }
}
