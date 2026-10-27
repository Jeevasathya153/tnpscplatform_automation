class ProgressPage{
    constructor(page){
        this.page=page;

        this.progressButton=page.getByText('Progress',{exact:true});
        this.downloadButton=page.getByRole('button',{name:'Download'});
    }

    async progress(){
        await this.progressButton.click();
        await this.downloadButton.click();
    }
}
module.exports={ProgressPage};