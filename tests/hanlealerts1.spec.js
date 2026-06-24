import{test, expect} from "@playwright/test";

test("Ok alert", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html");
    page.on("dialog",async dialog =>{
       await dialog.accept();
    })
    await page.locator('[href="#OKTab"]').click();
    await page.locator('button:has-text("click the button to display an alert box:")').click();
})

test("ok and cancel alert", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html");
    page.on("dialog",async dialog =>{
       await dialog.dismiss();
    })
    await page.locator('[href="#CancelTab"]').click();
    await page.locator('[class="btn btn-primary"]').click();
})

test("Test box alert", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html");
    page.on("dialog",async dialog =>{
       await dialog.accept("Bansari Pathak");
    })
    await page.locator('[href="#Textbox"]').click();
    await page.locator('[class="btn btn-info"]').click();

})
