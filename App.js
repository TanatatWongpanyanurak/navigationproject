import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react';
// import FristPage from './screens/FristPage';
// import SecondPage from './screens/SecondPage';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='FirstPage'
      screenOptions={{
        headerStyle:{backgroundColor:'#778899'},
        headerTintColor:'#f8f8ff',
        headerTitleStyle:{fontWeight:'bold'}
      }}
      >
        <Stack.Screen name ='First Page' component={FirstPage}/>
        <Stack.Screen name ='Second Page' component={SecondPage}/>
        <Stack.Screen name = 'Third Page' component={ThirdPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
