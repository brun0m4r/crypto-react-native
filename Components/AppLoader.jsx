import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AnimatedLottieView from "lottie-react-native";

const AppLoader = ({ loader, styles }) => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles]}>
      <AnimatedLottieView source={loader} autoPlay loop />
    </View>
  );
};

export default AppLoader;
