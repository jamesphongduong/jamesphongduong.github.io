import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Monda:700', 'Roboto Mono:300', 'sans-serif']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
