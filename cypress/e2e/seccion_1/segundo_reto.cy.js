require('cypress-xpath')

describe ("Segundo reto",()=>{

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

    it("Prueba",()=>{
        cy.viewport(1920, 1080) //cambiar resolucion pantalla
        cy.visit("https://computer-database.gatling.io/computers", { waitForAnimations: false })
        
        cy.title().should('eq','Computers database')
        cy.wait(1000)
        //buscando
        cy.get('#searchbox').should("be.visible").type("ARRA")
        cy.get('#searchsubmit').should("be.visible").click()
        
        //agreagando
        const inputValue = "AMAC";

        cy.get(".btn.success").should("be.visible").click()
        cy.wait(1000)
        cy.get("[name='name']").should("be.visible").type(inputValue)
        cy.get("[name='introduced']").should("be.visible").type("2025-01-01")
        cy.get("[name='discontinued']").should("be.visible").type("2025-12-01")
        cy.get("[name='company']").should("be.visible").select("Apple Inc.").should("have.value","1")
        cy.get("[value='Create this computer']").should("be.visible").type("AMAC")
        //
        cy.get('.alert-message').should("have.text",`Done !  Computer ${inputValue} has been created`)
    })


}
)//cierre de describe