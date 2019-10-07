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
  });
  
  export default styles;