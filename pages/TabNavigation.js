import { StyleSheet } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Hot from "./Hot";
import MTN from "./MTN";
import Fun from "./Fun";
import Transport from "./Transport";
import Shop from "./Shop";

// Tab Navigator
const Tab = createMaterialTopTabNavigator();

const TabNavigation = () => {
  const tabBarOptions = {
    activeTintColor: "white",
    inactiveTintColor: "#979797",
    indicatorStyle: { backgroundColor: "#FDCB04", height: "2%" },
    pressOpacity: 1,
  };

  return (
    <Tab.Navigator
      style={styles.container}
      tabBarOptions={tabBarOptions}
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 14,
          textTransform: "none",
          flex: 1,
          justifyContent: "center",
          width: "100%",
          fontWeight: 500,
        },
        tabBarStyle: {
          backgroundColor: "#333738", // Replace with your desired color
        },
      }}
    >
      <Tab.Screen name="Hot" component={Hot} />
      <Tab.Screen name="MTN" component={MTN} />
      <Tab.Screen name="Fun" component={Fun} />
      <Tab.Screen name="Transport" component={Transport} />
      <Tab.Screen name="Shop" component={Shop} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  container: {
    height: 400,
    borderRadius: 20,
  },
});
