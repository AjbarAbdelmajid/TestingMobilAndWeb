
import React, {Component } from 'react';


import { View, Image,Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Header,Button, ThemeProvider, Icon  } from 'react-native-elements';
import {withRouter} from 'react-router-native';


import styles from './styles';

class Navbar extends Component {
    constructor(props) {
        super(props);
      }

      goBack (){
          if (this.props.location.state){
              if ('Typename' in this.props.location.state){
                return (<>
                    <Header
                    placement="left"
                    backgroundColor="#fff"
                    leftComponent={
                        <Icon name='chevron-left'  color='#095a19' onPress={ () => this.props.history.goBack() }/>
                    }
                    centerComponent={
                        <ThemeProvider>
                            <TouchableOpacity
                                style={{ backgroundColor: "#ffff"}}
                                onPress={ () => this.props.history.goBack() }
                                >
                                <View>
                                    <Text style={{ color: "#095a19", fontSize: 20}}>
                                    {this.props.location.state.Typename}
                                    </Text>
                                </View>
                    </TouchableOpacity>
                        </ThemeProvider>
                    }
                />
                    
                    </>
                    )
              }
                }
        else{
            return (<Text></Text>)
        }
      }

    render() {
        return (
            <>
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
                {this.goBack()}
                
                
            </>
        );
    }
}
export default withRouter(Navbar);