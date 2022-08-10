import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Aboutscreen = ({route}) => {

    // const {email} = route.params

  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>About Screen</Text>
      {/* <Text>Email : {email}</Text> */}
      <Text>Email : {route.params.email}</Text>
    </View>
  )
}

export default Aboutscreen

