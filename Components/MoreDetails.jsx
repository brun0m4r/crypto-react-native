import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

const MoreDetails = ({ coin }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>{coin.description.en}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141414",
  },
  text: {
    color: "#fff",
    textAlign: "justify"
  },
});

export default MoreDetails;
