import React, { Component } from 'react';

import {NativeRouter, Switch, Route, useHistory, withRouter, Router} from 'react-router-native';
import { View, Text, Button } from 'react-native';

import HomePage from './HomePage/HomePage';
import Product from './Products/productAndSolution';
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
                            <Route path="/productAndSolution" exact component={()=><Product />}/>
                        </Switch>
                    </View>
                </NativeRouter>
                
            </View>
    )
    }
}

export default Routes;