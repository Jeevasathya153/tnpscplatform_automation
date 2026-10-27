const {test,expect}=require('@playwright/test');
const { SignInPage } = require('../pages/signInPage');
const { SignInData } = require('../test-data/signInData');
const { ProgressPage } = require('../pages/progressPage');

test('Progress Page',async({page})=>{
    
    const signinpage=new SignInPage(page);
    const progresspage=new ProgressPage(page);

    await page.goto('https://tnpsc-preparation-platform.vercel.app/');

        await signinpage.signIn(SignInData.email,SignInData.password);
        console.log("Login Successfull");   

        await progresspage.progress();
        console.log("Progress Downloaded Successfully");

        
})