describe('Alpitour Maldive Test', () => {

  let plpPrice1;

  it('Visits Alpitour site', () => {
    cy.visit('http://mainstream-b2x.tfwb-alca01.alpicn.local/')
    cy.log('Website loaded!')
  })

  it('should check correct url', () => {
    cy.url().should('include', 'alca01.alpicn')
    cy.log('URL confirms we are in prod')
  })

  /*it('Should check for correct element of the page and click it', () => {
    cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').should('be.visible').click()
    cy.log('Searching various elements')
  })*/

  it('Search on the web-app a final destination for Holiday', () => {
    cy.get('.NewSearchBarComponent_searchBarText__3jDle').click()
    cy.get('#searchBarTextField').type('Maldive')
    cy.log('Searching Maldive!')
  })

  it('I select the first result of the scheduling', () => {
    cy.get('.NewSearchBarComponent_list__24Gdg > :nth-child(1)').click()
    cy.log('Click on the first result')
  })

  it('I select Milano Maplensa', () => {
    cy.xpath("//label[@class='NewSearchBarComponent_labelList__nk0k-']//input[@value='VRN|VERONA']").click()
    cy.xpath("//label[@class='NewSearchBarComponent_labelList__nk0k-']//input[@value='MXP|MILANO MALPENSA']").click()   
    cy.xpath("//label[@class='NewSearchBarComponent_labelList__nk0k-']//input[@value='VRN|VERONA']").click()
    cy.xpath("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained NewSearchBarComponent_footerButton__1vHTM false MuiButton-containedPrimary']")
    .scrollIntoView()
    .should('be.visible')
    .click()
  })

  it('I book for two people and i continue', () => {
    cy.get('.NewSearchBarComponent_dialogFooter__RKsE4 > .MuiButtonBase-root > .MuiButton-label > .NewSearchBarComponent_buttonWithInnerHtml__1ICtn > p').click()
  })

  it('I click the first date available and compare PLP price with Calendar Price, and PLP with PDP', () => {    
    cy.xpath("(//div[@class='react-calendar__viewContainer']//div[@class='react-calendar__month-view__days']//*[@type='button'][not(@disabled)])[1]").click()
    cy.xpath("(//div[@class='react-calendar__viewContainer']//div[@class='react-calendar__month-view__days']//*[@type='button'][not(@disabled)]//div[@class='NewSearchBarComponent_tilePrice__3m01A'])[1]")
    .invoke('text')
    .then((calendarPrice) => {
    const calendarPrice1 = calendarPrice.replace(/[^\d]/g, '')
    cy.get(':nth-child(2) > .MuiButtonBase-root').click()
    //cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()
    cy.xpath("(//div//div[@class='OfferContainerComponent_cardWrapper__2p9tp OfferContainerComponent_horizontal__2apJh undefined']//div[@class='OfferContainerComponent_price__1uOrV OfferContainerComponent_grey__143b1 OfferContainerComponent_full__3ypZA']//span)[1]")
    .invoke('text')
    .then((plpPrice) => {
        plpPrice1 = plpPrice.replace(/[^\d]/g, '')
        if(expect(plpPrice1).to.not.eq(calendarPrice1)) {
          cy.log('The price is not equal')
        }
        else{
          cy.log('The price is equal')
        }
    });
    }); 
   }) 
   
   it('Compare PLP price with PDP price', () => {
    cy.xpath("(//div[@class='OfferContainerComponent_buttonContainer__1dTm6 OfferContainerComponent_full__3ypZA']//a[@target='_blank'])[1]")     
    .invoke("removeAttr","target")
    .click()
    cy.xpath("//div[@class='ProductRecapComponent_price__1YWqz']")
    .invoke('text')
    .then((pdpPrice) => {
      
        const pdpPrice1 = pdpPrice.replace(/[^\d]/g, '')
        if(expect(plpPrice1).to.eq(pdpPrice1)) {
          cy.log('The price is not equal')
        }
        else{
          cy.log('The price is equal')
        }
    });
  })

  it('I continue to the checkout detail', () => {
    cy.xpath("//div[@class='ProductRecapComponent_button__1a0zU false']").click()
  })
  
  it('I continue to the checkout detail', () => {
    cy.xpath("(//div[@class='ReceiptComponent_btnWrap__VB0BL']//button[contains(text(),'Procedi')])[2]").scrollIntoView()
    .click()
  })

})
