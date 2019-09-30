/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';

import {Provider} from 'react-redux';
import store from './src/store/store';

import Routes from './src/Components/index';
//import FrontPage from './src/Components/FrontPage/FrontPage';


class App extends Component{

  constructor(props) {
    super(props);
    this.state ={
      view : <Routes/>
    }
  }
  componentDidMount() {
    SplashScreen.hide();
  }

  render(){
    return (
      <Provider store={store}>
        {this.state.view}
      </Provider>
    );
  }
};

export default App;
