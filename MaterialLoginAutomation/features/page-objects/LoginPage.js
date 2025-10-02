class LoginPage {
    get inputEmail() { return $('#input_email'); }
    get inputPassword() { return $('#input_password'); }
    get btnLogin() { return $('#btn_login'); }
    get linkSignup() { return $('#link_signup'); } // opcional

    async login(email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }
}

module.exports = new LoginPage();
