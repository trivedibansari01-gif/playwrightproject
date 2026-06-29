import{test, expect} from "@playwright/test";

test("double click @reg" , async({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByRole("button",{name:"Copy Text"}).dblclick();
    await page.waitForTimeout(10000);

})

test("screenshot 1 @san",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.screenshot({path:page.png});
    
})

test("drag and drop @regression", async({page})=>{

    // drag and drop
    //syntax= await.page.dragANdDrop(source,target)
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.dragAndDrop("#draggable","#droppable");
    await page.waitForTimeout(10000);

})
test("select multiple options @smoke", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //await page selectorOption(selector, value)
    await page.selectOption('#colors',['Red','Green','Blue']);
    await page.waitForTimeout(10000);

})

test("Keyboard actions @functional", async({page})=>{
        await page.goto("https://gotranscript.com/text-compare");
        await page.getByPlaceholder('Paste one version of the text here.').fill("This is playwright Automation learning");
        await page.keyboard.press("Control+A");
        await page.keyboard.press("Control+C");
        await page.keyboard.press("Tab");
        await page.keyboard.press("Control+V");
        await page.waitForTimeout(1000);
})