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


// var React = require('react-native');

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// class reactPropertyFinder extends Component{
//   render(){
//     return React.createElement(React.Text, {style: styles.text}, "Hello World");
//   }
// }
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

// class reactPropertyFinder extends Component{
//   render(){
//     return(
//       <React.NavigatorIOS style={styles.container} initialRoute={{title: 'Property Finder', component: HelloWorld}}/>
//     );
//   }
// }
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

// React.AppRegistry.registerComponent('reactPropertyFinder', function(){return reactPropertyFinder})
AppRegistry.registerComponent('reactPropertyFinder', () => ReactPropertyFinder);






// 'use strict';
//
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
//
// class reactPropertyFinder extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
//
// AppRegistry.registerComponent('reactPropertyFinder', () => reactPropertyFinder);
// //
