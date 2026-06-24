//syntax 1
import{test,expect} from "@playwright/test";
//syntax 2
//const {test,expect}=require("@playwright/test")
// whenever we want another tab we have to use browser level.
    test("Child page handling", async({browser})=>{
        const context =await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://testautomationpractice.blogspot.com/");
        // it is handling on browser level so it should be use context not a page in below syntax.
        const pagePromise = context.waitForEvent('page'); //new tab in same window in same browser
        await page.locator('button[onclick="myFunction()"]').click();
        const childpage =await pagePromise;
        await childpage.locator('input[class="gsc-input"]').fill("Bansari");
        
    })