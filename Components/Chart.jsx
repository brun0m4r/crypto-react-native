import React, { useState, useEffect } from "react";
import { Grid, LineChart, XAxis, YAxis } from "react-native-svg-charts";
import { View, TextInput } from "react-native";
import axios from "axios";
import AppLoader from "./AppLoader";
import { Picker } from "@react-native-picker/picker";

const Chart = ({ coin, days, setDays }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const data = (
      await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=${
          !days ? 14 : days
        }`
      )
    ).data;
    if (data) {
      setData(data?.prices?.map((e) => e[1]));
    }
  };

  useEffect(() => {
    getData();
  }, [days]);

  const axesSvg = { fontSize: 10, fill: "grey" };
  const verticalContentInset = { top: 10, bottom: 10 };
  const xAxisHeight = 0;

  return data.length ? (
    <View style={{ height: 200, padding: 20, flexDirection: "row" }}>
      <YAxis
        data={data}
        style={{ marginBottom: xAxisHeight }}
        contentInset={verticalContentInset}
        svg={axesSvg}
      />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <LineChart
          style={{ flex: 1 }}
          data={data}
          contentInset={verticalContentInset}
          svg={{ stroke: "rgb(134, 65, 244)" }}
        >
          <Grid />
        </LineChart>
      </View>
    </View>
  ) : (
    <AppLoader loader={require("../assets/chart-loading.json")} />
  );
};

export default Chart;
