import {test,expect} from "@playwright/test";

//gift card, book, computer, smartphone

let items=['gift card','book','computer','smartphone']
//let email="bansari13@gmail.com";
//let Password="Bansari@1234";

for (let item of items)
{
    test(`webshop test ddt ${item}`, async({page})=>{
  
    await page.goto("https://demowebshop.tricentis.com/");
    //await page.locator(".ico-login").click();
    //await page.locator("#Email").fill(email);
    //await page.locator("#Password").fill(Password);
    await page.locator('#small-searchterms').fill(item);
    await page.getByRole("button",{name:"Search"}).click();
    //await page.locator('input.button-1.search-box-button').click(); 

})
}
