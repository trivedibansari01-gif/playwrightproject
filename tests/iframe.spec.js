import {test,expect} from "@playwright/test";
    test("Inner frames", async({page})=>{
        await page.goto("https://ui.vision/demo/iframes");
        const inner = await page.frame({url:"https://docs.google.com/forms/d/e/1FAIpQLScP-K8zi-9ar0MCq93D3VIFhegSNPveBfdLqiMfTYR9Q1iSKQ/viewform?embedded=true"});
        await inner.getByLabel("I am a human").click();
        await inner.getByLabel("General Web Automation").check();
        //await inner.getByText("Choose").click();
        //await inner.locator('span').filter({ hasText: 'Yes' }).click();
       // await inner.locator('span').filter({ hasText: 'Next' }).click();
        //await inner.getByPlaceholder("Your answer").fill("I am Bansari Pathak");
       // await inner.getByPlaceholder("Your answer").fill("")

        //await inner.waitForTimeout(3000);

    })
