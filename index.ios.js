'use strict';

import React, { Component } from 'react';
import SearchPage from './searchPage';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

class HelloWorld extends Component{
  render(){
    return(
        <Text style={styles.text}>
          Hello World!
        </Text>
    );
  }
}

class ReactPropertyFinder extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
    );
  }
}

AppRegistry.registerComponent('reactPropertyFinder', () => ReactPropertyFinder);
