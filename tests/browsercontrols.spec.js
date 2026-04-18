import {test, chromium} from "@playwright/test"

// test("browser controls", async({page})=>{
//     await page.goto("https://www.google.com")


//     let size  = await page.viewportSize();
//     console.log(size);
//      await page.setViewportSize({ width: 700, height: 500 });
//     let newsize = await page.viewportSize();
//     console.log(newsize);
// })


// test("browser control 2", async({browser})=>{
//      browser = await chromium.launch();
//     let context  = await browser.newContext();
//     let page1  = await context.newPage();
//     await page1.goto("https://practicetestautomation.com/logged-in-successfully/");
//     let cookies = await context.cookies();
//     console.log(cookies);
// })

// test("browser control 2", async ({ browser, browserName }) => {
//     const context = await browser.newContext();
//     const page1 = await context.newPage();
//     await page1.goto("https://www.google.com");
//     let title = await page1.title();
//     console.log("page 1 title:" + title);
// });
test("browser control 2", async ({ browser, browserName }) => {
    const context = await browser.newContext();
    const page1 = await context.newPage();
    await page1.goto("https://www.google.com");
    await page1.screenshot({path: "screenshot/google.png"})
});