const { test, expect } = require('@playwright/test');
const { SignInPage } = require('../pages/signInPage');
const { SignInData } = require('../test-data/signInData');
const { OfflineBooksPage } = require('../pages/offlineBooksPage');

test('Offline Book Test',async({page})=>{

    const signinpage= new SignInPage(page);
    const offlinebookspage=new OfflineBooksPage(page);
    
    await page.goto('https://tnpsc-preparation-platform.vercel.app/');
    
        await signinpage.signIn(SignInData.email,SignInData.password);
        console.log("Login Successfull");

        await offlinebookspage.offlineBooksDownload();
        await expect(page.getByRole('heading',{name:'TNPSC Official General Studies'})).toBeVisible();
        console.log("Offline Books Page Downloading successfully");

        await offlinebookspage.offlineBooksDelete();
        await expect(page.getByRole('heading',{name:'TNPSC Official General Studies',exact:true})).toHaveCount(0);
        console.log("Offline Books Page Deleting Successfully")

});
