import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { NavigationContainer,DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import React from "react";

const MyTheme ={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary:'rgb(12,90,85)'

  }
}

function FeedScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed Screen</Text>
      <Button
        title="Open Drawer" onPress={()=> navigation.openDrawer() }
      />
      <Button
          title="Toggle Drawer"
          onPress={()=> navigation.toggleDrawer ()}
      />
    </View>
  );
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
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Close drawer" 
      onPress={() => props.navigation.closeDrawer()} />
       <DrawerItem label="Toggle drawer" 
      onPress={() => props.navigation.toggleDrawer()} />
    </DrawerContentScrollView>
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
        <Drawer.Screen name="Feed" component={FeedScreen} />
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

const styles = StyleSheet.create({});
