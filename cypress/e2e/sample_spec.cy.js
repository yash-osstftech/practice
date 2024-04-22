import React from 'react';
import { mount } from '@cypress/react';
// import MyComponent from './MyComponent.astro';
import Index from "../../src/pages/index.astro"
describe('MyComponent', () => {
  it('renders correctly', () => {
    mount(<Index client:load />);
    cy.get('h1').should('contain.text', 'Hello, Astro!');
  });

  it('updates state correctly', () => {
    mount(<MyComponent client:load />);
    cy.get('button').click();
    cy.get('span').should('contain.text', 'Count: 1');
  });
});