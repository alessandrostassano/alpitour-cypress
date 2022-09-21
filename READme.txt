Test su Login e Navigazione del sito B2C Alpitour

3 test su Login
2 Navigation 

-Importante: integrazione con aallure necessaria




Per fare una ricerca nulla su una searchbar, ovvero senza inserire testo, si
utilizza il seguente codice: 

describe('Keyboard press simulation', () >{
    it('should submit searchbox with pressing enter', () => {
        cy.visit('url generico')
        cy.get('#searchTerm').type('just some text {enter}')
    })
})


Per scrollare fino ad un elemento, usare
cy.get('#submit-button').scrollIntoView()
