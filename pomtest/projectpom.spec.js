//This is my main test file of POM.

import {test,expect} from "@playwright/test";
import { login } from "./login";
import {Cart} from "./cartpage";
import { BuyNow } from "./buynow";
test("POM TEST Framework", async({page})=>{
    // calling logn.js file
    const newlogin = new login(page);
    await newlogin.gotoPage();
    await newlogin.loginPage('bansari13@gmail.com','Bansari@1234');
    const newCart = new Cart(page);
    await newCart.addToCart(); 
    const buy = new BuyNow(page);
    await buy.BuyNow();
    await page.waitForTimeout(10000);
    
})