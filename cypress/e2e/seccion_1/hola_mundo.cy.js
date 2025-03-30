describe ("curso cypress seccion 1",()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it("Mi primer test -> Hola mundo",()=>{
        cy.log("Hola mundo")
        cy.wait(2000)
    })

    it("Segundo test -> campo demoqa",()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.get("#userName").type("Miguel")
        cy.wait(4000)
    })
}
)//cierre de describe