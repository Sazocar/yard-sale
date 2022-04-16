import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';

// Before
// ReactDOM.render(<App />, document.getElementById('app'));

// After
const app = document.getElementById('app');
const root = createRoot(app);

root.render(<App/ >);