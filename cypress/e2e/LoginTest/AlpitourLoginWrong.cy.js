describe('Login with fixtures data', ()=> {
    it("I should try to login",() => {
        cy.visit('https://account.alpitourworld.it/login?client_id=54sv0h38v4k60cugm13pclh6lq&redirect_uri=https://www.alpitour.it/')

        if(cy.url().should('include', 'login')){
            cy.fixture('userData.json').then(userData => {
                const username = userData.username
                const password = "cavallo"
                cy.get('.w-80 > :nth-child(1) > .input').type(username)
                cy.get('.relative.flex > .my-2 > .input').type(password)
                cy.get('.w-80 > #btn').click()
            }) 
        }  
    })

    it("The wrong's credentials banner is correctly presented",() => {
       if(cy.get('.w-80 > .px-6').should('be.visible')){
           cy.get('.w-80 > .px-6').screenshot('wrongLogin/wrong-clicking-login')
           console.log("Credentials are wrong. You dont have permission to log in")
       }
    })
})