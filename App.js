import React, { Component }  from 'react';
import ReduxProvider from './src/redux/ReduxProvider';
import { Text, View } from 'react-native';

export default class App extends Component {
 render(){
  return(
    <ReduxProvider/>
    );
 }
}
