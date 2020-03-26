import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {StatusBar, SafeAreaView, StyleSheet} from "react-native";
import Routes from "./src/routes";

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Routes />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
