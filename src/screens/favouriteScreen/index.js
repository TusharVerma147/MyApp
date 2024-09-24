import React, {Component} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Screen } from 'react-native-screens';

class Favourite  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Simple Screen</Text>
        <Text style={styles.counter}>Count: {this.state.count}</Text>
        <Button title="Increment" onPress={this.incrementCount} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  counter: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default Favourite;
