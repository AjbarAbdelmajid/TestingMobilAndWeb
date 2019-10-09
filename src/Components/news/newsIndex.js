import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import {Card, Image, Icon} from 'react-native-elements'
import {withRouter} from 'react-router-native'
import {connect} from 'react-redux';
import moment from 'moment';

import {frDate} from '../../incs/DateLanguage'
import {getNews} from '../../store/getters/getNews'
import styles from './styles'



class NewsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  RenderFooter = () => {
    if (this.props.isNewsDataEnded === false){
      return <View><ActivityIndicator size="large" color="#00ff00"/></View>
    }
    else{ return <View></View> }
  }
  
  onPress = () => {
    // go to news detailes
  }

  LoadMore= ()=>{
        console.log("Reload => current page  : ", this.props.currentPage)
        console.log('**************************** dataEnded : ', this.props.isNewsDataEnded)
        
        if (this.props.isNewsDataEnded === false)
        this.props.getNews((this.props.currentPage))
        return <View><ActivityIndicator size="large" color="#00ff00" /></View>  
    }
    
  renderDate = (insertedDate) =>{
      moment.locale('fr', frDate)
      let timeHolder = insertedDate.slice(0, 10)
      let test = moment(timeHolder).format("dddd MMMM YYYY")
      return test
  }

  render() {
    const {allNews, isNewsDataEnded, currentPage} = this.props;
    console.log("current Page: ",currentPage)

    if(this.props.allNews.length === 0){
      return (<View><ActivityIndicator size="large" color="#00ff00"/></View>)
    }
    else{
        return (
          <View style={styles.container}>
              <FlatList
                data= {allNews}
                renderItem = {({item})=>
                  <View key={item.id} style={styles.newsItem}>
                    <TouchableOpacity onPress={this.onPress}>
                    <Card
                      title= {item.titre}
                      titleStyle= {{color: "#576574"}}
                      image ={<Image source={{ uri: item.imageActualite.name }}/>}
                    >
                        <View style={styles.newsDate}>
                          <Icon name="calendar"  color='#000' type='evilicon' height={28} width={28}/>
                          <Text style={{fontSize: 16,color: "black"}}>
                              {this.renderDate(item.datePublication.date)}
                          </Text>
                      </View>
                        
                    </Card>
                    </TouchableOpacity>
                  </View>
                }
                ListFooterComponent= {this.RenderFooter}
                onEndReached = {this.LoadMore}
                onEndReachedThreshold = {0.01}
              />
          </View>
        );
     }
  }
}

const mapStateToProps = state => {
  return {
    allNews: state.newsStore.news,
    isNewsDataEnded: state.newsStore.isNewsDataEnded,
    currentPage: state.newsStore.currentPage,
  }
}
const mapDispatchToProps = {
  getNews : (page) => getNews(page)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewsIndex))