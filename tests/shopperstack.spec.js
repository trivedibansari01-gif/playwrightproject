import {test,expect} from "@playwright/test";
test("register @ demo webshop", async({page})=>{
    
    await page.goto("https://www.shoppersstack.com//");
    
   

    await page.locator("#Password").fill("Ami@2026");

    await page.locator("#Login").click();

    await page.locator('li a[href="/women"]').click();

    await page.locator('img [src="https://m.media-amazon.com/images/I/51mRKgQrb3L._UY695_.jpg"]');
    
    await page.locator(".featuredProducts_footerLeft__PmkNa").filter({hasText:"bata"}).click();

    await page.locator(".ProductDisplay_buyNow__4fwjt").click();


})

