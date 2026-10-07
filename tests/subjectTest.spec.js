const {test,expect}=require('@playwright/test');
const {SignInData} = require('../test-data/signInData');
const {SignInPage}=require('../pages/signInPage');
const {SubjectPage}=require('../pages/subjectPage');
const {quizData}=require('../test-data/quizData');

test('Subject Page',async({page})=>{

    const signinpage=new SignInPage(page);
    const subjectpage=new SubjectPage(page);
    
    await page.goto('https://tnpsc-preparation-platform.vercel.app/');


        await signinpage.signIn(SignInData.email,SignInData.password);
        await expect(page.getByRole('heading',{name:"Welcome Back! 👋"})).toBeVisible();
        
        await subjectpage.subject();
        console.log('Quiz Started Successfully');

        for (let i = 0; i < quizData.length; i++){
            await subjectpage.selectAnswer(quizData[i].answer);
            if (i < quizData.length - 1){
            await subjectpage.next();
            }
        }      

        await subjectpage.submit();
        console.log("Quiz Submitted Successfully");
        await expect(page.getByText('/Pass|Fail/'));

});