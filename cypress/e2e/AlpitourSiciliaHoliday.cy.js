describe('Alpitour Sicilia Test', () => {
  it('Visits Alpitour site', () => {
    cy.visit('https://www.alpitour.it/', { timeout: 10000})
  })

  it('should check correct url', () => {
    cy.url().should('include', 'alpitour.it')
  })

  it('Should check for correct element of the page and click it', () => {
    cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').should('be.visible').click()
    
  })

  it('Search on the web-app a final destination for Holiday', () => {
    cy.get('.NewSearchBarComponent_searchBarText__3jDle').click()
    cy.get('#searchBarTextField').type('Sicilia - Italia')
  })

  it('I select the first result of the scheduling', () => {
    cy.get('.NewSearchBarComponent_list__24Gdg > :nth-child(1)').click()
  })

  it('I select Milano Malpensa as an airport to departure', () => {
    cy.get(':nth-child(3) > .NewSearchBarComponent_listIconDialog__2BBIp').click()
    cy.get('.NewSearchBarComponent_dialogFooter__RKsE4 > .MuiButtonBase-root > .MuiButton-label').click()
  })

  it('I book for two people and i continue', () => {
    cy.get('.NewSearchBarComponent_dialogFooter__RKsE4 > .MuiButtonBase-root > .MuiButton-label > .NewSearchBarComponent_buttonWithInnerHtml__1ICtn > p').click()
  })

  it('I click 24 September and i go to the results page', () => {
    cy.get(':nth-child(1) > [style="display: flex; align-items: flex-end;"] > [style="flex-grow: 1; width: 100%;"] > .react-calendar__month-view__days > :nth-child(28)').click()
    cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiButton-label > .NewSearchBarComponent_buttonWithInnerHtml__1ICtn > p').click()
  })
})