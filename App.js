/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
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
        this.state.view
    );
  }
};

export default App;
