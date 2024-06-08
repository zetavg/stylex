/**
 * This file is used to define reference tokens and system tokens that are
 * used by all components in the app.
 */

import * as stylex from '@stylexjs/stylex';

/** Reference tokens for spacing */
export const sizes = stylex.defineVars({
  spacing1: '.25rem',
  spacing2: '.5rem',
  spacing3: '1rem',
  spacing4: '1.25rem',
  // ...
});

/** Reference tokens for border radius */
export const borderRadiuses = stylex.defineVars({
  m: '4px',
  // ...
});

/** Reference tokens for color palette */
export const colorPalette = stylex.defineVars({
  blue: '#007AFF',
  indigo: '#5856D6',
  white: '#F2F2F7',
  // ...
});

/** System tokens for color */
export const systemColors = stylex.defineVars({
  primary: colorPalette.blue,
  onPrimary: colorPalette.white,
  // ...
});
