import React, {Component} from 'react';
import { View, Text, ScrollView} from 'react-native';
import {withRouter} from 'react-router-native';
import { Header,Button, ThemeProvider  } from 'react-native-elements';
import ParentItem from './Parents'

import styles from "./productStyles";
import Categories from "./categories/categories"
import Cultures from "./cultures/culture"
import ListHomePageItem from '../HomePage/HomePageItems/homePageItems'

class Prodect extends Component {
    constructor(props) {
        super(props);
    }
    scrolleContent (){
        return (
            <ScrollView style={styles.listScroll}>
                <View style={styles.categoriesList}>

                    <ParentItem title="Categories"/>
                    <Categories/>
                    <ParentItem title="Culture"/>
                    <Cultures/>
                </View>
            </ScrollView>
        )
    }
    
    render() {
        let style ={
            height:80
        }
        return (
            <>
            <ListHomePageItem style={style} image={require("../../assets/images/HomePage/produits.jpg")} title="prodect"/>
            {this.scrolleContent ()}
            </>
        );
    }
}



export default withRouter(Prodect);