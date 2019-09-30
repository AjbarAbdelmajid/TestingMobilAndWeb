import React, { Component } from 'react';

import {withRouter} from 'react-router-native';
import { View, ScrollView} from 'react-native';

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
      <View style={styles.test}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{ flexGrow: 1 }}
          style={styles.scrollView}>
           <View >
              <ListHomePageItem image={require("../../assets/images/HomePage/produits.jpg")} title="prodect"/>
            </View>
            <View >
              <ListHomePageItem image={require("../../assets/images/HomePage/lutte.jpg")} title="prodect"/>
            </View>
            <View >
              <ListHomePageItem image={require("../../assets/images/HomePage/produits.jpg")} title="prodect"/>
            </View>
            <View >
            <ListHomePageItem image={require("../../assets/images/HomePage/produits.jpg")} title="test"/>
            </View>
         
        </ScrollView>
    </View>
    );
  }
}

export default withRouter(HomePage);
