import * as stylex from '@stylexjs/stylex';
import * as React from 'react';

import Button from './components/Button';
import { colorPalette, systemColors } from './tokens.stylex';

const indigoTheme = stylex.createTheme(systemColors, {
  primary: colorPalette.indigo,
});

const lightColorPaletteTheme = stylex.createTheme(colorPalette, {
  blue: '#66B0FF',
  indigo: '#8584E1',
  white: '#FFFFFF',
  // ...
});

function App() {
  return (
    <>
      <h2>Default Button</h2>
      <Button label="Default button" />

      <br />
      <br />
      <hr />

      <div {...stylex.props(indigoTheme)}>
        <h2>Button with Indigo Theme</h2>
        <p>
          In this div, a theme is applied which overrides{' '}
          <code>systemColors.primary</code> to <code>colorPalette.indigo</code>.
        </p>
        <Button label="Indigo button" />
        <br />
        <small>(Should be indigo!)</small>
      </div>

      <br />
      <br />
      <hr />

      <div {...stylex.props(lightColorPaletteTheme)}>
        <h2>Button with Light Color Palette</h2>
        <p>
          In this div, a theme is applied which overrides the{' '}
          <code>colorPalette</code>.
        </p>
        <Button label="Light button" />
        <br />
        <small>(Should be light blue!)</small>
      </div>
    </>
  );
}

export default App;
