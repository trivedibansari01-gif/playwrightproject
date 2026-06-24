import {test, expect} from "@playwright/test";
import fs from 'fs' //fs=read the file, utf-8= for syncing the data
const jsonpath="testdata/testData.json"
const loginData=JSON.parse(fs.readFileSync(jsonpath,'utf-8'))

for (let {email, password} of loginData) {
    test(`webshop test ddtJSON ${email}, ${password}`, async ({ page }) => {
        await page.goto("https://demowebshop.tricentis.com/");
        await page.locator(".ico-login").click();
        await page.locator("#Email").fill(email);
        await page.locator("#Password").fill(password);
        await page.locator(".login-button").click();
        await expect(page.getByRole('link', { name: 'Log out' })).toHaveText('Log out');
        await page.waitForTimeout(10000);

    })
}
