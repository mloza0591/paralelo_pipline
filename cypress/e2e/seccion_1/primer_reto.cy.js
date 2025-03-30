require('cypress-plugin-tab')

describe ("Primer reto",()=>{

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
        cy.visit("https://demoqa.com/webtables", { waitForAnimations: false })
        
        cy.title().should('eq','DEMOQA')
        //cy.wait(1000)
        cy.get('#searchBox').should("be.visible").type("Cierra")
        cy.get('#searchBox').should("be.visible").clear()

        //agregando campo
        cy.get('#addNewRecordButton').should("be.visible").click()
        cy.wait(1000)
        cy.get('#firstName').should("be.visible").type("Miguel").tab().
        type("Loza").tab().
        type("ml@gmail.com").tab().
        type("35").tab().type("5000").tab().type("Sistemas")
        cy.get('#submit').should("be.visible").click()

        cy.get('#searchBox').should("be.visible").type("Miguel")
        cy.get('#searchBox').should("be.visible").clear()

        //editar el campo
        cy.get('#edit-record-4').should("be.visible").click()
        cy.wait(1000)
        cy.get('#salary').should("be.visible").clear().type("7000")
        cy.wait(1000)
        cy.get('#submit').should("be.visible").click()

        //eliminar el campo
        cy.get('#delete-record-4').should("be.visible").click()
        cy.wait(1000)
    })

}
)//cierre de describe