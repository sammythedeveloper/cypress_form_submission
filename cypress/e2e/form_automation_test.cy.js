describe("template spec", () => {
  it("passes", () => {
    //1.I used thiss link to navigate to the form page so that i can open it on cypress and start filling the input sections one by one
    cy.visit(
      "https://www.jotform.com/build/251487061785162?s=templates&salesforceTemplate=1"
    );
    //2.to fill the input for first name i followed the step of copying the input section and used that respresentation pasted it in my script and added the 'TYPE()' tag since i am inputing data to the form and i used this through out the whole process except for the one where i select the business type
    cy.get("#first_4").type("James");
    cy.get("#last_4").type("Bond");
    cy.get("#input_6").type("Bond Company ");
    cy.get("#input_12_full").type("(000)000-0000");
    cy.get("#input_5").type("jbond@example.com");
    cy.get("#input_3_addr_line1").type("123 London Street ");
    cy.get("#input_3_addr_line2").type("Apt 2");
    cy.get("#input_3_city").type("London");
    cy.get("#input_3_state").type("Maryland");
    cy.get("#input_3_postal").type("20902");
    //3. Here i used the 'select()' tag since there is option to select out of the list where we toggle
    cy.get("#input_11").select("Store");
    cy.get("#input_8").type(" This is a sample text.");
    //Finally i used the 'Click()' tag to submit the form
    cy.get("#input_14").click();
  });
});
