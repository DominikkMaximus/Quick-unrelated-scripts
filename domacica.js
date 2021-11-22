const puppeteer = require('puppeteer-extra')

// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin());

console.time();

const delay = 300;
const paymentDelay = 100;
const itemUrl = "https://domacica.si/zimska-pravljica-z-domacico/";

for (let i = 0; i < 2; i++) {
    async function initBrowser() {
        const browser = await puppeteer.launch({ executablePath: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe", args: ['--no-sandbox'], headless: false, slowMo: 15 });
        const page = await browser.newPage();
        await page.goto(itemUrl);
        await page.waitForXPath("/html/body/div[2]/div/section[2]/div/div[3]/div/section/div/div[2]/div/div/div/div/div/button", { timeout: 6000000 });
        await page.waitForTimeout(2500);
        await page.$eval("button['data-ulike-nonce=1d46cbc3a1']", elem => elem.click());
        console.log("Clicked " + i);    
        await page.waitForTimeout(2500);
        await browser.close();
    }

    async function click() {
        const page = await initBrowser();
        await page.setDefaultTimeout(10000000);
        console.timeLog();
    }

    click();

}
