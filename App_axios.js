import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import axios from "axios"

const App = () => {
  const getDataUssingaxios = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
      alert(JSON.stringify(response.data));
    } catch (error) {
      //hadle erro
      alert(error.massage);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize:20, textAlign:'center'}} >Exemple of axios in React Native</Text>
      <TouchableOpacity style={styles.buttonStyle} onPress={getDataUssingaxios}>
        <Text>Get Data using axios get</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    padding: 16,
  },
  buttonStyle: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: "100%",
    marginTop: 16,
  },
});
