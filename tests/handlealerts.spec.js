import{test, expect} from "@playwright/test";
//Interview quetion (differnece between 3 alerts)
//1///
test("simple alert", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on("dialog",async dialog =>{
       await dialog.accept();
    })
    await page.locator("#alertBtn").click();
})

//2/// dismiss and accept both will work.
test("Confirmation alert", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on("dialog",async dialog =>{
       await dialog.dismiss();
    })
    await page.locator("#confirmBtn").click();
})

//3///
test("Prompt alert", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on("dialog",async dialog =>{
       await dialog.accept("Bansari");
    })
    await page.locator("#promptBtn").click();

})