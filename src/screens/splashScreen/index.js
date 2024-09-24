import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import styles from './styles';
import Icons from '../../assets';
import { Screen } from 'react-native-screens';
class SplashScreen extends Component {

  componentDidMount() {
    
    setTimeout(() => {
      this.props.navigation.replace('Tutorial1');
    }, 2000); 
  }

  render() {

 

    return (
      <View style={styles.container}> 
      <Image
      style={styles.landingpage}
        source={Icons.landingpage}
      />
      <Image
       style={styles.white}
       source={Icons.white}
     />
      </View>
    );
  }
};

export default SplashScreen;
