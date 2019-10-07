import {
  StyleSheet, Dimensions
} from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    
    categoriesList: {
      width: '92%',
      alignSelf: 'center',
      marginBottom: 30,
    },
    listScroll:{
      paddingTop: 0,
      height: height * 0.7,
    },
});

export default styles;