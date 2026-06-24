import { test, expect } from "@playwright/test";

let users = [
    ['bansari13@gmail.com', 'Bansari@1234'],
    ['hsbharat123@gmail.com', 'Bharat@1234'],
    ['sdetanil3@gmail.com', 'Test@123$'],
    ['nivedanchipkar786@gmail.com', 'Password@123'],
    ['Banty12345@gmail.com', 'Banty@143'],
    ['bharath1122@gmail.com', 'bharath12345'],
    ['giridhargiri464@gmail.com', 'giridhar@123G']
];

for (let [email, password] of users) {
    test(`webshop test ddt2 ${email}, ${password}`, async ({ page }) => {
        await page.goto("https://demowebshop.tricentis.com/");
        await page.locator(".ico-login").click();
        await page.locator("#Email").fill(email);
        await page.locator("#Password").fill(password);
        await page.locator(".login-button").click();
        await expect(page.getByRole('link', { name: 'Log out' })).toHaveText('Log out');
        await page.waitForTimeout(10000);

    });
}