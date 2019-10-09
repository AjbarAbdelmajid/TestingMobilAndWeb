import {
    StyleSheet, Dimensions
  } from 'react-native';
  
  const { height } = Dimensions.get('window');
  
  const styles = StyleSheet.create({
      container: {
        height: height * 0.75,
        marginBottom: 100
      },
      newsItem: {
        paddingBottom: 10,
      },
      newsDate:{
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center"
      }
  });
  
  export default styles;