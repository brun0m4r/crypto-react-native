import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import AppLoader from "./AppLoader";
import Chart from "./Chart";

const Details = ({ coin }) => {
  return coin.name ? (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: coin.image?.large }} />
      <Text style={styles.text}>{coin.name}</Text>
      <View>
        <Text style={styles.description}>
          Current price: {coin.market_data?.current_price?.usd} US$
        </Text>
        <View style={styles.containerRow}>
          <Text style={styles.description}>Price percentage 24h: </Text>
          <Text
            style={[
              styles.pricePercentage,
              coin.market_data?.price_change_percentage_24h > 0
                ? styles.positive
                : styles.negative,
            ]}
          >
            {coin.market_data?.price_change_percentage_24h}%
          </Text>
        </View>
      </View>
      <Chart coin={coin.id} />
    </View>
  ) : (
    <AppLoader
      styles={styles.loading}
      loader={require("../assets/crypto-loader.json")}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141414",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  containerRow: {
    flexDirection: "row",
  },
  text: {
    color: "#ffffff",
    fontSize: 30,
    marginTop: 20,
  },
  description: {
    color: "#ffffff",
    fontSize: 15,
  },
  image: {
    width: 100,
    height: 100,
  },
  pricePercentage: {
    color: "#fff",
  },
  positive: {
    color: "#00b5b9",
  },
  negative: {
    color: "#fc4422",
  },
  loading: {
    height: "30%",
    zIndex: 1,
  },
});

export default Details;
