import {test} from "@playwright/test";

// test("3rd example", async({browserName, page})=>{
// //     let context = await browser.newContext();
// //    const page1 = await context.newPage();
//    await page.goto("https://www.google.com");
//    console.log(browserName);
   
// })

test.describe("login", ()=>{
    console.log("Login tests are running");
    test.skip("login test 1", async()=> console.log("Login teest 1"));
    test.only("login test 2", async()=> console.log("Login teest 2"));
     test.only("login test 3", async()=> console.log("Login teest 3"));
});


test.fail("failed test", async()=>{
    await page.goto("https://www.google.com");
})