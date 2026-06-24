import { test, expect } from "@playwright/test";
import fs from 'fs'
import * as XLSX from "xlsx";
const xlsxFilePath = "D:/Visual Studio/Playwright/testdata/testData.xlsx";
const workbook = XLSX.readFile(xlsxFilePath);
const sheet = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheet];
const LoginData = XLSX.utils.sheet_to_json(worksheet);

for (let { email, password} of LoginData) {
    test(`webshop test ddtExcel ${email}, ${password}`, async ({ page }) => {
        await page.goto("https://demowebshop.tricentis.com/");
        await page.locator(".ico-login").click();
        await page.locator("#Email").fill(email);
        await page.locator("#Password").fill(password);
        await page.locator(".login-button").click();

        await expect(
            page.getByRole("link", { name: "Log out" })
        ).toBeVisible();

        await page.waitForTimeout(10000);
    });
}