import Test from '../components/Test'
import { mount } from 'cypress/react18'

describe('<Test />', () => {
  it('renders', () => {
    mount(<Test />);
    cy.get(".customClass").should("have.text", "Blah");
  });
})