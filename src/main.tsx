import * as React from 'react';
import { render } from 'react-dom';

import Hello from './components/Hello/Hello';
import Hello2 from './components/Hello2/Hello2';
import World from './components/world';
//import Text from './components/Text/Text';
import { default as Hoge } from 'simple-react-typescript-styledcomponent/core/Text';
//import Text from 'simple-react-typescript-styledcomponent/core/Text';
import Text from './components/Text/Text';
import App from './components/App';

render(<App/>, document.getElementById('app'),
);
