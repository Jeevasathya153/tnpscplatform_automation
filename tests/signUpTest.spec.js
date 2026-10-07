const {test,expect}=require('@playwright/test');
const {SignUpPage}=require('../pages/signUpPage');
//const {SignUpData}=require('../test-data/signUpData');
const readExcel = require('../utils/excelReader');
const Data = readExcel('Data.xlsx', 'Sheet2');

test('Sign Up Test',async({page})=>{

    const signuppage =new SignUpPage(page);
    
    
    for(const data of Data){
        await page.goto("https://tnpsc-preparation-platform.vercel.app/");
        await signuppage.signUp(data.firstName,data.lastName,data.email,data.password,data.confirmPassword);
        console.log(data.ExpectedResult);

        if (data.ExpectedResult === 'Success') {
         //await expect(page.getByRole('heading',{name:"Welcome Back! 👋"})).toBeVisible();
         console.log("SignUp Successful: ",data.email);
         }

         else{
            console.log("SignUp expected to fail ",data.email);
         }
    }
});