import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const Search = () => {
  return (
    <View style={{ top: 20 }}>
      <View style={styles.searchPanel}>
        <EvilIcons style={styles.searchIcon} name="search" />
        <TextInput
          placeholder="хайх"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View style={styles.filterPanel}>
        <Ionicons style={styles.filterIcon} name="filter" />
        <TextInput
          placeholder="Бүх бараа"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchPanel: {
    height: 45,
    backgroundColor: "white",

    marginLeft: 15,
    marginRight: 220,
    borderRadius: 5,
    flexDirection: "row",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    shadowOpacity: 0.2,
  },

  searchIcon: {
    fontSize: 34,
    color: "#40a8c4",
    alignSelf: "center",
    marginHorizontal: 15,
  },
  filterIcon: {
    fontSize: 27,
    color: "#40a8c4",
    alignSelf: "center",
    marginHorizontal: 15,
  },
  filterPanel: {
    height: 45,
    bottom: 45,
    backgroundColor: "white",
    marginLeft: 220,
    marginRight: 15,
    borderRadius: 7,
    flexDirection: "row",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    shadowOpacity: 0.2,
  },
});
