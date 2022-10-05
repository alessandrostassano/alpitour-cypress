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

  it('I click the first date available', () => {
    cy.xpath("(//div[@class='react-calendar__viewContainer']//div[@class='react-calendar__month-view__days']//*[@type='button'][not(@disabled)])[1]").click()
    cy.xpath("(//div[@class='react-calendar__viewContainer']//div[@class='react-calendar__month-view__days']//*[@type='button'][not(@disabled)]//div[@class='NewSearchBarComponent_tilePrice__3m01A'])[1]").invoke('text').then(priceValue)
    cy.get(':nth-child(2) > .MuiButtonBase-root').click()
  })

  it('I controll the first result value and i compare the price', () => {
  
  cy.xpath("(//div//div[@class='OfferContainerComponent_cardWrapper__2p9tp OfferContainerComponent_horizontal__2apJh undefined']//div[@class='OfferContainerComponent_price__1uOrV OfferContainerComponent_grey__143b1 OfferContainerComponent_full__3ypZA']//span)[1]").invoke('text').then((priceValue2) => {
  if(expect(priceValue).to.equal(priceValue2)){
      cy.log("The price is equal! Test passed")
    } else {
      cy.log("The price is not equal! Warning in the next step!")
    }
    })
  }) 
})


