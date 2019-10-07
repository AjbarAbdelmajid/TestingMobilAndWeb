import React, {Component} from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {withRouter} from 'react-router-native';
import {connect} from "react-redux"

import styles from './productStyle'


class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        
    }
    scrolleContent (){
        return (
            <ScrollView style={styles.listScroll}>
                
                <View style={styles.Lists}>
                    <Card containerStyle={{padding: 0}} >
                        {
                            this.props.products.map((product) => {
                            return (
                                <TouchableOpacity style={styles.container}>
                                
                                <ListItem
                                key={product.id}
                                roundAvatar
                                title={product.nomProduit}
                                subtitle
                                />

                                </TouchableOpacity>
                                
                            );
                            })
                        }
                    </Card>
                </View>
            </ScrollView>
        )
    }
    render() {
        const {products} = this.props;

        if (products.length === 0){
            return (<View><ActivityIndicator size="large" color="#00ff00" /></View>)
        }
        else{
            return (
                <>
                    {console.log("productsByCategory : ",products)}
                    {this.scrolleContent()}
                </>
            );
        }
        
    }
}

const mapStateToProps = state =>  {
    return {
        products: state.productsStore.products,
        error: state.productsStore.error,
    }
}
const mapDispatchToProps = {
    
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Products));