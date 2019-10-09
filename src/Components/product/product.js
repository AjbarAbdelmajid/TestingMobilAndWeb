import React, {Component} from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator,ScrollView, FlatList } from 'react-native';
import { Card, ListItem, Button, Icon, SearchBar} from 'react-native-elements'
import {withRouter} from 'react-router-native';
import {connect} from "react-redux"

import styles from './productStyle'
import {getProductsByType, getProductDetails} from '../../store/getters/getProducts'

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        
    }
    // deprecated method
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
    // show product details
    onPress(productId){
        this.props.history.push({
            pathname: "/productDetails",
            state: { Typename:this.props.location.state.Typename}
          })
        this.props.getProductDetails(productId);
        
    }
    renderSeparator= ()=>{
        return (
            <View style={styles.listBorder}/>
        )
    }
    renderHeader= ()=>{
        
        return (<SearchBar lightTheme round />)
    }
    renderFooter= ()=>{
        if (this.props.isDataEnded === false){
        return (
            <View><ActivityIndicator size="large" color="#00ff00" /></View>
        )
        } else{
            return (<View><Text></Text></View>)
        }
        //<View><ActivityIndicator size="large" color="#00ff00" /></View>
            
    }
    LoadMore= ()=>{
        // get the category id
        let Id = this.props.location.state.id
        let type = this.props.location.state.type

        //call the getProductbyType method
        console.log('**************************** ', this.props.isDataEnded)
        if (this.props.isDataEnded === false)
        this.props.getProductsByType(Id, type, (this.props.currentPage +1))
        
        return <View><ActivityIndicator size="large" color="#00ff00" /></View>
            
    }

    render() {
        const {products} = this.props;
        console.log("product length : ", products.length)
        if (products.length === 0){
            return (<View><ActivityIndicator size="large" color="#00ff00" /></View>)
        }
        else{
            return (
                <View style={styles.container}>
                    {/*console.log("productsByCategory : ",products)*/}
                    {/*this.scrolleContent()*/}
                    <FlatList
                    data={products}
                    renderItem={({item}) => 
                        <View style={{marginBottom: 0, paddingBottom: 0}}>
        
                            <ListItem
                                roundAvatar
                                key={item.id}
                                title={item.nomProduit}
                                onPress={() => {this.onPress(item.id)}}
                                leftAvatar={{url: require("../../assets/images/logoapp.png")
                                /*PlaceholderContent=<ActivityIndicator />*/}}
                                rightAvatar={PlaceholderContent=<Icon type='right'/>}
                            />
                            
                        </View>
                    }
                    keyExtractor= {item => item.id}
                    ItemSeparatorComponent={this.renderSeparator}
                    //ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                    onEndReached={this.LoadMore}
                    onEndReachedThreshold={0.1}
                    />
                </View>
            );
        }
        
    }
}

const mapStateToProps = state =>  {
    return {
        products: state.productsStore.products,
        error: state.productsStore.error,
        currentPage: state.productsStore.currentPage,
        isDataEnded: state.productsStore.isDataEnded,
    }
}
const mapDispatchToProps = {
    getProductsByType: (Id, type, page) => getProductsByType(Id, type, page),
    getProductDetails: (productId) => getProductDetails(productId),
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Products));