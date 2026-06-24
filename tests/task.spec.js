import{test,expect} from "@playwright/test";

    test("Child page handling 1", async({browser})=>{

        const context =await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        //await page.getByPlaceholder('Username').fill('Admin');
        await page.fill('[name="username"]', 'Admin');
        await page.locator('[name="password"]').fill('admin123');
        //await page.getByRole('button', { name: 'Login' }).click();
        await page.screenshot({path:"login.png"});
        const pagePromise = context.waitForEvent('page'); 
        await page.locator('[href="http://www.orangehrm.com"]').click();
        const childpage =await pagePromise;
        //await childpage.locator('[class="email text tryit-email"]').fill("bansari1@gmail.com");
        await childpage.getByPlaceholder("('Your email address')").fill("abc@gmail.com")
        await childpage.screenshot({fullpage:true, path:"email.png"});
    })