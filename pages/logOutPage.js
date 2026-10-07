class LogOutPage {
    constructor(page) {
        this.page=page;

        this.profileButton=page.getByRole('link',{name:'Profile'});
        this.settingsButton=page.getByRole('button',{name:'Settings'});
        this.logOutButton=page.getByRole('button',{name:/Logout/});

    }

    async logOut(){
        await this.profileButton.click();
        await this.settingsButton.click();
        await this.logOutButton.click();
    }
}
module.exports={LogOutPage};