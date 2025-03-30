describe ("Opciones de click",()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

      beforeEach(() => {
        // Interceptar todas las solicitudes (GET, POST, fetch, XHR) y desactivar los logs
        cy.intercept('**/*').as('allRequests');
        
        // Opcional: Si sigues viendo logs, puedes forzar a que Cypress no registre las solicitudes
        cy.intercept('**', { log: false });  // Desactivar log para todas las solicitudes
      });

    it("Click sencillo",()=>{
        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("admin123")
        cy.wait(1000)
        cy.get('.oxd-button').should("be.visible").click()
        cy.wait(2000)
        cy.get(':nth-child(4) > .oxd-main-menu-item').should("be.visible").click()


    })

    it("Click force true",()=>{
        
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      
      cy.title().should('eq','OrangeHRM')
      cy.wait(1000)
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin")
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("admin123")
      cy.wait(1000)
      cy.get('.oxd-button').should("be.visible").click({force: true})
      cy.wait(2000)
      cy.get(':nth-child(4) > .oxd-main-menu-item').should("be.visible").click()


  })

  it.only("Click por coordenadas",()=>{
        
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
    cy.title().should('eq','OrangeHRM')
    cy.wait(1000)
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin")
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("admin123")
    cy.wait(1000)
    cy.get('.oxd-button').should("be.visible").click({force: true})
    cy.wait(2000)
    cy.get('.oxd-brand-banner > img').should("be.visible").click(5,5)


})


}
)//cierre de describe