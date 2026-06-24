import {test,expect} from "@playwright/test";
test("register @ demo webshop", async({page})=>{
    // navigate to URL
    await page.goto("https://demowebshop.tricentis.com/");

    //click to register
    await page.locator(".ico-register").click();
    
    //click on gender male/female
     await page.locator("#gender-male").check();
    //await page.locator("#gender-female").check();

    //filled the first name
    await page.locator("#FirstName").fill("Bansari");

    //fiiled the last page
    await page.locator("#LastName").fill("Pathak");

    //Fill the email
    await page.locator("#Email").fill("bansari13@gmail.com");

    //Fill the Password
    await page.locator("#Password").fill("Bansari@1234");

    //Fill the confirm password
    await page.locator("#ConfirmPassword").fill("Bansari@123");

    //wait timing
    await page.waitForTimeout(10000);

    //Click on register button
    await page.locator("#register-button").click();

})