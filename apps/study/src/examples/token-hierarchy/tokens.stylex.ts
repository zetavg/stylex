/**
 * This file is used to define reference tokens and system tokens that are
 * used by all components in the app.
 */

import * as stylex from '@stylexjs/stylex';

export const referenceTokens = stylex.defineVars({
  // Colors
  red: 'rgba(255, 59, 48, 1.0)',
  orange: 'rgba(255, 149, 0, 1.0)',
  yellow: 'rgba(255, 204, 0, 1.0)',
  green: 'rgba(52, 199, 89, 1.0)',
  mint: 'rgba(0, 199, 190, 1.0)',
  teal: 'rgba(48, 176, 199, 1.0)',
  cyan: 'rgba(50, 173, 230, 1.0)',
  blue: 'rgba(0, 122, 255, 1.0)',
  indigo: 'rgba(88, 86, 214, 1.0)',
  purple: 'rgba(175, 82, 222, 1.0)',
  pink: 'rgba(255, 45, 85, 1.0)',
  brown: 'rgba(162, 132, 94, 1.0)',
  gray: 'rgba(142, 142, 147, 1.0)',
  gray2: 'rgba(174, 174, 178, 1.0)',
  gray3: 'rgba(199, 199, 204, 1.0)',
  gray4: 'rgba(209, 209, 214, 1.0)',
  gray5: 'rgba(229, 229, 234, 1.0)',
  gray6: 'rgba(242, 242, 247, 1.0)',

  // Spacing
  spacing0: 0,
  spacing1: '2px',
  spacing2: '4px',
  spacing3: '6px',
  spacing4: '8px',
  spacing5: '10px',

  // Border radius
  borderRadius0: 0,
  borderRadius1: '2px',
  borderRadius2: '4px',
  borderRadius3: '8px',
});

export const systemTokens = stylex.defineVars({
  accentColor: referenceTokens.blue,
  textOnAccentColor: referenceTokens.gray6,

  elementBorderRadius: referenceTokens.borderRadius2,
  containerBorderRadius: referenceTokens.borderRadius3,
});
