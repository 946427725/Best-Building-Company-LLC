import { StrictMode } from 'react';
import { createRoot, Root } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

declare global {
  interface Window {
    __reactRoot?: Root;
  }
}

const container = document.getElementById('root')!;
if (!window.__reactRoot) {
  window.__reactRoot = createRoot(container);
}

window.__reactRoot.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
);
