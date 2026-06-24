import {test,expect} from "@playwright/test";
test("full flow rohit shetty website", async({page})=>{
    
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator('#userEmail').fill("trivedibansari01@gmail.com");
    await page.locator('#userPassword').fill("Bansari@123");
    await page.locator('#login').click();
    // const itemname= "ADIDAS ORIGINAL";
    // const item= page.locator('#card-body').filter({ hasText: 'ADIDAS ORIGINAL'});
    // await page.locator('button').filter({ hasText: 'Add To Cart' }).first().click();
    await page.locator('.card-body').filter({ hasText: 'ADIDAS ORIGINAL'}).getByRole("button",{name:' Add To Cart'}).click();
    await page.locator(".btn.btn-custom[routerlink='/dashboard/cart']").click();
    await page.getByRole('button', { name: 'Buy Now' }).click();
    await page.getByPlaceholder('Select Country').fill('india');
    
})
