import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Details from "./Details";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import MoreDetails from "./MoreDetails";
import axios from "axios";

const Tab = createBottomTabNavigator();

const TabNavi = ({ navigation, route }) => {
  const { id } = route.params;
  const [coin, setCoin] = useState({});

  const getCoin = async (id) => {
    const api = await (
      await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
    ).data;
    setCoin(api);
  };

  useEffect(() => {
    getCoin(id);
  }, []);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "darkred",
        tabBarActiveBackgroundColor: "#141414",
        tabBarInactiveBackgroundColor: "#141414",
      }}
    >
      <Tab.Screen
        name="Details"
        options={{
          headerStyle: { backgroundColor: "#141414" },
          headerTintColor: "#fff",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="logo-bitcoin"
              color={color}
              size={size}
            />
          ),
        }}
      >
        {(props) => <Details {...props} coin={coin} />}
      </Tab.Screen>
      {/* <Tab.Screen
        name="MoreDetails"
        options={{
          headerStyle: { backgroundColor: "#141414" },
          headerTintColor: "#fff",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="eye-outline"
              color={color}
              size={size}
            />
          ),
        }}
      >
        {(props) => <MoreDetails {...props} coin={coin} />}
      </Tab.Screen> */}
    </Tab.Navigator>
  );
};

export default TabNavi;
