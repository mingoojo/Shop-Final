/* eslint-disable import/no-unresolved,import/no-extraneous-dependencies */

import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

Reflect.get(window, 'IMP').init(process.env.REACT_APP_PORTONE_IMP);

function main() {
  const container = document.getElementById('root');
  if (!container) {
    return;
  }

  const root = ReactDOM.createRoot(container);
  root.render((
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ));
}

main();
