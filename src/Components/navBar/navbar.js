
import React, {Component } from 'react';


import { View, Image, TouchableOpacity } from 'react-native';
import { Header,Button, ThemeProvider  } from 'react-native-elements';
import {withRouter} from 'react-router-native';


import styles from './styles';

class Navbar extends Component {
    constructor(props) {
        super(props);
      }

    render() {
        return (
            
                <Header
                    placement="left"
                    backgroundColor="#fff"
                    leftComponent={
                        <TouchableOpacity onPress={()=>this.props.history.push("/")}
                        >
                            <ThemeProvider>
                                    <Image source={require('../../assets/images/home.png')} />
                            </ThemeProvider>
                        </TouchableOpacity>
                    }
                    centerComponent={
                        <ThemeProvider>
                            <Image source={require('../../assets/images/Header/logo-header.png')} style={styles.Logo}/>
                        </ThemeProvider>
                    }
                />
        );
    }
}
export default withRouter(Navbar);