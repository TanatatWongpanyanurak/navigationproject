import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import style from "../component/style";

const FirstPage = ({ navigation }) => {
  return (
    <>
      <View style={style.continer}>
        <View style ={{flex:1,justifyContent:"center",alignItems:'center'}}>
          <Text style={style.texTopStyle}>This is the First Page</Text>
          <Button
            title="Go To Second Page"
            onPress={() => navigation.navigate("Second Page")}
          />
          <Button
            title="Go to ThirdPage"
            onPress={() => navigation.navigate("Third Page")}
          />
        </View>
        <Text style={style.textBottomSytel}>
          Thai Nici institute of Tecnology
        </Text>
      </View>
    </>
  );
};

export default FirstPage;
