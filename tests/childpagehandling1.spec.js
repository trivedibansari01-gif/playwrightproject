import{test,expect} from "@playwright/test";

    test("Child page handling 1", async({browser})=>{

        const context =await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        const pagePromise = context.waitForEvent('page'); 
        await page.locator('[href="http://www.orangehrm.com"]').click();
        const childpage =await pagePromise;
        //await childpage.locator('[class="email text tryit-email"]').fill("bansari1@gmail.com");
        await childpage.getByPlaceholder("page.getByPlaceholder('Your email address')").fill("abc@gmail.com")
        
    })