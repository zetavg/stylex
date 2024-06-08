import * as stylex from '@stylexjs/stylex';

import Button from './components/Button';
import { buttonTokens } from './components/Button/tokens.stylex';
import { referenceTokens, systemTokens } from './tokens.stylex';

const redButtonTheme = stylex.createTheme(buttonTokens, {
  backgroundColor: referenceTokens.red,
});

const indigoSystemTheme = stylex.createTheme(systemTokens, {
  accentColor: referenceTokens.indigo,
});

const blueIsGreen = stylex.createTheme(referenceTokens, {
  blue: 'green',
});

export function App() {
  return (
    <>
      <h2>Button with default theme</h2>
      <Button label="Click me" />

      <h2>Button with theme applied to override buttonTokens</h2>
      <Button theme={redButtonTheme} label="I'm red" />

      <div {...stylex.props(indigoSystemTheme)}>
        <h2>
          Button with theme applied parent component that changes system tokens
        </h2>
        <Button label="Click me" />
        <p>This does not work.</p>
      </div>

      <div {...stylex.props(blueIsGreen)}>
        <h2>Overriding reference tokens</h2>
        <Button label="Click me" />
        <p>This does not work.</p>
      </div>
    </>
  );
}

export default App;
