import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, interest, message } = body;

    // Basic server-side validation
    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // If a Google Apps Script webhook URL is configured, forward the data
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (webhookUrl) {
      const payload = {
        timestamp: new Date().toISOString(),
        name,
        email,
        company: company || "",
        interest: interest || "Not specified",
        message,
      };

      const sheetsResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!sheetsResponse.ok) {
        // Log internally but still respond success to the user
        // (we don't want sheet errors to block form submission UX)
        console.error(
          "Google Sheets webhook error:",
          sheetsResponse.statusText
        );
      }
    } else {
      // Development fallback: log to console
      console.log("📩 Contact Form Submission:", {
        timestamp: new Date().toISOString(),
        name,
        email,
        company: company || "",
        interest: interest || "Not specified",
        message,
      });
    }

    return Response.json(
      {
        success: true,
        message:
          "Thank you for reaching out! Our team will contact you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
