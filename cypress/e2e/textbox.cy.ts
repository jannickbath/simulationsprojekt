/// <reference types="cypress" />

describe('Typeracer', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5174/');
    })

    function focusAndPressKeyInTextbox(char: string) {
      cy.get(".textbox").click(); // focus textbox
      cy.get('.input-div').type(char);
    }

    async function useTextBoxContent(cb: (text: string) => void) {
      cy.get(".input-div").invoke("text").then(cb);
    }

    it('Renders correctly with initial text', () => {
      cy.wait(400);
      cy.get('.textbox').should('exist');
      cy.get('.textbox').should("not.be.empty");
    });

    it("Has a before element that is shown by default and hidden on focus", () => {
      cy.get(".textbox").pseudoElement("::before", "opacity").should("eq", "1");
      cy.get(".textbox").click().wait(500);
      cy.get(".textbox").pseudoElement("::before", "opacity").should("eq", "0");
    });

    it('Handles correct key press', () => {
      cy.wait(400);
      useTextBoxContent(text => {
        const correctKey = text[0];
        focusAndPressKeyInTextbox(correctKey);
        
        cy.get('.previous-text span').last()
          .should('have.text', correctKey)
          .get("b").should("not.exist");
      });    
    });
  
    it('Handles incorrect key press', () => {
      cy.wait(400);
      useTextBoxContent(text => {
        const incorrectKey = text[0] == "z" ? "x" : "z";
        focusAndPressKeyInTextbox(incorrectKey);
        cy.get('.previous-text span').last()
          .should("exist")
          .get("b").should("exist");
      });
    });
  
    it('Handles backspace key press', () => {
      cy.wait(400);
      useTextBoxContent(text => {
        const incorrectKey = text[0] == "z" ? "x" : "z";
        focusAndPressKeyInTextbox(incorrectKey);
        cy.get('.input-div').type('{backspace}');
        cy.get('.previous-text span').should("not.exist");
      });
    });
});
  