import {
    StyleSheet, Dimensions
  } from 'react-native';

  const { height } = Dimensions.get('window');
  
  const styles = StyleSheet.create({
      
      List: {
        width: '92%',
        alignSelf: 'center',
        marginBottom: 10,
      },
      listScroll:{
        paddingTop: 0,
        height: height * 0.8,
      },
      container: {
        //height: height * 0.60
        marginBottom: 50,
      },
      listBorder: {
        height: 1,
        width: '100%',
        backgroundColor: '#CED0CE',
        //marginLeft: '14%'
      }
  });
  
  export default styles;