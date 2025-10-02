const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const LoginPage = require('../pages/LoginPage');

Given('la app está abierta en la pantalla de login', async () => {
    assert(await LoginPage.inputEmail.isDisplayed(), 'El campo de email no se muestra');
    assert(await LoginPage.inputPassword.isDisplayed(), 'El campo de password no se muestra');
    assert(await LoginPage.btnLogin.isDisplayed(), 'El botón de login no se muestra');
});

When('el usuario ingresa email {string} y password {string}', async (email, password) => {
    await LoginPage.inputEmail.setValue(email);
    await LoginPage.inputPassword.setValue(password);
});

When('el usuario presiona el botón de login', async () => {
    await LoginPage.btnLogin.click();
});

Then('el usuario debería ver la pantalla principal', async () => {
    const homeScreen = await $('#login'); 
    assert(await homeScreen.isDisplayed(), 'No se muestra la pantalla principal después del login');
});
