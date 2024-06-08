import * as stylex from '@stylexjs/stylex';

import { tokens } from '../../tokens.stylex';

export const componentWithVariables1Tokens = stylex.defineVars({
  bgColor: tokens.lineColor,
  textColor: tokens.primaryText,
  cornerRadius: tokens.borderRadius,
});
