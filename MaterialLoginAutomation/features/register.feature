Feature: Registro de usuario
  Scenario: Registro exitoso
    Given que estoy en la pantalla de registro
    When completo los datos del usuario
      | name       | John Doe        |
      | address    | Calle Falsa 123 |
      | email      | john@example.com|
      | mobile     | 1234567890      |
      | password   | 123456          |
      | repassword | 123456          |
    And presiono el boton de registrar
    Then deberia ver el mensaje de exito

  Scenario: Registro con password diferente
    Given que estoy en la pantalla de registro
    When completo los datos del usuario con password incorrecto
    Then deberia ver el mensaje de error
