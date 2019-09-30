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
      onPress={props.onPress ? props.onPress : null}

    >
    
      <Image
        //style={style.background}
        source={props.image}
        style={props.style ? props.style : null}
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
