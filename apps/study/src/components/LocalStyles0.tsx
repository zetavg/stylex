import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  red: { color: 'red' },
});

const a = stylex.props(styles.red);
