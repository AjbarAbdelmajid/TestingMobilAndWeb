import React, {Component} from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator  } from 'react-native';
import {withRouter} from 'react-router-native';
import {connect} from "react-redux"

import styles from './cultureStyle'
import {getCultures} from "../../../store/getters/getCultures"
import {getProductsByType} from "../../../store/getters/getProducts"


class Cultures extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCultures();
    }
    onPress(cultureId){
        this.props.history.push("/product");
        this.props.getProductsByType(cultureId, "culture");
        
    }
    
    render() {
        const {cultures} = this.props;

        if (this.props.cultures.length === 0){
            return (<View><ActivityIndicator size="large" color="#00ff00" /></View>)
        }
        else{
            return (
                <>
                    {
                        cultures.map( culture =>{
                            return (

                                <TouchableOpacity   onPress={()=>this.onPress(culture.id)} style={styles.container}>
                                    {/*console.log(culture)*/}
                                    {/*
                                    !props.noIcon &&
                                    <View style={style.icon}>
                                        <Icon name={props.icon || culture.icon} size={size} />
                                    </View>*/
                                    }
                            
                                    <Text style={styles.text}>
                                        {culture.nomFamille}
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
        cultures: state.culturesStore.cultures,
        error: state.culturesStore.error,
    }
}
const mapDispatchToProps = {
    getCultures : () => getCultures(),
    getProductsByType : (Id, type) => getProductsByType(Id, type)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cultures));