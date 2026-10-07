const { test, expect } = require('@playwright/test');
const { SignInPage } = require('../pages/signInPage');
const { SignInData } = require('../test-data/signInData');
const { ContestPage } = require('../pages/contestPage');

test('Daily Challenge Test', async ({ page }) => {
    
    const signinpage=new SignInPage(page);
    const contestPage = new ContestPage(page);
    
    await page.goto('https://tnpsc-preparation-platform.vercel.app/');
   
        await signinpage.signIn(SignInData.email,SignInData.password);

        await expect(page.getByRole('heading',{name:"Welcome Back! 👋"})).toBeVisible();
        console.log("Login Successfull");

        await contestPage.attemptDailyChallenge();
        console.log("Daily Contest Passed");

        await contestPage.attemptWeeklyChampionship();
        console.log("Weekly Contest Passed");
    
});