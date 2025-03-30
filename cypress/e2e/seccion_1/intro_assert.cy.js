describe ("Introduccion a los assert",()=>{

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

    it("Demo de los asserts",()=>{
        
        cy.visit("https://demoqa.com/automation-practice-form")
        
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)
        cy.get("#firstName").should("be.visible").type("Miguel")
        cy.get("#lastName").should("be.visible").type("Loza")
        cy.wait(1000)
        cy.get("#userEmail").should("be.visible").should("be.enabled").type("correo@gmail.com")

    })


}
)//cierre de describe