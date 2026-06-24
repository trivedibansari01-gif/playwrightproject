import {test,expect} from "@playwright/test";
    test("handling alert", async ({browser}) =>{

        const cotext= await browser.newContext();
        const page1= await cotext.newPage();
        const page2= await cotext.newPage();
        
        await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await page2.goto("https://testautomationpractice.blogspot.com/");

        await page1.getByPlaceholder('Username').fill("Admin");
        await page1.getByPlaceholder('Password').fill('admin123');

        await page2.getByPlaceholder('Enter Name').fill("Bansari");
        await page2.getByPlaceholder('Enter EMail').fill('abc@gmail.com');

        await page1.waitForTimeout(1000);
        await page2.waitForTimeout(1000);

    })