const { test, expect } = require('@playwright/test');
const { SignInPage } = require('../pages/signInPage');
const { SignInData } = require('../test-data/signInData');
const { BooksPage } = require('../pages/booksPage');

test('Books Page',async({page})=>{

    const signinpage=new SignInPage(page);
    const bookspage=new BooksPage(page);
    
    await page.goto('https://tnpsc-preparation-platform.vercel.app/');

        await signinpage.signIn(SignInData.email,SignInData.password);
        console.log("Login Successfull");

        await bookspage.studymaterials();

        await expect (page.getByRole('heading',{name:'VAO Mini Materials'})).toBeVisible();
        console.log("Study Material opening Successfully");

        await expect(page.getByText(/Saved/)).toBeVisible();
        console.log("Study Material Downloaded Successfully");


        await bookspage.previousyearquestions();
        await expect (page.getByRole('heading',{name:'தமிழ் இலக்கிய வினாக்கள் Part-1'})).toBeVisible();
        console.log("Previous Year Question Paper opening Successfully");

        await expect(page.getByText(/Saved/)).toBeVisible();
        console.log("Previous Year Question Paper Downloaded Successfully");

});

