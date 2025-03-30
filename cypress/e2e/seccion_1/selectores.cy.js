require('cypress-xpath')

describe ("Tipos de selectores",()=>{

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

    it("Selector por id",()=>{
        cy.viewport(1920, 1080) //cambiar resolucion pantalla
        cy.visit("https://demoqa.com/text-box", { waitForAnimations: false })
        
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)
        cy.get('#userName').should("be.visible").type("Miguel")
        cy.get('#userEmail').should("be.visible").type("ml@gmail.com")

        
    })

    it("Selector por atributo",()=>{
        cy.viewport(1920, 1080) //cambiar resolucion pantalla
        cy.visit("https://demoqa.com/text-box", { waitForAnimations: false })
        
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)
        cy.get("[placeholder='Full Name']").should("be.visible").type("Miguel")
               
    })

    it("Selector por xpath",()=>{
        cy.viewport(1920, 1080) //cambiar resolucion pantalla
        cy.visit("https://demoqa.com/text-box", { waitForAnimations: false })
        
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)
        cy.xpath("//*[@id='userName']").should("be.visible").type("Miguel")
              
        cy.xpath("//textarea[@id='currentAddress']").should("be.visible").type("Direccion 1")
    })

    it("Selector por contains",()=>{
        cy.viewport(1920, 1080) //cambiar resolucion pantalla
        cy.visit("https://demoqa.com/automation-practice-form", { waitForAnimations: false })
        
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)
        cy.get(".custom-control-label").contains("Female").click()
        cy.wait(1000)
        cy.get(".custom-control-label").contains("Other").click()
    })

    it("Selector por copyselector",()=>{
        cy.viewport(1920, 1080) //cambiar resolucion pantalla
        cy.visit("https://demoqa.com/automation-practice-form", { waitForAnimations: false })
        
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)
        cy.get("#hobbiesWrapper > div.col-md-9.col-sm-12 > div:nth-child(2) > label").should("be.visible").click()
      
    })

    it("Selector por tipo de elemento y clase",()=>{
        cy.viewport(1920, 1080) //cambiar resolucion pantalla
        cy.visit("https://demoqa.com/automation-practice-form", { waitForAnimations: false })
        
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)
        cy.get("input.mr-sm-2.form-control#firstName").should("be.visible").type("Miguel Angel")
      
    })

    it("Selector por atributo e id",()=>{
        cy.viewport(1920, 1080) //cambiar resolucion pantalla
        cy.visit("https://demoqa.com/automation-practice-form", { waitForAnimations: false })
        
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)
        cy.get("#firstName[type='text']").should("be.visible").type("Miguel Angel")
      
    })

    it("Xpath con and y or",()=>{
        cy.viewport(1920, 1080) //cambiar resolucion pantalla
        cy.visit("https://demoqa.com/automation-practice-form", { waitForAnimations: false })
        
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)
        cy.xpath("//input[@id='firstName' or @placeholder='First Name']").should("be.visible").type("Miguel Angel")
        cy.xpath("//input[@id='lastName' and @type='text']").should("be.visible").type("Loza M")
    })

    it("Xpath por texto",()=>{
        cy.viewport(1920, 1080) //cambiar resolucion pantalla
        cy.visit("https://demoqa.com/automation-practice-form", { waitForAnimations: false })
        
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)
        cy.xpath("//h1[text()='Practice Form']").should("be.visible")
        cy.xpath("//div[text()='Elements']").should("be.visible").click()
        cy.xpath("//span[text()='Dynamic Properties']").should("be.visible").click()
    })
//contains solo necesita que parte del texto coincida 
    it.only("Xpath por contains",()=>{
        cy.viewport(1920, 1080) //cambiar resolucion pantalla
        cy.visit("https://demoqa.com/automation-practice-form", { waitForAnimations: false })
        
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)
        cy.xpath("//div[contains(text(),'Elemen')]").should("be.visible").click()
        cy.xpath("//span[contains(text(),'Dynamic')]").should("be.visible").click()
    })
}
)//cierre de describe