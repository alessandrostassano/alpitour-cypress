// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => { 
        cy.visit('https://account.alpitourworld.it/login?client_id=54sv0h38v4k60cugm13pclh6lq&redirect_uri=https://www.alpitour.it/')
        if(cy.url().should('include', 'login')){
            cy.fixture('userData.json').then(userData => {
                const username = userData.username
                const password = userData.password
                cy.get('.w-80 > :nth-child(1) > .input').type(username)
                cy.get('.relative.flex > .my-2 > .input').type(password)
                cy.get('.w-80 > #btn').click()               
            }) 
        }     
})

Cypress.Commands.add('newLogin', (username, password) => { 
   
        cy.fixture('testCredentials.json').then(testCredentials => {
            const username = testCredentials.username
            const password = testCredentials.password
            cy.xpath("//div[@class='my-2 relative justify-center']//input[@type='email']").type(username)
            cy.xpath("//div[@class='my-2 relative justify-center w-full -my-0']//input[@type='password']").type(password)
            cy.xpath("(//button[@id='btn'])[1]").click()               
        }) 
    }     
)