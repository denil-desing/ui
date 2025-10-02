class RegisterPage {
    get inputName() { return $('#input_name'); }
    get inputAddress() { return $('#input_address'); }
    get inputEmail() { return $('#input_email'); }
    get inputMobile() { return $('#input_mobile'); }
    get inputPassword() { return $('#input_password'); }
    get inputRePassword() { return $('#input_reenterpassword'); }
    get btnRegister() { return $('#btn_signup'); }

    async register(user) {
        await this.inputName.setValue(user.name);
        await this.inputAddress.setValue(user.address);
        await this.inputEmail.setValue(user.email);
        await this.inputMobile.setValue(user.mobile);
        await this.inputPassword.setValue(user.password);
        await this.inputRePassword.setValue(user.repassword);
        await this.btnRegister.click();
    }
}

module.exports = new RegisterPage();
