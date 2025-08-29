const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

async function generatePDF() {
    console.log('Starting PDF generation...');
    
    // Try to find Chrome executable
    let executablePath = '';
    const possiblePaths = [
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
        process.env.CHROME_PATH
    ];
    
    for (const p of possiblePaths) {
        if (p && fs.existsSync(p)) {
            executablePath = p;
            break;
        }
    }
    
    if (!executablePath) {
        console.error('Chrome not found. Please install Chrome or set CHROME_PATH environment variable.');
        return;
    }
    
    const browser = await puppeteer.launch({
        headless: true,
        executablePath: executablePath,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security',
            '--allow-file-access-from-files'
        ]
    });
    
    const page = await browser.newPage();
    
    // Set a larger viewport to ensure all content is rendered
    await page.setViewport({ width: 1920, height: 1080 });

    // Read the HTML file
    const htmlContent = fs.readFileSync('catalogue.html', 'utf8');
    
    // Convert relative image paths to absolute file paths
    const currentDir = process.cwd();
    const modifiedHtml = htmlContent.replace(
        /src="([^"]*\.(jpg|jpeg|png|gif))"/gi,
        (match, imagePath) => {
            const absolutePath = path.resolve(currentDir, imagePath);
            const fileUrl = `file:///${absolutePath.replace(/\\/g, '/')}`;
            console.log(`Converting ${imagePath} to ${fileUrl}`);
            return `src="${fileUrl}"`;
        }
    );

    // Set the modified HTML content
    await page.setContent(modifiedHtml, {
        waitUntil: 'networkidle0',
        timeout: 60000
    });

    // Wait for all images to load
    await page.evaluate(async () => {
        const selectors = Array.from(document.querySelectorAll('img'));
        await Promise.all(selectors.map(img => {
            if (img.complete) return;
            return new Promise((resolve, reject) => {
                img.addEventListener('load', resolve);
                img.addEventListener('error', reject);
            });
        }));
    });

    // Add an additional wait time to ensure all rendering is complete
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    console.log('Generating PDF...');
    await page.pdf({
        path: 'catalogue.pdf',
        format: 'A4',
        printBackground: true,
        margin: {
            top: '20mm',
            right: '20mm',
            bottom: '20mm',
            left: '20mm',
        },
        preferCSSPageSize: true,
        scale: 1.0
    });
    
    await browser.close();
    console.log('PDF generated successfully: catalogue.pdf');
}

generatePDF().catch(console.error);
