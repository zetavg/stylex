import type { StyleXStyles } from '@stylexjs/stylex';
import * as stylex from '@stylexjs/stylex';

type Props = {
  style?: StyleXStyles<{ color?: string; backgroundColor?: string }>;
};

export function Component({ style }: Props) {
  return (
    <div {...stylex.props(styles.container, style)}>
      Hello! This is Component.
    </div>
  );
}

const styles = stylex.create({
  container: {
    color: 'red',
    backgroundColor: 'blue',
  },
});

export default Component;
