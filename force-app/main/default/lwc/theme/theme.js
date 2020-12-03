import { LightningElement, api } from 'lwc';

export default class Theme extends LightningElement {

    // Colors
    @api colorPrimary = '#679186';
    @api colorSecondary = '#264e70';
    @api colorAccent1 = '#fdebd3';
    @api colorDanger = '#f9b4ab';
    @api colorWhite = '#fff';

    // Font Sizes
    @api fontSizeH1 = '3rem';
    @api fontSizeH2 = '2rem';
    @api fontSizeP = '1rem';
    @api fontSizeSmall = '0.8rem';

    // Spacings
    @api spacingLarge = '2rem';
    @api spacingNormal = '1rem';
    @api spacingSmall = '0.5rem';

    // Borders
    @api borderRadius = '0.25rem';

    get styles() {
        const self = this;
        return {
            // Colors
            '--color-primary': self.colorPrimary,
            '--color-secondary': self.colorSecondary,
            '--color-accent-1': self.colorAccent1,
            '--color-danger': self.colorDanger,
            '--color-white': self.colorWhite,

            // Font Sizes
            '--font-size-h1': self.fontSizeH1,
            '--font-size-h2': self.fontSizeH2,
            '--font-size-p': self.fontSizeP,
            '--font-size-small': self.fontSizeSmall,

            // Spacings
            '--spacing-large': self.spacingLarge,
            '--spacing-normal': self.spacingNormal,
            '--spacing-small': self.spacingSmall,

            // Borders
            '--border-radius': self.borderRadius,
        }
    }

    connectedCallback() {

        console.log('this.styles', JSON.parse(JSON.stringify(this.styles)));

        const doc = document.documentElement;
        for (const prop in this.styles) {
            doc.style.setProperty(prop, this.styles[prop]);
        }
    }
}