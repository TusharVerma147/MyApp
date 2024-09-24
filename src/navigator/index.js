import React, { Component } from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {ScreenNames} from './screenNames';


import SplashScreen from '../screens/splashScreen';
import SigninScreen from '../screens/signinScreen';
import ForgotScreen from '../screens/forgotScreen';
import TutorialScreen1 from '../screens/tutorialScreen';
import TutorialScreen2 from '../screens/tutorialScreen2';
import ResetScreen from '../screens/resetScreen';
import Home from '../screens/homeScreen';
import PhoneNumberScreen from '../screens/phonenumberScreen';
import VerifyAccount from '../screens/verifyaccountScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './Bottomtab';




const RootNavigator = () => {

const Stack = createNativeStackNavigator();
//   const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
        }}>
           
        <Stack.Screen
          component={SplashScreen}
            name={ScreenNames.Splash}
          // name="splashScreen"
          options={{headerShown: false}}
        />
         <Stack.Screen
          component={TutorialScreen1}
            name={ScreenNames.Tutorial1}
          // name="tutorialScreen"
          options={{headerShown: false}}
        />
         <Stack.Screen
          component={TutorialScreen2}
            name={ScreenNames.Tutorial2}
          // name="tutorialScreen2"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={SigninScreen}
            name={ScreenNames.Login}
          // name="signinScreen"
          options={{headerShown: false}}
        />
         <Stack.Screen
          component={ForgotScreen}
            name={ScreenNames.Forget}
          // name="forgotScreen"
          options={{headerShown: false}}
        />
         <Stack.Screen
          component={ResetScreen}
            name={ScreenNames.Reset}
          // name="resetScreen"
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          component={Home}
            name={ScreenNames.Home}
          // name="homeScreen"
          options={{headerShown: false}}
        /> */}
          
        <Stack.Screen
          component={PhoneNumberScreen}
            name={ScreenNames.Phone}
          // name="phonenumberScreen"
          options={{headerShown: false}}
        />
         <Stack.Screen
          component={VerifyAccount}
            name={ScreenNames.Verify}
          // name="verifyaccountScreen"
          options={{headerShown: false}}
        />
        <Stack.Screen
            component={BottomTab}
            name={ScreenNames.BottomTab}
            options={{headerShown: false}}
          />
        
        
        {/* <Stack.Screen
          component={Home}
          name={ScreenNames.Home}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          component={BottomTabNavigator}
          name={ScreenNames.BottomTab}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
