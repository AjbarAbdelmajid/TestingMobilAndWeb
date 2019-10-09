import {
    StyleSheet,
  } from 'react-native';
  import { COLORS } from '../../../styles/colors';
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.white,
      paddingBottom: 13,
      marginBottom: 15,
      marginLeft: 10,
      marginRight: 10,
    },
    infoblock: {
      marginTop: 0,
      flexDirection: 'row',
      alignContent: 'center',
      alignItems :'center',
      paddingLeft: 15,
    },
    image: {
      height: 186,
      width: '100%',
      resizeMode: 'cover',
    },
    date: {
      fontSize: 12,
      color: COLORS.black,
      fontFamily: 't4',
      fontWeight: 'bold',
    },
    title: {
      marginTop: 0,
      color: COLORS.green1,
      fontSize: 14,
      fontFamily: 't4',
      paddingLeft: 15,
      paddingRight: 50,
      fontWeight: 'bold',
    },
    icon: {
      marginTop: 10,
      width:22,
    },
  });
  
  export default styles;