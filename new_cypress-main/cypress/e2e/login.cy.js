describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

         cy.get('#mail').type('german@dolnikov.ru')
         cy.get('#pass').type('iLoveqastudio1')
         cy.get('#loginButton').click();

         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#messageHeader').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

        it('Не ерный пароль и верный логин', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
   
            cy.get('#mail').type('german@dolnikov.ru')
            cy.get('#pass').type('iLoveqastudio55')
            cy.get('#loginButton').click();
            
            cy.get('#messageHeader').contains('Такого логина или пароля нет');
            cy.get('#messageHeader').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
        it('Верный пароль и не верный логин', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
   
            cy.get('#mail').type('germaaan@dolnikov.ru')
            cy.get('#pass').type('iLoveqastudio1')
            cy.get('#loginButton').click();
            
            cy.get('#messageHeader').contains('Такого логина или пароля нет');
            cy.get('#messageHeader').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
        it('Логин без @', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
   
            cy.get('#mail').type('germandolnikov.ru')
            cy.get('#pass').type('iLoveqastudio1')
            cy.get('#loginButton').click();
            
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
            cy.get('#messageHeader').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
        it('Востановление пароля', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
   
            cy.get('#forgotEmailButton').click();
            cy.get('#mailForgot').type('german@dolnikov.ru')
            cy.get('#restoreEmailButton').click();
            
            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
            cy.get('#messageHeader').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
        it('Напиши проверку на приведение к строчным буквам в логине', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
   
            cy.get('#mail').type('GerMan@Dolnikov.ru')
            cy.get('#pass').type('iLoveqastudio1')
            cy.get('#loginButton').click();
   
            cy.get('#messageHeader').contains('Такого логина или пароля нет');
            cy.get('#messageHeader').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
           })
    })
