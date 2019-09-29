import React, { Component } from 'react';

import {withRouter} from 'react-router-native';
import { 
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Button
} from 'react-native';

import styles from './style';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.Container}>
        <SafeAreaView>
          <ScrollView>
            <Text> index </Text>
            <Button title="change page" onPress={()=>this.props.history.push("/test")}/>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

export default withRouter(HomePage);
