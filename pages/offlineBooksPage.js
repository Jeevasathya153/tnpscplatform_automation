class OfflineBooksPage{
    constructor(page){
        this.page=page;

        this.offlineBooksButton=page.getByText(/Offline Books/);
        this.browseBooksButton=page.getByRole('button',{name:'Browse Books'});
        this.tnpscMateiral=page.getByRole('heading',{name:'TNPSC Official General Studies',exact:true}).locator('..').locator('..');
    }

    async offlineBooksDownload(){

        await this.offlineBooksButton.click();
        await this.browseBooksButton.click();
        await this.tnpscMateiral.getByRole('button',{name:'Save for Offline'}).click();
        await this.page.getByText(/Saved/).waitFor({state:'visible'});
    }

    async offlineBooksDelete(){

        await this.offlineBooksButton.click();
        this.page.once('dialog', async dialog => {
        console.log('Dialog message:', dialog.message());
        await dialog.accept();
         });
        await this.tnpscMateiral.getByRole('button', {name: 'Remove from offline',exact: true}).click();
    }
}

module.exports={OfflineBooksPage};