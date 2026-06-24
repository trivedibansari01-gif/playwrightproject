import {test,expect} from "@playwright/test";
test.use({storageState:'auth.json'});
test("add to cart", async({page})=>{
    
    await page.goto("https://demowebshop.tricentis.com/");
    
    // await page.locator(".ico-login").click();

    // await page.locator("#Email").fill("bansari13@gmail.com");

    // await page.locator("#Password").fill("Bansari@1234");

    // await page.locator(".login-button").click();

    // await page.context().storageState({path:'auth.json'})

    await page.waitForTimeout(10000);    

})

