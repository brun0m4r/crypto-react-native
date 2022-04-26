import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Item = ({ coin, navigation, route }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("TabNavi", {
            id: coin.id,
            name: coin.name,
            image: coin.image,
          })
        }
      >
        <View style={styles.coinName}>
          <Image style={styles.image} source={{ uri: coin.image }} />
          <View style={styles.containerNames}>
            <Text style={styles.text}>{coin.name}</Text>
            <Text style={styles.symbol}>{coin.symbol}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View>
        <Text style={styles.textPrice}>$ {coin.current_price}</Text>
        <Text
          style={[
            styles.pricePercentage,
            coin.price_change_percentage_24h > 0
              ? styles.positive
              : styles.negative,
          ]}
        >
          {coin.price_change_percentage_24h}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141414",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  coinName: {
    flexDirection: "row",
  },
  containerNames: {
    marginLeft: 10,
  },
  text: {
    color: "#ffffff",
  },
  textPrice: {
    color: "#ffffff",
    textAlign: "right",
  },
  image: {
    width: 30,
    height: 30,
  },
  symbol: {
    color: "#434343",
    textTransform: "uppercase",
  },
  pricePercentage: {
    color: "#fff",
    textAlign: "right",
  },
  positive: {
    color: "#00b5b9",
  },
  negative: {
    color: "#fc4422",
  },
});

export default Item;
