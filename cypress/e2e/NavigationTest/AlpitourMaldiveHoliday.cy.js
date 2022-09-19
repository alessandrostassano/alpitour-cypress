describe('Alpitour Maldive Test', () => {
  it('Visits Alpitour site', () => {
    cy.visit('https://www.alpitour.it/', { timeout: 10000})
    cy.log('Website loaded!')
  })

  it('should check correct url', () => {
    cy.url().should('include', 'alpitour.it')
    cy.log('URL confirms we are in prod')
  })

  it('Should check for correct element of the page and click it', () => {
    cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').should('be.visible').click()
    cy.log('Searching various elements')
  })

  it('Search on the web-app a final destination for Holiday', () => {
    cy.get('.NewSearchBarComponent_searchBarText__3jDle').click()
    cy.get('#searchBarTextField').type('Maldive')
    cy.log('Searching Maldive!')
  })

  it('I select the first result of the scheduling', () => {
    cy.get('.NewSearchBarComponent_list__24Gdg > :nth-child(1)').click()
    cy.log('Click on the first result')
  })

  it('I select Milano Malpensa as an airport to departure', () => {
    cy.get(':nth-child(3) > .NewSearchBarComponent_listIconDialog__2BBIp').click()
    cy.get('.NewSearchBarComponent_dialogFooter__RKsE4 > .MuiButtonBase-root > .MuiButton-label').click()
    cy.log('Milano Malpensa MPX correctly choosed')
  })

  it('I book for two people and i continue', () => {
    cy.get('.NewSearchBarComponent_dialogFooter__RKsE4 > .MuiButtonBase-root > .MuiButton-label > .NewSearchBarComponent_buttonWithInnerHtml__1ICtn > p').click()
    cy.log('Milano Malpensa MPX correctly choosed')
  })

  it('I click 23 October and i go to the results page', () => {
    cy.get(':nth-child(1) > [style="display: flex; align-items: flex-end;"] > [style="flex-grow: 1; width: 100%;"] > .react-calendar__month-view__days > :nth-child(28)').click()
    cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiButton-label > .NewSearchBarComponent_buttonWithInnerHtml__1ICtn > p').click()
    cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()
    cy.log('Specific date choosed')
  })

  it('Maldive results for this day should be 37 and the cards in the first page 9', () => {
  cy.get('.ResultListComponent_openFilterButton__2A7Ks > div > p')
  .should('have.text', 'Filtra i 37 risultati')
  cy.get('div[class="OfferContainerComponent_cardWrapper__2p9tp OfferContainerComponent_horizontal__2apJh undefined"]')
  .its('length')
  .should('eq', 9)
  })
})