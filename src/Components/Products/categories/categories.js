import React, {Component} from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator  } from 'react-native';
import {withRouter} from 'react-router-native';
import {connect} from "react-redux"
import { Header,Button, ThemeProvider  } from 'react-native-elements';

import styles from './categoriesStyle'
import {getCategories} from "../../../store/getters/getCategories"


class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.props.getCategories();
        
    }
    
    render() {
        const {Categories} = this.props;

        if (this.props.Categories.length === 0){
            return (<View><ActivityIndicator size="large" color="#00ff00" /></View>)
        }
        else{
            return (
                <>
                    {
                        Categories.map( category =>{
                            return (

                                <TouchableOpacity   /*onPress={this.onPress}*/ style={styles.container}>
                                    {console.log(category)}
                                    {/*
                                    !props.noIcon &&
                                    <View style={style.icon}>
                                        <Icon name={props.icon || category.icon} size={size} />
                                    </View>*/
                                    }
                            
                                    <Text style={styles.text}>
                                        {category.nomCategorie}
                                        {/*countContent*/}
                                    </Text>
                                </TouchableOpacity>
                            )
                        
                        })
                    }
                </>
            );
        }
        
    }
}

const mapStateToProps = state =>  {
    return {
        Categories: state.categoriesStore.categories,
        error: state.categoriesStore.error,
    }
}
const mapDispatchToProps = {
    getCategories : () => getCategories()
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Categories));