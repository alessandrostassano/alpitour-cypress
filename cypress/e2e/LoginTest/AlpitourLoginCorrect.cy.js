describe('Login with fixtures data', ()=> {
    it("I should try to login",() => {
        cy.visit('https://account.alpitourworld.it/login?client_id=54sv0h38v4k60cugm13pclh6lq&redirect_uri=https://www.alpitour.it/')

        if(cy.url().should('include', 'login')){
            cy.fixture('userData.json').then(userData => {
                //console.log(userData)
                const username = userData.username
                const password = userData.password
                cy.get('.w-80 > :nth-child(1) > .input').type(username)
                cy.get('.relative.flex > .my-2 > .input').type(password)
                cy.get('.w-80 > #btn').click()               
            }) 
        }  
    })

    it("I'm now on the page",() => {
        if(cy.url().should('include', 'www.alpitour.it')){
            cy.screenshot({capture: 'fullPage'}).screenshot('correctLogin/correct-clicking-login')
            console.log("You are logging successfully!")
        } 
    })
 
})