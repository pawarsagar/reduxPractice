
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Main from './src/main'

//redux 
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import * as reducers from './src/redux/reduxers'

const root = combineReducers({

  add:reducers.reducerADD,
  sub:reducers.reducerSUB
}
)

const store = createStore(root)




export default class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <Main />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
