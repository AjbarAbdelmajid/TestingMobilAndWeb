
import React, { Component } from 'react';
import { View, Text,Image, ImageBackground, ActivityIndicator } from 'react-native';
import { StyleSheet } from 'react-native';


export default class FrontPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View >
        <ImageBackground style={styles.Container} source={require('../../assets/images/bg.png')}>
          <View style={styles.LogoContainer}>
            <Image style={styles.Logo} source={require('../../assets/images/lgoBigImage.png')}/>
            <ActivityIndicator size="large" color="#2ed573"/>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    Container: {
        height: '100%',
        width: '100%',
    },
    LogoContainer: {
        alignItems: 'center',
    },
    Logo: {
        height:350,
        width: 200
    }
})
