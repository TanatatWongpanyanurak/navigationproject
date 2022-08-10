import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Homescreen from './screens/Homescreen';
import Aboutscreen from './screens/Aboutscreen';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='Home'
      screenOptions={{
        headerStyle:{backgroundColor:'#778899'},
        headerTintColor:'#f8f8ff',
        headerTitleStyle:{fontWeight:'bold'}
      }}
      >
        <Stack.Screen name ='Home' component={Homescreen}/>
        <Stack.Screen name ='About' component={Aboutscreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
