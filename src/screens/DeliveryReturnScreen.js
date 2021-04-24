import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { TouchableOpacity } from "react-native";
import Collapsed from "../components/Collapsed";
const DeliveryReturnScreen = (props) => {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ flex: 0.9 }}>
        <Collapsed />
        <View style={{ top: 50 }}>
          <View style={styles.headerPanel}>
            <View style={styles.headerText}>
              <Text> Бараа </Text>
              <Text style={styles.headerText2}> Тоо </Text>
              <Text style={styles.headerText3}> Дүн </Text>
              <Text style={styles.headerText4}> Шалтгаан </Text>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 20,
              bottom: 18,
              top: 20,
            }}
          >
            <View style={styles.description}>
              <Text style={styles.itemName}>01307- Оргилуун бэрсүүт жүрж</Text>
              <Text style={styles.too}>24</Text>
              <Text style={styles.dun}>65,808</Text>
              <Text style={styles.shaltgaan}> Эвдрэл </Text>
            </View>
            <View style={styles.description}>
              <Text style={styles.price}> Үнэ: 2742</Text>
              <Text style={styles.bagtsintoo}> Багцын тоо:12</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ bottom: 35 }}>
        <View style={styles.footerPanel}>
          <View style={styles.footerText}>
            <Text
              onPress={() => props.navigation.navigate("OrderItem")}
              style={styles.footerText1}
            >
              {" "}
              + Бараа нэмэх{" "}
            </Text>
            <Text style={styles.footerText2}> 24 </Text>
            <Text style={styles.footerText3}> 65,808 </Text>
          </View>
        </View>
      </View>
      <View style={styles.button}>
        <Button
          title="Хадгалах"
          color="#ffff"
          onPress={() => props.navigation.navigate("Delivery")}
        />
      </View>
    </View>
  );
};

export default DeliveryReturnScreen;

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
    marginHorizontal: 15,
    top: 10,
  },

  headerText2: {
    left: 140,
  },
  headerText3: {
    left: 160,
  },
  headerText4: {
    left: 172,
  },
  footerText: {
    flexDirection: "row",
    top: 12,
  },
  footerText1: {
    color: "#40a8c4",
    fontWeight: "bold",
    left: 15,
  },
  footerText2: {
    left: 110,
  },
  footerText3: {
    left: 120,
  },

  itemName: {
    fontSize: 12,
  },
  description: {
    flexDirection: "row",
    top: 5,
    margin: 5,
  },
  price: {
    fontSize: 11,
    color: "#646c73",
  },
  bagtsintoo: {
    left: 15,
    fontSize: 11,
    color: "#646c73",
  },
  too: {
    left: 20,
    fontSize: 12,
  },
  dun: {
    fontSize: 12,
    left: 40,
  },
  shaltgaan: {
    fontSize: 12,
    left: 65,
  },
  button: {
    paddingVertical: 4,
    marginHorizontal: 60,
    bottom: 10,
    backgroundColor: "#40a8c4",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#40a8c4",
  },
});
