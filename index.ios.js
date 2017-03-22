import React from 'react';
import { AppRegistry, Text } from 'react-native';

//Main component
const App = () => (
  <Text>Some Text</Text>
);

//Rendering main component
AppRegistry.registerComponent('albums', () => App);
