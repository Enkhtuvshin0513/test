import React, { Component } from "react";
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
            <Text style={styles.headerText}>Авлагын дэлгэрэнгүй</Text>
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
            <View style={styles.all1}>
              <Text style={styles.textTitle}>001- 2020.12.16</Text>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text style={styles.textStyle1}> Авлагын тайлбар</Text>
                <Text style={styles.textStatus}> 521,000</Text>
              </View>

              <View
                style={{
                  borderBottomColor: "#bfc2c7",
                  borderBottomWidth: 1,
                  top: 10,
                }}
              />
            </View>
            <View style={styles.all1}>
              <Text style={styles.textTitle}>002- 2020.01.20</Text>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text style={styles.textStyle1}> Авлагын тайлбар</Text>
                <Text style={styles.textStatus2}> 380,000</Text>
              </View>

              <View
                style={{
                  borderBottomColor: "#bfc2c7",
                  borderBottomWidth: 1,
                  top: 10,
                }}
              />
            </View>
            <View style={styles.all1}>
              <Text style={styles.textTitle}>003- 2020.03.20</Text>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text style={styles.textStyle1}> Авлагын тайлбар</Text>
                <Text style={styles.textStatus}> 200,000</Text>
              </View>

              <View
                style={{
                  borderBottomColor: "#bfc2c7",
                  borderBottomWidth: 1,
                  top: 10,
                }}
              />
            </View>
            <View style={styles.all1}>
              <Text style={styles.textTitle}>004- 2020.03.19</Text>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text style={styles.textStyle1}> Авлагын тайлбар</Text>
                <Text style={styles.textStatus}> 950,000</Text>
              </View>
            </View>
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
    height: 70,
    paddingLeft: 20,
    paddingRight: 18,
    alignItems: "center",
    backgroundColor: "#e9eaf2",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 0.5,
  },

  headerText: {
    top: -5,
    fontSize: 15,
    fontWeight: "600",
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
  child: {
    height: 260,
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 0.5,
  },
  all1: {
    marginTop: 30,
    marginHorizontal: 20,
  },

  textTitle: {
    top: -10,
    fontWeight: "600",
    fontSize: 13,
  },
  textStyle1: {
    fontSize: 11,
    color: "#757c8a",
  },
  textStatus: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    marginLeft: 180,
    bottom: 20,
  },
  textStatus2: {
    fontSize: 12,
    color: "green",
    fontWeight: "bold",
    marginLeft: 180,
    bottom: 20,
  },
});
