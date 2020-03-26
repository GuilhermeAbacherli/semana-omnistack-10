import React from "react";
import {createStackNavigator, HeaderTitle} from "@react-navigation/stack";

import Main from "./pages/Main";
import Profile from "./pages/Profile";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          title: "DevRadar",
          headerTintColor: "#FFF",
          headerStyle: {backgroundColor: "#7D40E7"},
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Perfil no GitHub",
          headerTintColor: "#FFF",
          headerStyle: {backgroundColor: "#7D40E7"},
        }}
      />
    </Stack.Navigator>
  );
}
