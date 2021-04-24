import React, { Component } from "react";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

export default class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      expanded: false,
    };

    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    return (
      <View style={styles.collapsed}>
        <TouchableOpacity
          ref={this.accordian}
          style={styles.row}
          onPress={() => this.toggleExpand()}
        >
          <View>
            <Text style={styles.headerText}>SO100012345 </Text>
            <Text style={styles.headerText2}>
              015382 - Bell Mart Бирмүүнд холдинг ХХК
            </Text>
          </View>
          <Icon
            name={
              this.state.expanded ? "keyboard-arrow-up" : "keyboard-arrow-down"
            }
            size={42}
            color={"#40a8c4"}
          />
        </TouchableOpacity>

        {this.state.expanded && (
          <View style={styles.child}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.textType}> Төрөл</Text>
              <View style={styles.type}>
                <View style={styles.iconDown}>
                  <Entypo name="chevron-thin-down" size={24} color="#40a8c4" />
                </View>
              </View>
              <Text style={styles.textDate}> Хүргэх </Text>
              <View style={styles.date}>
                <View style={styles.iconDate}>
                  <Fontisto name="date" size={22} color="#40a8c4" />
                </View>
              </View>
            </View>
            <Text style={styles.textNotes}> Тэмдэглэл </Text>
            <View style={styles.notes}></View>
          </View>
        )}
      </View>
    );
  }

  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded: !this.state.expanded });
  };
}

const styles = StyleSheet.create({
  collapsed: {
    marginHorizontal: 15,
    top: 15,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 100,
    paddingLeft: 20,
    paddingRight: 18,
    alignItems: "center",
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 0.5,
  },

  child: {
    height: 200,
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 0.5,
  },
  headerText: {
    top: -10,
    fontSize: 15,
    fontWeight: "bold",
  },
  headerText2: {
    fontSize: 15,
    fontWeight: "400",
  },

  type: {
    top: 30,
    height: 40,
    width: 160,
    left: -25,
    backgroundColor: "#f5f6f7",
    borderRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 0.1,
  },
  textType: {
    top: 10,
    left: 20,
    color: "#64676e",
    fontSize: 12,
    fontWeight: "500",
  },
  date: {
    top: 30,
    height: 40,
    width: 160,
    left: -40,
    backgroundColor: "#f5f6f7",
    borderRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 0.1,
  },
  textDate: {
    top: 10,
    left: 5,
    color: "#64676e",
    fontSize: 12,
    fontWeight: "500",
  },
  notes: {
    top: 60,
    height: 60,
    width: 350,
    backgroundColor: "#f5f6f7",
    marginLeft: 15,
    borderRadius: 2,

    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 0.1,
  },
  textNotes: {
    top: 45,
    left: 20,
    color: "#64676e",
    fontSize: 12,
    fontWeight: "500",
  },
  iconDate: {
    top: 8,
    left: 125,
  },
  iconDown: {
    top: 8,
    left: 125,
  },
});
