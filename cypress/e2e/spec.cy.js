///<

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {

    cy.visit('http://127.0.0.1:8080')
    cy.get('#signup-firstname').type('Jose')
    cy.get('#signup-lastname').type('Firmino')
    cy.get('#signup-email').type('teste333@teste.com')
    cy.get('#signup-phone').type('83911111111')
    cy.get('#signup-password').type('Gato@12345')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso')
  })
})