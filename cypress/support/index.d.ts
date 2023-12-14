type PseudoElement = "::before" | "::after";

declare namespace Cypress {
    interface Chainable {
      /**
       * Custom command to get the style of a pseudo-element.
       * @example cy.get('selector').pseudoElement('::before', 'color').should('eq', 'rgb(0, 0, 0)')
       */
      pseudoElement(pseudoElement: PseudoElement, property: string): Chainable<string>;
    }
}