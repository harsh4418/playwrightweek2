import {test, expect} from "@playwright/test"
test("Register", async({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form");
    await page.getByPlaceholder("First Name").fill("Harsh");
    await expect(page.getByPlaceholder("First Name")).toHaveValue("Harsh");

    await page.getByPlaceholder("Last Name").fill("Patel");
    await expect(page.getByPlaceholder("Last Name")).toHaveValue("Patel");

    await page.locator('//input[@id="userEmail"]').fill("harshvpatel2807@gmail.com");
    await expect(page.locator('//input[@id="userEmail"]')).toHaveValue("harshvpatel2807@gmail.com");

    await page.locator('//input[@id="gender-radio-1"]').check();
    await expect(page.locator('//input[@id="gender-radio-1"]')).toBeChecked();

    await page.locator('//input[@id="userNumber"]').fill("8319553286");
    await expect(page.locator('//input[@id="userNumber"]')).toHaveValue("8319553286");

    //await page.locator('//input[@id="dateOfBirthInput"]').click();
    await page.locator('//input[@id="subjectsInput"]').fill("Maths, physics, Chemistry, Computer Science");
    //await page.keyboard.press("Enter");
    await page.locator('//input[@id="hobbies-checkbox-2"]').check();
    await expect(page.locator('//input[@id="hobbies-checkbox-2"]')).toBeChecked()

    await page.locator('//textarea[@id="currentAddress"]').fill("Chandigarh University");
    await expect(page.locator('//textarea[@id="currentAddress"]')).toHaveValue("Chandigarh University");
    await page.locator('//div[@class="css-19bb58m"]').click();
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
    await page.locator('//input[@id="react-select-4-input"]').click();
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
    await page.locator('//button[@id="submit"]').click();

})