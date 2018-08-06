import * as React from 'react';
import Text from './Text/Text';

const About = () => (
  <div>
    <h2>About</h2>
    <p>フレンズに投票するページです</p>
    <Text textType={Text.Type.BASIC}></Text>
  </div>
);

export default About;
