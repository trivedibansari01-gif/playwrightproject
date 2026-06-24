import { test, expect } from "@playwright/test";
import fs from "fs";
import { parse } from "csv-parse/sync";

const csvPath = "testdata/testData.csv";

const fileContent = fs.readFileSync(csvPath, "utf-8");

const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true
});

for (let data of records) {
    test(`webshop test ddtCSV ${data.email}, ${data.password}`, async ({ page }) => {
        await page.goto("https://demowebshop.tricentis.com/");
        await page.locator(".ico-login").click();
        await page.locator("#Email").fill(data.email);
        await page.locator("#Password").fill(data.password);
        await page.locator(".login-button").click();
        await expect(page.getByRole("link", { name: "Log out" })).toBeVisible();
        await page.waitForTimeout(10000);
    });
}