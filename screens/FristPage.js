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
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>THAI-NICHI Institute of Technology</Text>
          <Text>Plese insert your name to pass it to second screen</Text>
          <TextInput
            style={styles.textStyle}
            multiline
            placeholder="Plese text here"
            onChangeText={setPostText}
            value={postText}
          />
          <Button
            title="Go Next"
            onPress={() => navigation.navigate("Second", { post: postText })}
          />
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text>www.tni.ac.th</Text>
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
