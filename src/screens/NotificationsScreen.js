import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const NotificationsScreen = () => {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.NotificationsRow1}>
        <View style={styles.textRow}>
          <View style={styles.icon}>
            <FontAwesome name="circle" size={12} color="#40a8c4" />
          </View>

          <Text style={styles.textStyle1}> SO1012345 Захиалга биелсэн</Text>
          <Text style={styles.textStyle2}> Low</Text>
        </View>
        <View style={styles.textRow2}>
          <Text style={styles.textStyle3}> Захиалгын мэдээлэл </Text>
          <Text style={styles.textStyle4}> 5 минутын өмнө</Text>
        </View>
      </View>

      <View style={styles.NotificationsRow2}>
        <View style={styles.textRow}>
          <View style={styles.icon}>
            <FontAwesome name="circle" size={12} color="white" />
          </View>

          <Text style={styles.textStyle1}>SO1089120 Захиалга цуцлагдсан</Text>
          <Text style={styles.textStyle5}> High</Text>
        </View>
        <View style={styles.textRow2}>
          <Text style={styles.textStyle3}> Захиалгын мэдээлэл </Text>
          <Text style={styles.textStyle6}> 1 цагийн өмнө</Text>
        </View>
      </View>

      <View style={styles.NotificationsRow3}>
        <View style={styles.textRow}>
          <View style={styles.icon}>
            <FontAwesome name="circle" size={12} color="#40a8c4" />
          </View>

          <Text style={styles.textStyle1}>
            SO1020097 Оргилуун ус 6+1 урамшуулал
          </Text>
          <Text style={styles.textStyle7}>Normal</Text>
        </View>
        <View style={styles.textRow2}>
          <Text style={styles.textStyle3}> Урамшуулалын мэдээлэл </Text>
          <Text style={styles.textStyle8}> 09:17</Text>
        </View>
      </View>

      <View style={styles.NotificationsRow4}>
        <View style={styles.textRow}>
          <View style={styles.icon}>
            <FontAwesome name="circle" size={12} color="#40a8c4" />
          </View>

          <Text style={styles.textStyle1}> SO1012345 Захиалга биелсэн</Text>
          <Text style={styles.textStyle2}> Low</Text>
        </View>
        <View style={styles.textRow2}>
          <Text style={styles.textStyle3}> Захиалгын мэдээлэл </Text>
          <Text style={styles.textStyle9}> 2021.04.20 18:00</Text>
        </View>
      </View>
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  icon: {
    top: 25,
    marginLeft: 20,
  },
  textRow: {
    flexDirection: "row",
    paddingVertical: 4,
    marginHorizontal: 10,
  },
  textStyle1: {
    top: 20,
    marginLeft: 10,
    fontSize: 12,
    fontWeight: "bold",
  },
  textStyle2: {
    top: 20,
    marginLeft: 120,
    fontSize: 12,
    color: "green",
    fontWeight: "bold",
  },
  textStyle3: {
    top: 20,
    marginLeft: 38,
    fontSize: 11,
    color: "#697078",
  },
  textStyle4: {
    top: 20,
    marginLeft: 127,
    fontSize: 11,
    color: "#697078",
  },
  textStyle5: {
    top: 20,
    marginLeft: 98,
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
  },
  textStyle6: {
    top: 20,
    marginLeft: 138,
    fontSize: 11,
    color: "#697078",
  },
  textStyle7: {
    top: 20,
    marginLeft: 35,
    fontSize: 12,
    color: "#f7ee31",
    fontWeight: "bold",
  },
  textStyle8: {
    top: 20,
    marginLeft: 160,
    fontSize: 11,
    color: "#697078",
  },
  textStyle9: {
    top: 20,
    marginLeft: 120,
    fontSize: 11,
    color: "#697078",
  },
  textRow2: {
    flexDirection: "row",

    marginHorizontal: 10,

    top: 5,
  },
  NotificationsRow1: {
    top: 10,
  },
  NotificationsRow2: {
    top: 30,
  },
  NotificationsRow3: {
    top: 50,
  },
  NotificationsRow4: {
    top: 80,
  },
});
