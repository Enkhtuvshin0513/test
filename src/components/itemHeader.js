import React from "react";
import { StyleSheet, View } from "react-native";

const itemHeader = (props) => {
  return (
    <View style={styles.headerPanel}>
      <View style={styles.headerText}>
        <Text style={styles.headerText1}> Бараа </Text>
        <Text style={styles.headerText2}> Багц </Text>
        <Text style={styles.headerText3}> Тоо </Text>
        <Text style={styles.headerText4}> Дүн </Text>
      </View>
    </View>
  );
};

export default itemHeader;

const styles = StyleSheet.create({
  headerPanel: {
    height: 45,
    width: 380,
    backgroundColor: "#c7cdd9",
    marginHorizontal: 15,
    borderRadius: 5,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowRadius: 1,
    shadowOpacity: 0.2,
  },
  headerText: {
    flexDirection: "row",
    marginHorizontal: 15,
    top: 12,
  },

  headerText2: {
    left: 130,
  },
  headerText3: {
    left: 160,
  },
  headerText4: {
    left: 190,
  },
});
