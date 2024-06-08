import * as stylex from '@stylexjs/stylex';

import { ComponentWithVariables0 } from './components/ComponentWithVariables0';
import { componentWithVariables0Tokens } from './components/ComponentWithVariables0/tokens.stylex';
import { ComponentWithVariables1 } from './components/ComponentWithVariables1';
import { componentWithVariables1Tokens } from './components/ComponentWithVariables1/tokens.stylex';
import TypeSafeStyles0Component from './components/TypeSafeStyles0';
import UsingVariables0Component from './components/UsingVariables0';
import { tokens } from './tokens.stylex';

const customComponentWithVariables0Theme = stylex.createTheme(
  componentWithVariables0Tokens,
  {
    bgColor: 'cyan',
    textColor: 'black',
  },
);
const customComponentWithVariables1Theme = stylex.createTheme(
  componentWithVariables1Tokens,
  {
    bgColor: 'cyan',
    textColor: 'black',
  },
);
const customTheme1 = stylex.createTheme(tokens, {
  primaryText: 'white',
  lineColor: 'blue',
  borderRadius: '8px',
});

export function App() {
  return (
    <>
      <h2>TypeSafeStyles0Component</h2>
      <TypeSafeStyles0Component />
      <h2>UsingVariables0Component</h2>
      <UsingVariables0Component />
      <h2>ComponentWithVariables0</h2>
      <ComponentWithVariables0 />
      <ComponentWithVariables0 theme={customComponentWithVariables0Theme} />
      <h2>ComponentWithVariables1</h2>
      <p>Default:</p>
      <ComponentWithVariables1 />
      <p>Custom theme by changing component tokens:</p>
      <ComponentWithVariables1 theme={customComponentWithVariables1Theme} />
      <p>Custom theme by changing design system tokens:</p>
      <div {...stylex.props(customTheme1)}>
        <p>
          Not working unless we change the CSS variables definition for
          `ComponentWithVariables1` from `:root` to `*`.
        </p>
        <ComponentWithVariables1 />
      </div>
    </>
  );
}

export default App;
