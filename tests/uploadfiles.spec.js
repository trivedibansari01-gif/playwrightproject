import {test, expect} from "@playwright/test";
test ("upload files", async({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    //single file upload
    await page.locator("#singleFileInput").setInputFiles("Bansari_Resume.pdf");
    //Multiple file Upload
    await page.locator("#multipleFilesInput").setInputFiles(["Bansari_Resume.pdf","javascript_1.pdf","API Testing.pdf"]);
    await page.waitForTimeout(10000);

});