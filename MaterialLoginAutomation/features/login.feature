Feature: Login
  Scenario: Login exitoso
    Given que estoy en la pantalla de login
    When ingreso el email "test@example.com" y la password "123456"
    And presiono el boton de login
    Then deberia ver el mensaje de bienvenida