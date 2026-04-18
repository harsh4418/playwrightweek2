import{test} from "@playwright/test"

// test("mobile", async({page})=>{
//     await page.goto("https://www.amazon.in/");
//     await page.locator('//input[@id="twotabsearchtextbox"]').fill("mobiles");
//     await page.locator('//input[@id="nav-search-submit-button"]').click();
//     await page.locator('//li[@id="p_n_g-1003517064111/206818075031"]/descendant::i[@class="a-icon a-icon-checkbox"]').check();
//     await page.screenshot({path: "screenshot/flipkart.png"})
    
// })


// test("mobile", async({page})=>{
//     await page.goto("https://www.amazon.in/");
//     await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes");
//     await page.locator('//input[@id="nav-search-submit-button"]').click();
//     await page.locator("(//span[@class='a-price-whole'])[4]/ancestor::div[@class='a-section a-spacing-none a-spacing-top-small s-price-instructions-style']/preceding-sibling::div[@class='a-section a-spacing-none a-spacing-top-micro']/preceding-sibling::div[@data-cy='title-recipe']/descendant::h2[@class='a-size-base-plus a-spacing-none a-color-base a-text-normal']").click();
//     //await page.screenshot({path: "screenshot/amazon.png"})
    
// })

// test("runs", async({page})=>{
//     await page.goto("https://www.cricbuzz.com/");
//     await page.locator('//a[@title="Live Cricket Score"]').click();
//     await page.locator('(//span[@class="text-cbComplete" and text()="Scorecard"])[1]').click();
//     let run = await page.locator('(//a[@title="View Highlights of Apriliandi Rahayu"]/preceding-sibling::div[@class="flex justify-center items-center font-bold text-sm  wb:text-sm"])[2]').textContent();
//     console.log(run);
//     //await page.screenshot({path: "screenshot/amazon.png"})
    
// });



// test("amazon shoes", async({page})=>{
//     await page.goto("https://www.amazon.in/");
//     await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes");
//     await page.locator('//input[@id="nav-search-submit-button"]').click();
//     let ShoeName = await page.locator("(//span[@class='a-price-whole'])[4]/ancestor::div[@class='a-section a-spacing-none a-spacing-top-small s-price-instructions-style']/preceding-sibling::div[@class='a-section a-spacing-none a-spacing-top-micro']/preceding-sibling::div[@data-cy='title-recipe']/descendant::h2[@class='a-size-base-plus a-spacing-none a-color-base a-text-normal']").textContent();
//     let price = await page.locator("(//span[@class='a-price-whole'])[4]/ancestor::div[@class='a-section a-spacing-none a-spacing-top-small s-price-instructions-style']/descendant::span[@class='a-price']/descendant::span[@class='a-offscreen']").textContent();
//     console.log(ShoeName);
//     console.log(price);
//     await page.waitForTimeout(5000);
//     //await page.screenshot({path: "screenshot/amazon.png"})
//     let combined = await page.locator("(//span[@class='a-price-whole'])[4]/ancestor::div[@class='a-section a-spacing-none a-spacing-top-small s-price-instructions-style']/preceding-sibling::div[@class='a-section a-spacing-none a-spacing-top-micro']/preceding-sibling::div[@data-cy='title-recipe']/descendant::h2[@class='a-size-base-plus a-spacing-none a-color-base a-text-normal'] | (//span[@class='a-price-whole'])[4]/ancestor::div[@class='a-section a-spacing-none a-spacing-top-small s-price-instructions-style']/descendant::span[@class='a-price']/descendant::span[@class='a-offscreen']").allTextContents();
//     console.log(combined);
    
    
// })


test("label", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    await page.getByText('Name').fill("harsh");
})

// test("testid", async({page})=>{
//     await page.goto("https://www.amazon.in/");
//     await page.getByTestId('basic').click();
// })


//getbyplaceholder
//getbylabel
//getbyrole


//getbytext
//getbyalttext
//getbytitle

// test("place_holder", async({page})=>{
//     await page.goto("https://www.amazon.in/");
//     await page.getByPlaceholder("Search Amazon.in").fill("shoes");
// })



// test("place_holder", async({page})=>{
//     await page.goto("https://www.saucedemo.com/");
//     await page.getByTe("username").is.fill("harsh");
//     let ans = await page.getByPlaceholder("username").inputValue();
//     console.log(ans);
// })

