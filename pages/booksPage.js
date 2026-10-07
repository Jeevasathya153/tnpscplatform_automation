class BooksPage{
    constructor(page){
        this.page=page;

        this.booksButton=page.getByRole('link',{name:'📗 Books'});
        this.studyMaterialButton=page.getByRole('button',{name:'Study Materials'});
        this.generalStudiesButton=page.getByRole('button',{name:'General Studies',exact:true});
        this.vaoMaterial=page.getByRole('heading',{name:'VAO Mini Materials',exact:true}).locator('..').locator('..');

        this.previousYearButton=page.getByRole('button',{name:'Previous Year'});
        this.tamilButton=page.getByRole('button',{name:'Tamil',exact:true});
        this.tamilquestions=page.getByRole('heading',{name:'தமிழ் இலக்கிய வினாக்கள் Part-1',exact:true}).locator('..').locator('..');
        
        this.backButton=page.getByRole('button',{name:'← Back to Books'});
        //this.downloadButton=page.getByRole('button',{name:'Save for offline'});
   }

    async studymaterials(){
        await this.booksButton.click();
        await this.studyMaterialButton.click();
        await this.generalStudiesButton.click();
        await this.vaoMaterial.getByRole('button',{name:'View',exact:true}).click();
        await this.backButton.click();
        await this.vaoMaterial.getByRole('button',{name:'Save for offline',exact:true}).click();
        
    }

    async previousyearquestions(){
        await this.previousYearButton.click();
        await this.tamilButton.click();
        await this.tamilquestions.getByRole('button',{name:'View',exact:true}).click();
        await this.backButton.click();
        await this.previousYearButton.click();
        await this.tamilButton.click();
        await this.tamilquestions.getByRole('button',{name:'Save for offline',exact:true}).click();
    }
}
module.exports={BooksPage};



