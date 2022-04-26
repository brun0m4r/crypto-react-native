import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import Item from "./Item";

const List = ({ info, search, getInfo, navigation, route }) => {
  const [refresh, setRefresh] = useState(false);
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={info.filter(
          (e) =>
            e.name.toLowerCase().includes(search.toLowerCase()) ||
            e.symbol.toLowerCase().includes(search.toLowerCase())
        )}
        renderItem={({ item }) => (
          <Item coin={item} navigation={navigation} route={route} />
        )}
        showsVerticalScrollIndicator={false}
        refreshing={refresh}
        onRefresh={async () => {
          setRefresh(true);
          await getInfo();
          setRefresh(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141414",
    alignItems: "center",
    width: "100%",
  },
  list: {
    width: "90%",
    marginBottom: "20%",
  },
});

export default List;
