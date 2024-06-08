import * as React from 'react';
import * as stylex from '@stylexjs/stylex';

import { sizes, borderRadiuses } from '../../tokens.stylex';
import { buttonTokens } from './tokens.stylex';

export function Button({ label, variant = 'primary' }) {
  return (
    <button {...stylex.props(styles.button, buttonVariantStyles[variant])}>
      {label}
    </button>
  );
}

const styles = stylex.create({
  button: {
    borderWidth: 0,
    borderRadius: borderRadiuses.m,
    paddingVertical: sizes.spacing2,
    paddingHorizontal: sizes.spacing3,
  },
});

const buttonVariantStyles = stylex.create({
  primary: {
    backgroundColor: buttonTokens.primaryColor,
    color: buttonTokens.primaryLabelColor,
  },
});

export default Button;
