import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";

const ProductScreen = ({navigation}) => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://api.codingthailand.com/api/course");
      console.log(res.data.data);
      setProduct(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(flase);
      setError(error); // set error go to state for error born to axios or
    }
  };
  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );
  // useEffect(() => {
  //   getData();
  // }, []);

  if (error) {
    //if error return ui
    return (
      <View style={styles.container}>
        <Text>{error.message}</Text>
        <Text>ไม่สามารถติดต่อกับ เซิฟเวอร์ได้</Text>
      </View>
    );
  }

  if (loading === true) {
    return (
      <View>
        <ActivityIndicator color="#f4511e" size="large" />
      </View>
    );
  }
  const _onRefresh = () => {
    getData();
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };
  const _renderItem = ({ item }) => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity
              style={styles.addButtonStyle}
              onPress={()=>{
                navigation.navigate('Detail',{
                  id:item.id,
                  title:item.title
                })
              }}
        >
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection: "row", margin: 5 }}>
              <Image
                resizeMode="cover"
                source={{ uri: item.picture }}
                style={styles.thumbnail}
              />
              <View style={styles.dataContainer}>
                <View style={styles.dataContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.detail}>{item.detail}</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  return (
    <View>
      <FlatList
        data={product}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={_renderItem}
        refreshing={loading}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    height: 80,
    elevation: 3,
    borderColor: "gray",
    borderRadius: 5,
    flexDirection: "row",
    marginHorizontal: 20,
  },
  dataContainer: {
    flex: 1,
  },

  thumbnail: {
    width: 70,

    height: 70,
  },
  dataContent: {
    marginTop: 5,
    marginLeft: 15,
  },
  title: {
    color: "#444",
    fontSize: 18,
    fontWeight: "bold",
  },
  detail: {
    fontSize: 16,
    color: "#888",
    fontWeight: "700",
  },
  addButtonStyle: {
    width: '100%',        
    marginBottom: 15,
},
});
