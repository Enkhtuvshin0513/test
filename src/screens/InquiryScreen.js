import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import SearchInquiry from "../components/SearchInquiry";
const InquiryScreen = (props) => {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Text style={styles.textTitle}> Авлагын дэлгэрэнгүй</Text>
      <View style={{ flex: 0.9 }}>
        <SearchInquiry />

        <View style={{ top: 20 }}>
          <View style={styles.headerPanel}>
            <View style={styles.headerText}>
              <Text style={styles.headerTexts}> Зээл </Text>
              <Text style={styles.headerTexts}> Бэлэн </Text>
              <Text style={styles.headerTexts}> Данс </Text>
              <Text style={styles.headerTexts}> Эцс/Үлд </Text>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 15,
              top: 40,
            }}
          >
            <View style={styles.description}>
              <Text style={styles.row1}> 500,000 </Text>
              <Text style={styles.row1}> 85,200</Text>
              <Text style={styles.row2}> - </Text>
              <Text style={styles.row2}>585,200</Text>
            </View>

            <View
              style={{
                borderBottomColor: "#bfc2c7",
                borderBottomWidth: 1,
                top: 20,
                marginHorizontal: 10,
              }}
            />
          </View>
          <View
            style={{
              marginHorizontal: 15,
              top: 80,
            }}
          >
            <View style={styles.description}>
              <Text style={styles.row3}> - </Text>
              <Text style={styles.row3}>300,000 </Text>
              <Text style={styles.row4}> 1,000,000 </Text>
              <Text style={styles.row5}>102,510</Text>
            </View>

            <View
              style={{
                borderBottomColor: "#bfc2c7",
                borderBottomWidth: 1,
                top: 20,
                marginHorizontal: 10,
              }}
            />
          </View>
          <View
            style={{
              marginHorizontal: 15,
              top: 120,
            }}
          >
            <View style={styles.description}>
              <Text style={styles.row3}> - </Text>
              <Text style={styles.row3}>300,000 </Text>
              <Text style={styles.row4}> 1,000,000 </Text>
              <Text style={styles.row5}>102,510</Text>
            </View>

            <View
              style={{
                borderBottomColor: "#bfc2c7",
                borderBottomWidth: 1,
                top: 20,
                marginHorizontal: 10,
              }}
            />
          </View>
        </View>
      </View>
      <View style={{ bottom: 20 }}>
        <View style={styles.footerPanel}>
          <View style={styles.footerText}>
            <Text style={styles.footerText1}> 500,000 </Text>
            <Text style={styles.footerText1}>685,200 </Text>
            <Text style={styles.footerText1}> 2,000,000 </Text>
            <Text style={styles.footerText1}>790,220</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default InquiryScreen;

const styles = StyleSheet.create({
  headerPanel: {
    height: 45,
    width: 380,
    backgroundColor: "#c3d2db",
    marginHorizontal: 15,
    borderRadius: 5,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowRadius: 1,
    shadowOpacity: 0.2,
  },
  footerPanel: {
    height: 45,
    width: 380,
    backgroundColor: "#c3d2db",
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
    top: 15,
  },

  headerTexts: {
    marginLeft: 40,
  },

  footerText: {
    flexDirection: "row",
    top: 12,
  },

  description: {
    flexDirection: "row",
  },
  row1: {
    marginLeft: 30,
  },
  row2: {
    marginLeft: 55,
  },
  row3: {
    marginLeft: 52,
  },
  row4: {
    marginLeft: 25,
  },
  row5: {
    marginLeft: 25,
  },

  textTitle: {
    top: 20,
    left: 15,
    fontSize: 15,
    fontWeight: "500",
  },
  footerText1: {
    marginLeft: 30,
  },
});
