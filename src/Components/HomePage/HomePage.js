import React, { Component } from 'react';

import {withRouter} from 'react-router-native';
import { View,Text,Image, ScrollView} from 'react-native';

import styles from './style';
import ListHomePageItem from './HomePageItems/homePageItems'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <ScrollView style={styles.container}>
        <ListHomePageItem onPress={()=>this.props.history.push("/product")} image={require("../../assets/images/HomePage/produits.jpg")} title="prodect"/> 
        <ListHomePageItem image={require("../../assets/images/HomePage/agences.jpg")} title="prodect"/>
        <ListHomePageItem image={require("../../assets/images/HomePage/actus.jpg")} title="test2"/>
        <ListHomePageItem image={require("../../assets/images/HomePage/agences.jpg")} title="test"/>
         <Text style={{fontSize:80}}></Text>
          </ScrollView>
    );
  }
}

export default withRouter(HomePage);
