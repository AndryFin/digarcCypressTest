
describe("Career search", () => {
  
   it("scrolling down the page and clicking the link", () => {
	cy.visit("/");
	cy.get('footer').scrollIntoView();
	cy.get('a').contains('Careers').click();
   });
	   
   it("typing ASSOCIATE and hit ENTER", () => {
	cy.get('[id=search_keywords]').type("ASSOCIATE").type('{downarrow}{enter}');
	cy.wait(5000);
   });   
	   
});
