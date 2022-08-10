import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

const SecondPage = ({ route }) => {
  return (
    <>
    <View style={styles.container}>
      <View style ={{alignItems:"center"}}>
        <View>
        <Text style={styles.heading}>THAI-NICHI Institute of Technology</Text>
        <Text style = {styles.textStyle}>Value passed Form frist Page : {route.params?.post}</Text>
        </View>
      </View>
      <View style={{alignItems:'center'}}>
        <Text>www.tni.ac.th</Text>
      </View>
      </View>
    </>
  );
};

export default SecondPage;

const styles = StyleSheet.create({
 container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    justifyContent: "space-between",
  },
  heading: { fontSize: 25, textAlign: "center", marginVertical: 10 },
  textStyle: { textAlign: "center", fontSize: 16, marginVertical: 10 },
});
