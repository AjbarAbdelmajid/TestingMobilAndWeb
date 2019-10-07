import {
    StyleSheet,
  } from 'react-native';
  
  const styles = StyleSheet.create({
      container: {
        paddingTop:13,
        paddingBottom:10,
        borderBottomColor: "#e4e4e4",
        borderBottomWidth: .5,
        flexDirection: 'row',
        alignContent: 'center',
      },
      icon: {
        ///flex: 1,
        alignContent: 'center',
      },
      text:{
        color: "#9abe30",
        fontSize: 21,
        fontFamily: 't4',
        flex: 2,
        marginLeft: 10,
        alignSelf: 'center',
        //backgroundColor: 'red',
        lineHeight: 22,
      }
  });
  
  export default styles;