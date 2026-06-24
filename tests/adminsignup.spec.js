import {test,expect} from "@playwright/test";
/* test("register @ demo webshop", async({page})=>{
    //Test 1 Admin signup
    await page.goto("https://www.shoppersstack.com/admin-signup");
    await page.getByLabel("First Name").fill("Bansari");
    await page.getByLabel("Last Name").fill("Pathak");
    await page.locator('[value="female"]').check();
    await page.getByLabel("Phone Number").fill("9558885678");
    await page.getByLabel("Email Address").fill("bansari7@gmail.com");
    await page.locator("#Password").fill("Bansari@12");
    await page.getByLabel("Confirm Password").fill("Bansari@12");
    await page.locator("select[id='Country']").selectOption("India");
    await page.locator("select[id='State']").selectOption("Gujarat");
    await page.locator("select[id='City']").selectOption("Bhavnagar");
    await page.getByRole("button",{name:"Register"}).click();
    await page.waitForTimeout(10000);
    
})*/

test("merchant @demo webshop", async({page})=>{
    //Test 2 merchant signup
    await page.goto("https://www.shoppersstack.com/urlhelper");
    await page.locator('[name="Enter Admin Email"]').fill("bansari@gmail.com");
    await page.locator('[type="submit"]').click();
    await page.getByRole("button",{name:"Merchant Signup"}).click();
    await page.getByLabel("First Name").fill("Janvi");
    await page.getByLabel("Last Name").fill("Trivedi");
    await page.getByLabel("E-mail").fill("janvi1@gmail.com");
    await page.getByLabel("Phone Number").fill("9558885675");
    await page.locator("#Password").fill("Bansari@12");
    await page.locator('[value="female"]').check();
    await page.getByRole("button",{name:"Next"}).click();
    await page.getByLabel("Company Name").fill("TCS1");
    await page.getByLabel("Company Email").fill("compony@gmail.com");
    await page.getByLabel("Company Phone Number").fill("9555412512");
    await page.getByLabel("Company GSTN").fill("07ABCDE1234F1Z5");
    await page.getByLabel("Company Registration Number").fill("U12345MH2026PTC123456");
    await page.getByLabel("Company Website").fill("http://www.Pureproducts.io/dashboard");
    await page.getByLabel("Commission").fill("22%");
    await page.locator('[id="Company Type"]').selectOption("");
    




    

})