import React from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'


const ParentItem = props => {
  return (
    <View style={style.container
  }>
      <Text style={style.text}>
        {props.title}
      </Text>
    </View>
  )
}
  
  const style = StyleSheet.create({
      container: {
        marginTop: 30,
        backgroundColor: "#095a19",
        paddingVertical: 10,
        paddingHorizontal: 11,
        marginBottom: 0,
        marginLeft: 5,
        marginRight: 5,
      },
      text: {
        color: "#ffffff",
        fontFamily: 'normal',
        fontSize: 20,
      }
  });

  export default ParentItem;