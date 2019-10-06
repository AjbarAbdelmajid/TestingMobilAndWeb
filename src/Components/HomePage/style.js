import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        height: height * 0.81,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    
    Logo: {
        height:350,
        width: 200
    
    },
    list: {
        flexGrow: 1,
    },
    animatedView: {
        flexGrow: 1,
        height: 130,
    },
    animatedView1: {
        flexGrow: 1 
    }
})

export default styles;