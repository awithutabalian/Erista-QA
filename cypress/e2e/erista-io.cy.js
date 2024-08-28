it('Erista io', () => {

    cy.visit('https://google.com')

    cy.get(' .gLFyf').type('erista {Enter}')

    // cy.contains('Penelusuran Google').click()

    cy.contains('Erista | Aplikasi Gereja').click()
})