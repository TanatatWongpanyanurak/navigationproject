import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'
import {NavigationContainer}from '@react-navigation/native'
import{createBottomTabNavigator} from'@react-navigation/bottom-tabs'

function Homescreen({navigation}){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text>Home!</Text>
    <Button
      title = 'Go to setting'
      onPress={()=> navigation.navigate('Setting')}
    />

    </View>
  )
}
function SettingScreen({navigation}){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text>Setting!!!</Text>
    <Button
      title = 'Go to Home'
      onPress={()=> navigation.navigate('Home')}
    />
    </View>
  )
}

const Tab = createBottomTabNavigator();

function MyTab(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Homescreen}/>
      <Tab.Screen name="Setting" component={SettingScreen}/>
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <MyTab/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})