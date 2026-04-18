import {test} from "@playwright/test"

// test("login", async({page})=>{
//     await page.goto("https://www.saucedemo.com/");
//     await page.locator('[type="text"]').fill("harsh");
//     await page.locator('[type="password"]').fill("Password123");
//     await page.locator('[type="submit"]"]').click();
// })

// test("Register", async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
//     await page.locator('//input[@type="text"][@name="name"]').fill("Harsh Patel");
//     await page.locator('//input[@type="email"][@name="email"]').fill("harshvpatel2807@gmail.com");
//     await page.locator('//input[@type="password"][@name="password"]').fill("ABCabc@123");
//     await page.locator('//button[text()="Register"]').click();
// })

// test("logout", async({page})=>{
//     await page.goto("https://practicetestautomation.com/logged-in-successfully/");
//     await page.locator('//a[@style="color:#ffffff"]').click();
// })


// test("login", async({page})=>{
//     await page.goto("https://www.flipkart.com/");
//     await page.locator('(//input[@class="nw1UBF v1zwn25"])[1]').fill("mobiles");
//     await page.keyboard.press("Enter");
//     await page.locator('(//div[@class="jIjQ8S"])[1]').click();
//    // await page.locator('[type="submit"]"]').click();
// })


// test("flipkart", async ({page}) => {
//     await page.goto("https://www.flipkart.com/")
//     await page.locator('(//input[@class="nw1UBF v1zwn25"])[1]').fill("iphone")
//     await page.locator(`[class="XFwMiH"][type="submit"]`).click()
//     const name = await page.locator(`[class="RG5Slk"]`).first().innerText()
//     const price = await page.locator(`[class="hZ3P6w DeU9vF"]`).first().innerText()
//     console.log(name, price);
// })

// test.only("zepto",async({page})=>{
//     await page.goto('https://zepto.com/');
//     await page.locator('//span[text()="Cafe"]').click();
//     await page.locator('//span[text()="Protinex Hot Chocolate"]').click();
//     let price=await page.locator('(//span[@class="cp62rX c9OiKy cu4Qk6"])[1]').innerText();
//     console.log(price);
// })

test("blinkit",async({page})=>{
    await page.goto('https://blinkit.com/?srsltid=AfmBOopNYNR_fO1ONfNqEit7w-xyaBfkbqkIgluzmN2RkiWvPKuA059d');
    await page.locator('//input[@class="LocationSearchBox__InputSelect-sc-1k8u6a6-0 fZCGlI"]').click();
    await page.locator('//input[@class="LocationSearchBox__InputSelect-sc-1k8u6a6-0 fZCGlI"]').fill("Chandigarh University");
    await page.locator('(//div[@class="LocationSearchList__LocationLabel-sc-93rfr7-2 FUlwF"])[1]').click();
    await page.locator('(//div[@class="AddToCart__UpdatedButtonContainer-sc-17ig0e3-0 lmopxc"])[104]').click();
    await page.waitForTimeout(2000);
    await page.locator('(//div[@class="AddToCart__UpdatedButtonContainer-sc-17ig0e3-0 lmopxc"])[4]').click();
    let price =  await page.locator('(//div[@class="CartButton__Text-sc-1fuy2nj-4 iQAgjV"])[2]').textContent();
    console.log(price);
})