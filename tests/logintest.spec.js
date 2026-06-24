import { test, expect } from "@playwright/test";
// Test Case 1: Positive Login Test
test("positive login test", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("#username").fill("student");
    await page.locator("#password").fill("Password123");
    await page.locator("#submit").click();
    // Verify URL contains practicetestautomation.com/logged-in-successfully/
    await expect(page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/");
    // Verify page contains expected text
    let successMessage = page.getByText("Congratulations");
    await expect(successMessage).toBeVisible();
    // Verify Log out button is displayed
    let logoutButton = page.getByRole("link", { name: "Log out" });
    await expect(logoutButton).toBeVisible();
});


// Test Case 2: Negative Username Test
test("negative username test", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("#username").fill("incorrectUser");
    await page.locator("#password").fill("Password123");
    await page.locator("#submit").click();
    // Verify error message is displayed
    let errorMessage = page.locator("#error");
    await expect(errorMessage).toBeVisible();
    // Verify error message text
    await expect(errorMessage).toContainText("Your username is invalid!");
});


// Test Case 3: Negative Password Test
test("negative password test", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("#username").fill("student");
    await page.locator("#password").fill("incorrectPassword");
    await page.locator("#submit").click();
    // Verify error message is displayed
    let errorMessage = page.locator("#error");
    await expect(errorMessage).toBeVisible();
    // Verify error message text
    await expect(errorMessage).toContainText("Your password is invalid!");
});