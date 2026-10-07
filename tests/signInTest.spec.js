const {test,expect}=require('@playwright/test');
const {SignInPage} = require('../pages/signInPage');
const readExcel = require('../utils/excelReader');

const Data = readExcel('Data.xlsx', 'Sheet1');

test('Sign In Test',async({page})=>{

   const signinpage=new SignInPage(page);

   
   for(const data of Data){
         await page.goto("https://tnpsc-preparation-platform.vercel.app/")
         await signinpage.signIn(data.email,data.password);

         console.log(data.ExpectedResult);

        if (data.ExpectedResult === 'Success') {
         await expect(page.getByRole('heading',{name:"Welcome Back! 👋"})).toBeVisible();
         console.log("Login Successful: ",data.email);
         }

         else{
            console.log("Login expected to fail ",data.email);
         }
      }
});

