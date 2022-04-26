import { View, Text, TextInput, StyleSheet, StatusBar } from "react-native";
import React, { useState, useEffect } from "react";
import List from "./List";
import axios from "axios";

const Home = ({ navigation, route }) => {
  const [info, setInfo] = useState([]);
  const [search, setSearch] = useState("");
  const getInfo = async () => {
    const api = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    setInfo(api.data);
  };
  useEffect(() => {
    getInfo();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#141414" />
      <View style={styles.header}>
        <Text style={styles.title}>Crypto Market</Text>
        <TextInput
          placeholder="Serch a Coin"
          placeholderTextColor="#858585"
          onChangeText={(e) => setSearch(e)}
          style={styles.search}
        />
      </View>
      <List
        navigation={navigation}
        route={route}
        info={info}
        search={search}
        getInfo={getInfo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141414",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  title: {
    color: "#ffffff",
    fontSize: 20,
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 10,
  },
  search: {
    color: "#ffffff",
    borderBottomColor: "#4657ce",
    borderBottomWidth: 1,
    width: "40%",
    textAlign: "center",
  },
});

export default Home;
