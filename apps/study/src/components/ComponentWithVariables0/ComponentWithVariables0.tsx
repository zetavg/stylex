import * as stylex from '@stylexjs/stylex';
import { Theme } from '@stylexjs/stylex/lib/StyleXTypes';

import { componentWithVariables0Tokens as tokens } from './tokens.stylex';

export function ComponentWithVariables0({
  theme,
}: {
  theme?: Theme<typeof tokens>;
}) {
  return (
    <div {...stylex.props(theme, styles.base)}>
      Hello! This is ComponentWithVariables0.
    </div>
  );
}

const styles = stylex.create({
  base: {
    marginBottom: 2,
    backgroundColor: tokens.bgColor,
    color: tokens.textColor,
    borderRadius: tokens.cornerRadius,
    paddingVertical: 2,
    paddingHorizontal: 4,
  },
});

export default ComponentWithVariables0;
