class SignInPage{
    constructor(page){
        this.page = page;

        this.email=page.getByRole('textbox',{name:'your@email.com'});
        this.password=page.getByRole('textbox',{name:'••••••••'});
        this.signInButton=page.getByRole('button',{name:'Sign In'});

    }

    async signIn(email,password){
        await this.email.fill(email);
        await this.password.fill(password);
        await this.signInButton.click();
    }

}

module.exports = {SignInPage};


