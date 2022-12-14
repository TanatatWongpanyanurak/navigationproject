import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput,SafeAreaView,Image} from "react-native";
import { NavigationContainer,DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Homescreen from "./screens/Homescreen";
import React from "react";
const MyTheme ={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary:'rgb(12,90,85)'

  }
}

function Notification() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notification</Text>
    </View>
  );
}
   function CustomDrawerContent(props) {
  return (
  <SafeAreaView>
    <Image
      source={require('./assets/react_logo.png')}
      style = {styles.sideMenuProfileIcon}
    />
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Close drawer" 
      onPress={() => props.navigation.closeDrawer()} />

    </DrawerContentScrollView>
    </SafeAreaView>
   );
 }
const Drawer = createDrawerNavigator();

function MyDrawer (){
  return(
    <Drawer.Navigator useLegacyImplementation
       drawerContent={(props)=><CustomDrawerContent{...props}/>}
        screenOptions ={{
          drawerStyle:{
            width:240
          }
        }}>
        <Drawer.Screen name="Home" component={Homescreen} />
        <Drawer.Screen name="Notification" component={Notification} />
      </Drawer.Navigator> 
  );
}
const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer/>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create
({sideMenuProfileIcon: 
  {resizeMode: 'center'
  ,width: 100,height: 100,
  borderRadius: 100 / 2,
  alignSelf: 'center',},})
