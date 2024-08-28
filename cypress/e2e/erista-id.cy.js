it('Erista id', () => {

    cy.visit('https://google.com')

    cy.get(' .gLFyf').type('erista {Enter}')

    // cy.contains('Penelusuran Google').click()

    cy.contains('Erista - Software Development').click()
    //cy.scrollTo('bottom')

})