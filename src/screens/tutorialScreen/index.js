import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import Icons from '../../assets';
import styles from './styles';
import { Screen } from 'react-native-screens';


class TutorialScreen1 extends Component {


  handleGetStarted =()=>{
   
    this.props.navigation.navigate('Tutorial2')
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={Icons.white1}
        />
        
        {/* <Image
          style={styles.tinyLogo1}
          source={Icons.quiv}
        /> */}
        <Text style={styles.title}>Welcome to the Tutorial!</Text>
        <TouchableOpacity style={styles.primaryCont} 
              onPress={() => this.handleGetStarted()}
            //  
              >
                <Text style={styles.primary}>Next</Text>
              </TouchableOpacity>
      </View>
    );
  }
}



export default TutorialScreen1;
