import React, { Component } from 'react';

import {withRouter} from 'react-router-native';
import { View,Text,Image, ScrollView} from 'react-native';
import {connect} from 'react-redux'

import styles from './style';
import ListHomePageItem from './HomePageItems/homePageItems'
import {getNews} from '../../store/getters/getNews'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  onPress(){
    this.props.getNews(0);
    this.props.history.push({
      pathname: "/news",
      state: {Typename:  "News"}})
  }
  
  render() {
    return (
        <ScrollView style={styles.container}>
        <ListHomePageItem onPress={()=>this.props.history.push("/productAndSolution")} image={require("../../assets/images/HomePage/produits.jpg")} title="produits et Solutions"/> 
        <ListHomePageItem onPress={()=>this.onPress()} image={require("../../assets/images/HomePage/actus.jpg")} title="News"/>
        <ListHomePageItem onPress={()=>this.props.history.push("/productAndSolution")} image={require("../../assets/images/HomePage/agences.jpg")} title="testing"/>
        <ListHomePageItem onPress={()=>this.props.history.push("/productAndSolution")} image={require("../../assets/images/HomePage/agences.jpg")} title="test"/>
        </ScrollView>
    );
  }
}


const mapDispatchToProps = {
  getNews : (page) => getNews(page)
}

export default withRouter(connect(null, mapDispatchToProps)(HomePage));
