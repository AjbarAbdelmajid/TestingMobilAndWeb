import React, {Component} from 'react';
import { View, Text,  } from 'react-native';
import {withRouter} from 'react-router-native';
import {connect} from 'react-redux';
import styles from "./productStyles"
import { Header,Button, ThemeProvider  } from 'react-native-elements';

import ListHomePageItem from '../HomePage/HomePageItems/homePageItems'

class Prodect extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    listTypes = () => {
        letthis.props.Types.map(type => {
            //console.log(type.Typetitle) 
            <>
                <Text>dddddddddddddddddd</Text>
                <View style={styles.Typecontainer}>
                    <Text style={styles.Typetext}>
                        {type.Typetitle}
                    </Text>
                </View>
            </>
        })
            }
    render() {
        let style ={
            height:80
        }
        return (
            <>
            <ListHomePageItem style={style} image={require("../../assets/images/HomePage/produits.jpg")} title="prodect"/>
            {this.listTypes()}
            </>
        );
    }
}
const mapStateToProps = state =>  {
    
    return {
        Types: state.product.types
    }
}

export default withRouter(connect(mapStateToProps)(Prodect));