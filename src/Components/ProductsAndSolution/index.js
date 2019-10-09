import React, {Component} from 'react';
import { View, Text, ScrollView} from 'react-native';
import {withRouter} from 'react-router-native';
import { Header,Button, ThemeProvider  } from 'react-native-elements';
import ParentItem from './Parents'
import {connect} from "react-redux"

import styles from "./indexStyles";
import Categories from "./categories/categories"
import Cultures from "./cultures/culture"
import ListHomePageItem from '../HomePage/HomePageItems/homePageItems'
import {getCategories} from "../../store/getters/getCategories"
import {getCultures} from "../../store/getters/getCultures"



class ProdectsAndSolution extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getCategories();
        this.props.getCultures();
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

mapDispatchToProps = {
    getCategories : () => getCategories(),
    getCultures : () => getCultures(),
}

export default withRouter(connect(null, mapDispatchToProps)(ProdectsAndSolution));