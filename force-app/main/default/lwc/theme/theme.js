import { LightningElement } from 'lwc';

export default class Theme extends LightningElement {

    styles = {
        // Colors
        '--color-primary': '#679186',
        '--color-secondary': '#264e70',
        '--color-danger': '#f9b4ab',
        '--color-white': '#fff',
        '--color-accent-1': '#fdebd3',

        // Font Size
        '--font-size-h1': '3rem',
        '--font-size-h2': '2rem',
        '--font-size-p': '1rem',
        '--font-size-small': '0.8rem',

        // Spacing
        '--spacing-large': '2rem',
        '--spacing-normal': '1rem',
        '--spacing-small': '0.5rem',

        // Border
        '--border-radius': '0.25rem',
    }

    connectedCallback() {
        const doc = document.documentElement;
        for (const prop in this.styles) {
            doc.style.setProperty(prop, this.styles[prop]);
        }
    }
}