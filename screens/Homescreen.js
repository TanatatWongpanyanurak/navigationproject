import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
const Homescreen = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Ionicons name='home' size={30} color='#000000'/>
        <Text>Home Screen</Text>
        <Button 
            title ='เกี่ยวกับเรา'
            onPress={()=> navigation.navigate('About',{
                email : 'ractnative.tni.ac.th'
            })}
        />
      </View>
  )
}

export default Homescreen
