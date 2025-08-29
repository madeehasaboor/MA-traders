const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generatePDF() {
    console.log('Starting PDF generation...');
    
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Read the HTML file
    const htmlContent = fs.readFileSync('catalogue.html', 'utf8');
    
    // Set content and wait for images to load
    await page.setContent(htmlContent, {
        waitUntil: 'networkidle0',
        timeout: 30000
    });
    
    // Wait a bit more for any remaining resources
    await page.waitForTimeout(2000);
    
    // Generate PDF
    await page.pdf({
        path: 'catalogue.pdf',
        format: 'A4',
        printBackground: true,
        margin: {
            top: '20mm',
            right: '20mm',
            bottom: '20mm',
            left: '20mm'
        }
    });
    
    console.log('PDF generated successfully: catalogue.pdf');
    await browser.close();
}

generatePDF().catch(console.error);
