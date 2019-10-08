import {
    StyleSheet, Dimensions
  } from 'react-native';

  const { height, width } = Dimensions.get('window');
  
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
        height: height * 0.66,
        marginBottom: 100,
      },
      listBorder: {
        height: 1,
        width: '100%',
        backgroundColor: '#CED0CE',
        //marginLeft: '14%'
      },
//__________Product details_______

      productDetailImg: {
        height: height * 0.3,
        //width: width * 1
      },
      detailsScroll: {
         paddingTop: 0,
        height: height * 0.7,
      },
      detailscontainer: {
        marginBottom: 20,
      },
      productTitle: {
        alignSelf: 'center',
        padding: 5,
        fontSize: 20,
        //color: "#2980b9"
      }
  });
  
  export default styles;