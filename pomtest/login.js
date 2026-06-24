exports.login= class login {
    constructor(page){
        this.page=page,
        this.loginlink=".ico-login";
        this.mail="#Email";
        this.pwd="#Password";
        this.loginButton=".login-button"
    }


//Methods
    async gotoPage(){
        await this.page.goto("https://demowebshop.tricentis.com/")
    }
    async loginPage(email,password){
        await this.page.locator(this.loginlink).click();
        await this.page.locator(this.mail).fill(email);
        await this.page.locator(this.pwd).fill(password);
        await this.page.locator(this.loginButton).click();
    }
}
