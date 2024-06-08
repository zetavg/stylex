/**
 * This file is used to define component tokens that are only used by the Button
 * component.
 */

import * as stylex from '@stylexjs/stylex';

import { systemColors } from '../../tokens.stylex';

export const buttonTokens = stylex.defineVars({
  primaryColor: systemColors.primary,
  primaryLabelColor: systemColors.onPrimary,
  // ...
});
