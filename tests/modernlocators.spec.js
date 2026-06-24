import {test, expect} from "@playwright/test"
import { link } from "node:fs";
test("Modern locators", async({page})=>{
    
await page.goto("https://demowebshop.tricentis.com/");
await page.getByRole("link",{name:"Log in"}).click();
await page.getByLabel("Email:").fill("bansari13@gmail.com");
await page.getByLabel("Password:").fill("Bansari@1234");
await page.getByRole("button", {name:"Log in"}).click();
//Assertion Method 1 (We have to use this method) assertion to check wheather the logout is visible or not after logigin in
let loggedIn = await page.locator(".ico-logout");
expect(loggedIn).toHaveText("Log out");
// Assertion Method 2
// expect(await page.locator(".ico-logout")).toHaveText("Log out");
await page.locator("#small-searchterms").fill("gift card");
await page.getByRole("button",{name:"Search"}).click();
//assertion to check wheather the searched element is having the given name or not
let cardName = await page.getByRole("link", {name:"$100 Physical Gift Card"}).last();
expect(cardName).toHaveText("$100 Physical Gift Card");
let loggedOut= await page.locator(".ico-logout");
expect(loggedOut).toHaveText("Log out");
await page.waitForTimeout(10000);


})