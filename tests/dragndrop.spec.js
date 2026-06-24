import{test,expect} from "@playwright/test";

test("drag and drop", async({page})=>{

    // drag and drop
    //syntax= await.page.dragANdDrop(source,target)
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.dragAndDrop("#draggable","#droppable");
    await page.waitForTimeout(10000);

})

test.only("drag and drop new", async({page})=>{

    // drag and drop method 2
    //syntax= await.page.dragANdDrop(source,target)
    await page.goto("https://testautomationpractice.blogspot.com/");
    const item =await page.locator("#draggable");
    const target =await page.locator("#droppable");
    await item.dragTo(target);


    await page.waitForTimeout(10000);

})

test.only("drag and drop 3 using mouse", async({page})=>{

  
    await page.goto("https://testautomationpractice.blogspot.com/");
    const item = await page.locator("#draggable");
    const target=await page.locator("#droppable");
    await item.hover();
    await page.mouse.down();

    await target.hover();
    await page.mouse.up();
  
    await page.waitForTimeout(10000);

})