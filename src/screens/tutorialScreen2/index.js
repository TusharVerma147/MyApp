import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icons from '../../assets';
import styles from './styles';
import { Screen } from 'react-native-screens';

class TutorialScreen2 extends Component {
  handleGetStarted = () => {
    this.props.navigation.navigate('Login');
  };
  handleGetPrevious = () => {
    this.props.navigation.navigate('Tutorial1');
  };
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        {/* <Image
          style={styles.tinyLogo}
          source={Icons.white1}
        />
         */}
       
        <Image style={styles.tinyLogo1} source={Icons.quiv} />
        <Text style={styles.title}>Learn how to use your personal car Washing Assistant App</Text>

<View style={{flexDirection:'row', gap:120, marginTop:50}}>
<TouchableOpacity
          style={styles.primaryCont}
          onPress={() => this.handleGetPrevious()}
          //
        >
          <Text style={styles.primary}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.primaryCont}
          onPress={() => this.handleGetStarted()}
          //
        >
          <Text style={styles.primary}>Continue</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default TutorialScreen2;
