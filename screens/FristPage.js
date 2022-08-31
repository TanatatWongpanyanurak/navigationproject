import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React from "react";

const FristPage = ({ navigation }) => {
  const [postText, setPostText] = React.useState("");
  return (
    <>
    
    <View>
      <Text>This is the First Page</Text>
        <Button
        title="Go to secondPage"
        onPress={() => navigation.navigate("SecondPage")}
        />
        <Button
          title='Go to ThirdPage'
          onPress={() => navigation.navigate("Third Page")}
        />
    </View>
    </>
  );
};

export default FristPage;

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
