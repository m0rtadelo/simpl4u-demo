import { StaticElement } from '../../simpl4u/core/static-element.js';
/** @typedef {import('../../simpl4u/components/simpl-navbar.js').NavbarDefinition} NavbarDefinition */

export class MyNavBar extends StaticElement {
  
  template() {
    return '<simpl-navbar id="navbar" name="MyApp"></simpl-navbar>';
  }

  onReady() {
    const navbar = this.get('navbar');
    if (!navbar) return;
    navbar.hideLang = false;
    navbar.hideTheme = false;
    navbar.languages = [ 
      { id: 'en', name: 'English' },
      { id: 'es', name: 'Español' },
      { id: 'ca', name: 'Català' },
    ]; // Set available languages in the navbar
    /** @type {NavbarDefinition[]} */
    const items = [
      { id: 'crud', name: 'contacts' },
      { id: 'todo', name: 'todo' },
      { id: 'form1', name: 'form1' },
      { id: 'form2', name: 'form2' },
      { id: 'services', name: 'services' }
    ];
    navbar.items = items;
  }
}
customElements.define('my-navbar', MyNavBar);
