import React from "react";
import {Dimensions} from "react-native";
import MapView from "react-native-maps";

const {width, height} = Dimensions.get("window");

const Main = () => {
  return <MapView style={{height: height, width: width}} />;
};

export default Main;
