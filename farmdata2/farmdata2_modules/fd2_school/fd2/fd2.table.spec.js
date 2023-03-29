describe("Test the harvest table", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/FD2")
    })
      
    it("Check table columns", () => {
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=h0]").should("have.text","ID")
        cy.get("[data-cy=h1]").should("have.text","Date")
        cy.get("[data-cy=h2]").should("have.text","Area")
        cy.get("[data-cy=h3]").should("have.text","Crop")
        cy.get("[data-cy=h4]").should("have.text","Yield")
        cy.get("[data-cy=h5]").should("have.text","Units")
        cy.get("[data-cy=table-headers]").children().should("have.length", 6)


    })
    it("Check table filtering by crop", () => {
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=crop-dropdown] >[data-cy=dropdown-input]").select(1)

       
        cy.get("[data-cy=table-body]").children().should("have.length",4)
      

        //for some reason the expected value has some spaces after the cropName and I had to do this to pass the test.
        cy.get("[data-cy=td-r0c3]").should("have.text","ARUGULA     ")
        cy.get("[data-cy=td-r0c3]").should("have.text","ARUGULA     ")
        cy.get("[data-cy=td-r0c3]").should("have.text","ARUGULA     ")
        cy.get("[data-cy=td-r0c3]").should("have.text","ARUGULA     ")
           
      

    })
   
})