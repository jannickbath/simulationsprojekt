import { mount } from 'cypress/react18';
import Textbox from '../../src/components/Header/Textbox';
import { useBoundStore } from '../../src/components/Zustand/useBoundStore';
import "../../src/styles/css/main.css";

describe('Textbox Component', () => {
  const containedText = "This is some random Text.";

  function focusAndPressKeyInTextbox(char: string): void {
    cy.get(".textbox").click(); // focus textbox
    cy.get('.input-div').type(char);
  }

  // Runs before each test
  beforeEach(() => {
    useBoundStore.setState({
        text: { remainingText: containedText, typedText: '', text: containedText },
    });
    mount(<Textbox />);
  });

  it('Renders correctly with initial text', () => {
    cy.get('.textbox').should('exist');
    cy.get('.input-div').should('have.text', containedText);
  });

  it("Has a before element that is shown by default and hidden on focus", () => {
    cy.get(".textbox").pseudoElement("::before", "opacity").should("eq", "1");
    cy.get(".textbox").click().wait(500);
    cy.get(".textbox").pseudoElement("::before", "opacity").should("eq", "0");
  });

  it('Handles correct key press', () => {
    const correctKey = containedText[0];
    focusAndPressKeyInTextbox(correctKey);
    cy.get('.previous-text span').last()
      .should('have.text', correctKey)
      .get("b").should("not.exist");
  });

  it('Handles incorrect key press', () => {
    const incorrectKey = 'z';
    focusAndPressKeyInTextbox(incorrectKey);
    cy.get('.previous-text span').last()
      .should("exist")
      .get("b").should("exist");
  });

  it('Handles backspace key press', () => {
    const incorrectKey = "z";
    focusAndPressKeyInTextbox(incorrectKey);
    cy.get('.input-div').type('{backspace}');
    cy.get('.previous-text span').should("not.exist");
  });
});
