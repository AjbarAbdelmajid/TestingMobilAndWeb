import {
  StyleSheet
} from 'react-native';

const style = StyleSheet.create({
  container: {
    //height: 50,
    //flex:1,
    width: '100%',

  },
  background:{
    width: '100%',
    height:'100%',
    resizeMode: 'cover',
  },
  label: {
    color: '#fff',
    fontSize: 30,
  },
  toplayer: {
    position: 'absolute',
    top: 0,
    width:'100%',
    height:'100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default style;
