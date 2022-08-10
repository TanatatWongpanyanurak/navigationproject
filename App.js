import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react';

function Homescreen({navigation,route}){

    React.useEffect(()=>{
      if(route.params?.post){
        //post updated,do somtin with route.params.post
        //For Exemple,sent the post to the sever
      }

    },[route.params?.post])
    
    return(
      <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
        <Button
          title='Creat Post'
          onPress={()=> navigation.navigate('CreatePost')}
        />
        <Text style={{margin: 10}}>Post :{route.params?.post}</Text>
          
      </View>
    )

}
function CreatePostScreen({navigation,route}){
  const [postText,setPostText] = React.useState('')
    return(
        <>
          <TextInput
            multiline
            placeholder='Plese text here'
            style ={{height:200,padding:10,backgroundColor:'white'}}
            onChangeText={setPostText}
            value={postText}
          />
          <Button
            title='Click'
            onPress={()=>{ navigation.navigate('Home', { post: postText })}} //Pass params back to HomeScreem funchion
            
          />
        </>
    )
}

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
        <Stack.Screen name ='CreatePost' component={CreatePostScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
