import React, { Component } from 'react';

import {NativeRouter, Switch, Route, useHistory, withRouter, Router} from 'react-router-native';
import { View, Text, Button } from 'react-native';

import HomePage from './HomePage/HomePage';
import ProdectsAndSolution from './ProductsAndSolution';
import Products from "./product/product";
import ProductDetails from "./product/ProductDetails";
import News from "./news"
import Navbar from './navBar/navbar';

class Routes extends Component {
    
    render() {
        return (
            <View style={{backgroundColor: "#fff"}}>
                
                <NativeRouter>
                    <View >
                        
                        <Route path="" component={()=><Navbar />}/>
                        <Switch>
                            <Route path="/" exact component={()=><HomePage />}/>
                            <Route path="/productAndSolution" exact component={()=><ProdectsAndSolution />}/>
                            <Route path="/ProductDetails" exact component={()=><ProductDetails />}/>
                            <Route path="/Product" exact component={()=><Products />}/>
                            <Route path="/news" exact component={()=><News />}/>
                        </Switch>
                    </View>
                </NativeRouter>
                
            </View>
    )
    }
}

export default Routes;