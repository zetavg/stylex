import * as stylex from '@stylexjs/stylex';

import { tokens } from '../tokens.stylex';

export function UsingVariables0Component() {
  return (
    <div {...stylex.props(styles.container)}>
      Hello! This is UsingVariables0Component.
    </div>
  );
}

const styles = stylex.create({
  container: {
    color: tokens.primaryText,
    backgroundColor: tokens.background,
  },
});

export default UsingVariables0Component;
