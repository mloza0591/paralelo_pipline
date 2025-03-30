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

    it("Seccion 1 validando el titulo",()=>{
        
        cy.visit("https://demoqa.com/text-box")
        
        cy.title().should('eq','DEMOQA')
        //cy.wait(2000)
    })

}
)//cierre de describe