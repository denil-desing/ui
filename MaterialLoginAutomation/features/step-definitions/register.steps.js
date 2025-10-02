const { Given, When, Then } = require('@cucumber/cucumber');
const RegisterPage = require('../pages/RegisterPage');
const assert = require('assert');

Given('que estoy en la pantalla de registro', async () => {
    assert(await RegisterPage.inputName.isDisplayed(), 'No se muestra el campo nombre en registro');
});

When('completo los datos del usuario', async (dataTable) => {
    const data = dataTable.rowsHash();
    await RegisterPage.register({
        name: data.name,
        address: data.address,
        email: data.email,
        mobile: data.mobile,
        password: data.password,
        repassword: data.repassword
    });
});

Then('deberia ver el mensaje de exito', async () => {
    const successMessage = await $('#success_message'); // Deberiamode cambiar por el corrrecto
    const texto = await successMessage.getText();
    assert.strictEqual(texto, 'Registro exitoso');
});
