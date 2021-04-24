import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const SearchInquiry = () => {
  return (
    <View style={{ top: 45 }}>
      <View>
        <Text
          style={{ left: 20, bottom: 10, color: "#505459", fontSize: "12" }}
        >
          Харилцагч
        </Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.searchPanel}>
            <View style={styles.iconSearch}>
              <Entypo name="chevron-thin-down" size={24} color="#40a8c4" />
            </View>
            <Text style={{ top: -10, fontSize: 14, left: 8 }}>
              {" "}
              Bell Mart, Бирмүүнд холдинг ХХК{" "}
            </Text>
          </View>
          <View style={styles.Panel3}>
            <View style={styles.icon}>
              <EvilIcons
                style={styles.searchIcon}
                name="search"
                size={32}
                color="white"
              />
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{ left: 20, top: -70, color: "#404347", fontSize: "12" }}
          >
            Oгноо: From
          </Text>
          <Text
            style={{ left: 110, top: -70, color: "#404347", fontSize: "12" }}
          >
            To
          </Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.searchPanel2}>
            <View style={styles.iconDate}>
              <Fontisto name="date" size={22} color="#40a8c4" />
            </View>
            <Text style={{ top: -10, fontSize: 14, left: 5 }}>
              {" "}
              2021.04.01{" "}
            </Text>
          </View>
          <View style={styles.searchPanel2}>
            <View style={styles.iconDate}>
              <Fontisto name="date" size={22} color="#40a8c4" />
            </View>
            <Text style={{ top: -10, fontSize: 14, left: 5 }}>
              {" "}
              2021.05.01{" "}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SearchInquiry;

const styles = StyleSheet.create({
  searchPanel: {
    height: 45,
    width: 320,
    backgroundColor: "white",
    marginLeft: 15,
    borderRadius: 5,

    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    shadowOpacity: 0.2,
  },
  TextInput: {
    marginLeft: 20,
    fontSize: 12,
  },
  searchPanel2: {
    top: -62,
    height: 45,
    width: 150,
    backgroundColor: "white",
    marginLeft: 15,
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    shadowOpacity: 0.2,
  },
  Panel3: {
    height: 130,
    width: 50,
    backgroundColor: "#40a8c4",
    marginLeft: 15,
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    shadowOpacity: 0.2,
  },
  icon: {
    alignItems: "center",
    top: 50,
  },
  iconSearch: {
    top: 10,
    left: 280,
  },
  iconDate: {
    top: 8,
    left: 110,
  },
});
