import React from "react";
import Home from "./Components/Home";
import "react-native-gesture-handler";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPreset,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Details from "./Components/Details";
import TabNavi from "./Components/TabNavi";

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#141414",
  },
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: { backgroundColor: "#141414" },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="TabNavi"
          component={TabNavi}
          options={({ route }) => ({
            title: route.params.name,
            headerStyle: { backgroundColor: "#141414" },
            headerTintColor: "#fff",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
