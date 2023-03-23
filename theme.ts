import {buildLegacyTheme} from 'sanity'

const props = {
  "--my-white": "#fff",
  "--my-black": "#1a1a1a",
  "--rafael-brand": "#7901FA",
  "--my-red": "#D91C14",
  "--my-yellow": "#F0E322",
  "--my-green": "#14D987",
}

export const myTheme = buildLegacyTheme({
  '--black': props['--my-black'],
  '--white': props['--my-white'],

  '--gray': '#666',
  '--gray-base': '#666',

  '--component-bg': props['--my-black'],
  '--component-text-color': props['--my-white'],

  // brand
  '--brand-primary': props['--rafael-brand'],

  // default button
  '--default-button-color': '#666',
  '--default-button-primary-color': props['--rafael-brand'],
  '--default-button-success-color': props['--my-green'],
  '--default-button-warning-color': props['--my-yellow'],
  '--default-button-danger-color': props['--my-red'],

  // state
  '--state-info-color': props['--rafael-brand'],
  '--state-success-color': props['--my-green'],
  '--state-warning-color': props['--my-yellow'],
  '--state-danger-color': props['--my-red'],

  // navbar
  '--main-navigation-color': props['--my-black'],
  '--main-navigation-color--inverted': props['--my-white'],

  '--focus-color': props['--rafael-brand'],
});