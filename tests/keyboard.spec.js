import{test} from "@playwright/test"

// test("keyboard", async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
//     await page.getByPlaceholder('Enter your name').click();
//     await page.keyboard.type('Harsh');
    
//     await  page.keyboard.down('Tab');
//     await  page.keyboard.up('Tab');
//     await page.keyboard.type('harshvpatel2807@gmail.com');
//     await page.keyboard.press('Control+A');
//     await page.keyboard.press('Control+C');
//     await  page.keyboard.down('Tab');
//     await  page.keyboard.up('Tab');
//     await page.keyboard.press('Control+V');
//     await  page.mouse.click()

    

// })


//hardh waits and explicit waits
//wait for navigation and wwait for 


// test("page handling", async({browser})=>{

// let context  = await browser.newContext();
// let page = await context.newPage();
// await page.goto("https://www.amazon.in/");
// await page.getByPlaceholder("Search Amazon.in",{exact:true}).fill("mobiles");

// await page.keyboard.press("Enter");
// let[page2] = await Promise.all([page.waitForEvent("popup"),
//     page.locator('//div[@class="col col-7-12]').first.click()
// ])
// await page2.locator('//div[text()="Buy now]').click();
// })




// test.only('page_handling', async ({browser}) => {
//     let context = await browser.newContext();
//     let page = await context.newPage();
//     await page.goto('https://www.amazon.in/');
//     await page.getByPlaceholder("Search Amazon.in", {exact: true}).fill('mobiles');
//     await page.keyboard.press('Enter');
//     let [page2] = await Promise.all([page.waitForEvent('popup'),page.locator('//a[@class="a-link-normal s-line-clamp-2 puis-line-clamp-3-for-col-4-and-8 s-link-style a-text-normal"]').first().click()]);
    
   
//     await page2.locator('//input[@id="buy-now-button"]').click();
// });




test.only('qspider', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://demoapps.qspiders.com/ui/browser/multipleTabs?sublist=3');

    
    await page.getByText("Shop Now", { exact: true }).click();

    
    await context.waitForEvent('page');
    await context.waitForEvent('page');
    await context.waitForEvent('page');

    // Get all pages/tabs
    const pages = context.pages();

    

    const tab1 = pages[1];
    const tab2 = pages[2];
    const tab3 = pages[3];


    // Click Add to Cart button in first product tab
    await tab1.getByRole('button', { name: 'Add to Cart' }).click();

    // Click Add to Cart button in second product tab
    await tab2.getByRole('button', { name: 'Add to Cart' }).click();

    // Click Add to Cart button in third product tab
    await tab3.getByRole('button', { name: 'Add to Cart' }).click();
});