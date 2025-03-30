require('cypress-plugin-tab')

describe ("Ejemplo funcion tab",()=>{

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

    it("Type con tab",()=>{
        
        cy.visit("https://demoqa.com/automation-practice-form")
        
        cy.title().should('eq','DEMOQA')
        cy.wait(2000)
        cy.get("#firstName").type("Miguel").tab().
        type("Loza").tab().
        type("correo@gmail.com")
    })


}
)//cierre de describe