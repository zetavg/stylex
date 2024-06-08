import * as stylex from '@stylexjs/stylex';
import { Theme } from '@stylexjs/stylex/lib/StyleXTypes';

import { referenceTokens } from '../../tokens.stylex';
import { buttonTokens as tokens } from './tokens.stylex';

export type Props = { theme?: Theme<typeof tokens>; label: string };

export function Button({ theme, label }: Props) {
  return <button {...stylex.props(theme, styles.button)}>{label}</button>;
}

const styles = stylex.create({
  button: {
    borderWidth: 0,
    borderRadius: tokens.borderRadius,
    backgroundColor: tokens.backgroundColor,
    color: tokens.textColor,
    paddingVertical: referenceTokens.spacing3,
    paddingHorizontal: referenceTokens.spacing5,
  },
});

export default Button;
