import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import style from './HomePageItemsStyle';

const ListHomePageItem = props => {
  return (
    <TouchableOpacity
      style={style.container}
      //onPress={props.onClick}
    >
    
      <Image
        //style={style.background}
        source={props.image}
      />
      <View style={style.toplayer}>
        <Text style={style.label}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}


export default ListHomePageItem;
