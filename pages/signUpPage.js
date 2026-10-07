class SignUpPage{
    constructor(page){
        this.page=page;

        this.createButton=page.getByRole('link',{name:'Create one'});
        this.firstName=page.getByPlaceholder('hari');
        this.lastName=page.getByRole('textbox',{name:'S',exact:true});
        this.email=page.getByRole('textbox',{name:'you@example.com'});
        this.password=page.getByRole('textbox',{name:'At least 6 characters'});
        this.confirmPassword=page.getByRole('textbox',{name:'Confirm your password'});
        this.createAccount=page.getByRole('button',{name:'Create Account'});
    }
    
    async signUp(firstName,lastName,email,password,confirmPassword){
        await this.createButton.click();
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.email.fill(email);
        await this.password.fill(password);
        await this.confirmPassword.fill(confirmPassword);
        await this.createAccount.click();
    }
}

module.exports={SignUpPage};