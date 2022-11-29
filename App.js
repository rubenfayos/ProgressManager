import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Button } from 'react-native-paper';

class App extends Component {

  render() {
    retur(
      <View>
        <Text>Welcome Rubén</Text>
        <Button>Gym tracker</Button>
        <Button>Meals tracker</Button>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default App;
