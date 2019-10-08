import React, {Component} from 'react';
import { View, Text,
     TouchableOpacity, ActivityIndicator,
     ScrollView, FlatList, WebView } from 'react-native';
import { Card, ListItem,Image, Button, Icon, SearchBar} from 'react-native-elements'
import {withRouter} from 'react-router-native';
import {connect} from "react-redux";
import HTML from 'react-native-render-html';
import Modal from "react-native-modal";

import styles from './productStyle'
import {getProductDetails} from '../../store/getters/getProducts'

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false
        };
    }
    toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

    render() {
        
         if (this.props.productDetails.length === 0){
            return (<View><ActivityIndicator size="large" color="#00ff00" /></View>)
        }
        else{
            return (
                <>
                    {
                        this.props.productDetails.map( detail =>{
                            return (
                                <ScrollView style={styles.detailsScroll}>
                                <View key={detail.id} style={styles.detailscontainer}>
                                    <Text style={styles.productTitle}>
                                        {detail.nomProduit}
                                    </Text>
                                    <Image
                                        source={{ uri: detail.logo.name }}
                                        style={styles.productDetailImg}
                                        PlaceholderContent={<ActivityIndicator />}
                                        />

                                    <Button title="Show modal" onPress={this.toggleModal} />

                                    {/*<Modal isVisible={this.state.isModalVisible}>
                                    <View style={{  }}>
                                        <Text>{detail.descriptionCourte}</Text>
                                        <Button title="Hide modal" onPress={this.toggleModal} />
                                    </View>
                                    </Modal>
                                    <Card
                                        title={detail.societe.nomSociete}
                                        image={require('../../assets/images/bg.png')}>
                                        <Text style={{marginBottom: 10}}>
                                        {detail.societe.description ? detail.societe.description: ""}
                                        </Text>
                                        
                                    </Card>*/}
                                    <HTML html={`${detail.testtableau[0].valeurs}`}/>
                                </View>
                                </ScrollView>
                            )
                        
                        })
                    }
                    
                </>
            );
        }
        return (
            <>
            {/*<Image
                source={{ uri: image }}
                style={{ width: 200, height: 200 }}
                PlaceholderContent={<ActivityIndicator />}
                />*/}
            
            {console.log(this.props.productDetails)}
            </>
        )
    }
}

const mapStateToProps = state =>  {
    return {
        productDetails: state.productsStore.productDetails
    }
}
const mapDispatchToProps = {}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductDetails));