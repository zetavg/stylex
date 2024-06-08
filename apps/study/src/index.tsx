import { createRoot } from 'react-dom/client';

import App from './examples/token-hierarchy/App';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app') as HTMLElement);
root.render(<App />);
