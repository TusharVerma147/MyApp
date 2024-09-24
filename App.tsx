import React, {Component} from 'react';
import {
  ActivityIndicatorComponent,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RootNavigator from './src/navigator';


const App = () => {
  return (
     <RootNavigator/>
  )
};

export default App;
