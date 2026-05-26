# Integrating the Contact & Quote Forms with Google Sheets

The website is already pre-configured to send form submissions to a Google Sheets webhook. To activate this, you need to create a Google Apps Script in your spreadsheet and deploy it as a web app, then set the environment variable.

Follow these 4 simple steps:

---

### Step 1: Set Up Your Google Sheet

1. Create a new Google Sheet (or open an existing one).
2. Give it a name (e.g., `Lauls Website Inquiries`).
3. Click on **Extensions** in the top menu, then select **Apps Script**.

---

### Step 2: Paste the Apps Script Code

1. In the Apps Script editor, delete any existing code in the `Code.gs` file.
2. Paste the following script:

```javascript
/**
 * Webhook receiver for Lauls Website Inquiries
 */
function doPost(e) {
  try {
    var jsonString = e.postData.contents;
    var data = JSON.parse(jsonString);
    
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Auto-create headers if the sheet is blank
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp (IST)", 
        "Name", 
        "Email", 
        "Company", 
        "Interest / Category", 
        "Message / Requirements"
      ]);
      // Format headers: Bold, Navy Blue background, White text
      var headerRange = sheet.getRange(1, 1, 1, 6);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#0A1628");
      headerRange.setFontColor("#FFFFFF");
      sheet.setFrozenRows(1);
    }
    
    // Format timestamp in Indian Standard Time (IST)
    var timestampStr = data.timestamp || new Date().toISOString();
    var formattedDate = Utilities.formatDate(new Date(timestampStr), "GMT+5:30", "yyyy-MM-dd HH:mm:ss");
    
    // Append the row
    sheet.appendRow([
      formattedDate,
      data.name,
      data.email,
      data.company || "N/A",
      data.interest || "Not specified",
      data.message
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ 
      success: true, 
      message: "Data successfully written to Google Sheet." 
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    console.error("Error writing to sheet:", error);
    return ContentService.createTextOutput(JSON.stringify({ 
      success: false, 
      error: error.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click the **Save** icon (disk symbol) at the top.

---

### Step 3: Deploy as a Web App

1. Click the blue **Deploy** button in the top right corner and choose **New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Fill in the following details:
   - **Description**: `Lauls website form webhook`
   - **Execute as**: `Me (your-email@gmail.com)`
   - **Who has access**: `Anyone` *(Crucial: This allows the Next.js backend to submit data without needing Google auth tokens)*.
4. Click **Deploy**.
5. Google will ask you to **Authorize Access**. Click it, choose your Google account, click on *Advanced* (at the bottom/left), and click *Go to Untitled project (unsafe)* or *Allow*.
6. Once deployed, copy the **Web app URL** (it ends with `/exec`).

---

### Step 4: Add the URL to Your Environment Variables

Now, you just need to tell your website where to send the data.

#### For Local Development:
Create a file named `.env.local` in the root of your `lauls-website` directory and add the URL:
```env
GOOGLE_SHEETS_WEBHOOK_URL="PASTE_YOUR_COPIED_WEB_APP_URL_HERE"
```

#### For Production (e.g. Vercel, Netlify, AWS):
Add an Environment Variable in your hosting dashboard:
- **Key**: `GOOGLE_SHEETS_WEBHOOK_URL`
- **Value**: `PASTE_YOUR_COPIED_WEB_APP_URL_HERE`

---

### How to Test It

1. Open your local site or production site.
2. Fill out the contact form (on `/about` or `/contact`) or the Request a Quote form (on `/distribution`).
3. Submit it.
4. Open your Google Sheet—the columns will auto-generate and a new formatted row will appear instantly!
