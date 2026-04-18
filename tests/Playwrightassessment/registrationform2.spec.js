import { test, expect } from "@playwright/test";

test("Registration2", async ({ page }) => {
    await page.goto("https://vinothqaacademy.com/demo-site/");

    await page.locator('#vfb-5').fill("Harsh");
    await expect(page.locator('#vfb-5')).toHaveValue("Harsh");

    await page.locator('#vfb-7').fill("Patel");
    await expect(page.locator('#vfb-7')).toHaveValue("Patel");

    await page.locator('#vfb-31-1').check();
    await expect(page.locator('#vfb-31-1')).toBeChecked();

    await page.locator('#vfb-20-0').check();
    await expect(page.locator('#vfb-20-0')).toBeChecked();

    await page.locator('#vfb-13-address').fill("Chandigarh University");
    await page.locator('#vfb-13-address-2').fill("2");

    await page.locator('#vfb-13-city').fill("Mohali");
    await expect(page.locator('#vfb-13-city')).toHaveValue("Mohali");

    await page.locator('#vfb-13-zip').fill("140413");
    await page.locator('#vfb-13-state').fill("Punjab");

    await page.locator('(//span[@class="select2-selection select2-selection--single"])[1]').click();
    await page.locator('//input[@class="select2-search__field"]').fill("India");
    await page.keyboard.press("Enter");

    await page.locator('#vfb-14').fill("harshvpatel2807@gmail.com");
    await expect(page.locator('#vfb-14')).toHaveValue("harshvpatel2807@gmail.com");

    await page.locator('(//span[@class="select2-selection select2-selection--single"])[2]').click();
    await page.locator('//input[@class="select2-search__field"]').fill("1");
    await page.keyboard.press("Enter");

    await page.locator('(//span[@class="select2-selection select2-selection--single"])[3]').click();
    await page.locator('//input[@class="select2-search__field"]').fill("10");
    await page.keyboard.press("Enter");

    await page.locator('#vfb-19').fill("8319553286");
    await expect(page.locator('#vfb-19')).toHaveValue("8319553286");

    await page.locator('#vfb-23').fill("Internet is not Stable");

    await page.locator('#vfb-3').fill("33");
    await expect(page.locator('#vfb-3')).toHaveValue("33");
    await page.locator('#vfb-4').click();
    await page.waitForTimeout(3000);
    await page.screenshot({path: 'screenshot/Submit.png'});
   // await expect(page).toHaveScreenshot("screenshot/submit.png");
});