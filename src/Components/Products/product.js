import React, {Component} from 'react';
import { View, Text,  } from 'react-native';
import {withRouter} from 'react-router-native';
import {connect} from "react-redux"
import styles from "./productStyles";
import axios from 'axios'
import {getCategories} from "../../store/getters/getProducts"
import { Header,Button, ThemeProvider  } from 'react-native-elements';

import ListHomePageItem from '../HomePage/HomePageItems/homePageItems'

class Prodect extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount() {
        console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
        return axios.get(`http://127.0.0.1:8000/productCategories/`)
            .then(data=>{
                console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
                console.log(data);
            }).catch(err => {
                console.log(err);
                console.log("testtttttttttttttttttttttttttttttttttttttttttttttt");
                throw Error(err)
            })
    
    /*fetch("http://127.0.0.1:8000/productCategories/")
     .then((response) => response.json())
     .catch((error) => console.warn("fetch error:", error))
     .then((response) => {
       console.log(response.getContent());
       console.log("sssssssssssssssssssssssssssssssssssssssssssss");
       return response.json()
     }
     )*/
    }
    listTypes = () => {
        this.props.Types.map(type => {
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