import React, { Component } from 'react';

import {NativeRouter, Switch, Route, useHistory, withRouter, Router} from 'react-router-native';
import { View, Text, Button } from 'react-native';

import HomePage from './HomePage/HomePage';
import FrontPage from './FrontPage/FrontPage';
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
                            <Route path="/test" exact component={()=><FrontPage />}/>
                        </Switch>
                    </View>
                </NativeRouter>
                
            </View>
    )
    }
}

export default Routes;