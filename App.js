import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react';
import FristPage from './screens/FristPage';
import SecondPage from './screens/SecondPage';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='Frist'
      screenOptions={{
        headerStyle:{backgroundColor:'#778899'},
        headerTintColor:'#f8f8ff',
        headerTitleStyle:{fontWeight:'bold'}
      }}
      >
        <Stack.Screen name ='Frist' component={FristPage}/>
        <Stack.Screen name ='Second' component={SecondPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
