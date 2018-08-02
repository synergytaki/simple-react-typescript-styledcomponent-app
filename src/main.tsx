import * as React from 'react';
import { render } from 'react-dom';

import Hello from './components/Hello/Hello';
import Hello2 from './components/Hello2/Hello2';
import World from './components/world';
import Text from './components/Text/Text';

render(
  <div>
    <Hello />
    <Hello2 />
    <World />
    <Text textType={Text.Type.BASIC}></Text>
  </div>,
  document.getElementById('app'),
);
