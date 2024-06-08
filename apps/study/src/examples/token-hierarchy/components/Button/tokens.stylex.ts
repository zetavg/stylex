/**
 * This file is used to define component tokens that are only used by the Button
 * component.
 */

import * as stylex from '@stylexjs/stylex';

import { systemTokens } from '../../tokens.stylex';

export const buttonTokens = stylex.defineVars({
  backgroundColor: systemTokens.accentColor,
  textColor: systemTokens.textOnAccentColor,
  borderRadius: systemTokens.elementBorderRadius,
});
