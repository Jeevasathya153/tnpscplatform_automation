class SubjectPage{
    constructor(page){
        this.page=page;

        this.subjectButton=page.getByText('Subjects');
        this.easyButton=page.getByRole('button',{name:'Easy'});
        this.tamilQuiz=page.getByRole('heading',{name:'General Studies - Easy'}).locator('..');
    }
    async subject(){
        await this.subjectButton.click();
        await this.easyButton.click();
        await this.tamilQuiz.getByRole('button',{name:'Start Quiz'}).click();
    }

    async selectAnswer(answer){
        await this.page.getByRole('button', {name: answer,exact: true}).click();
    }
   
    async next(){
        await this.page.getByRole('button',{name:/Next/}).click();
    }

    async submit(){
        await this.page.getByRole('button',{name:'Submit Quiz'}).click();
    }
}

module.exports={SubjectPage};