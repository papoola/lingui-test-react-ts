import * as React from 'react';
import './App.css';

import { I18nProvider } from 'lingui-react';
import { Trans } from 'lingui-react';

// required in development only (huge dependency)
const dev = process.env.NODE_ENV !== 'production' ? require('lingui-i18n/dev') : undefined;

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <I18nProvider language="en" development={dev}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title"><Trans>Welcome to React</Trans></h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
        </div>
      </I18nProvider>
    );
  }
}

export default App;
