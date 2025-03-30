describe ("Validando titulo de la pagina",()=>{

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

    it("Type Enter",()=>{
        
        cy.visit("https://www.google.com/")
        
        cy.title().should('eq','Google')
        cy.wait(2000)
        //elemento por selector
        //cy.get("#APjFqb").type("cypress io")
        //por el name del campo
        cy.get("[name='q']").type("cypress io {enter}")

    })

}
)//cierre de describe