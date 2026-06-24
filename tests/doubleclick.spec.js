import{test,expect} from "@playwright/test"

test("double click", async({page})=>{

    // double click method
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByRole("button",{name:"Copy Text"}).dblclick();
    await page.waitForTimeout(10000);

})