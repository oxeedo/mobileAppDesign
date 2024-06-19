import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Hot = () => {
  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        <View style={styles.jumia}>
          <Text>Jumia</Text>
        </View>
        <View style={styles.travelStat}>
          <Text>travel</Text>
        </View>
        <View style={styles.apple}>
          <Text>Apple music</Text>
        </View>
        <View style={styles.bolt}>
          <Text>Bolt</Text>
        </View>
      </View>
      <View style={styles.gridContainer2}>
        <View style={styles.jumia}>
          <Text>Jumia</Text>
        </View>
        <View style={styles.travelStat}>
          <Text>travel</Text>
        </View>
        <View style={styles.apple}>
          <Text>Apple music</Text>
        </View>
        <View style={styles.bolt}>
          <Text>Bolt</Text>
        </View>
      </View>
      <View style={styles.gridContainer3}>
        <View style={styles.jumia}>
          <Text>Jumia</Text>
        </View>
        <View style={styles.travelStat}>
          <Text>travel</Text>
        </View>
        <View style={styles.apple}>
          <Text>Apple music</Text>
        </View>
        <View style={styles.bolt}>
          <Text>Bolt</Text>
        </View>
      </View>
    </View>
  );
};

export default Hot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333738",
  },
  gridContainer: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  gridContainer2: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  gridContainer3: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  jumia: {
    width: 70,
    height: 70,
    backgroundColor: "#FE9600",
    borderRadius: 10,
    marginRight: 10,
  },
  travelStat: {
    width: 70,
    height: 70,
    backgroundColor: "#F8FDFD",
    borderRadius: 10,
    marginRight: 10,
  },
  apple: {
    width: 70,
    height: 70,
    backgroundColor: "#F8FDFD",
    borderRadius: 10,
    marginRight: 10,
  },
  bolt: {
    width: 70,
    height: 70,
    backgroundColor: "#F8FDFD",
    borderRadius: 10,
  },
});
