const {test,expect}=require('@playwright/test');
const {SignInPage}=require('../pages/signInPage');
const {SignInData}=require('../test-data/signInData');
const {LogOutPage}=require('../pages/logOutPage');

test('Log Out Test',async({page})=>{

    const signinpage=new SignInPage(page);
    const logOutPage=new LogOutPage(page);

    await page.goto('https://tnpsc-preparation-platform.vercel.app/');
        await signinpage.signIn(SignInData.email,SignInData.password);
        console.log("Login Successfull");
        await logOutPage.logOut();
        console.log("Log Out Successfull");
});