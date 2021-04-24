import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Collapsed from "../components/Collapsed";
const OrderConfirmScreen = (props) => {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ flex: 0.9 }}>
        <Collapsed />
        <View style={{ top: 50 }}>
          <View style={styles.headerPanel}>
            <View style={styles.headerText}>
              <Text> Бараа </Text>
              <Text style={styles.headerText2}> Багц </Text>
              <Text style={styles.headerText3}> Тоо </Text>
              <Text style={styles.headerText4}> Дүн </Text>
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
              <Text style={styles.bagts}>10</Text>
              <Text style={styles.too}>90</Text>
              <Text style={styles.dun}>102,510</Text>
            </View>
            <View style={styles.description}>
              <Text style={styles.price}> Үнэ: 2742</Text>
              <Text style={styles.bagtsintoo}> Багцын тоо:12</Text>
            </View>
            <View
              style={{
                borderBottomColor: "#bfc2c7",
                borderBottomWidth: 1,
                top: 20,
                rigth: 20,
              }}
            />
          </View>
          <View
            style={{
              marginHorizontal: 20,
              bottom: 18,
              top: 50,
            }}
          >
            <View style={styles.description}>
              <Text style={styles.itemName}>01307- Оргилуун бэрсүүт жүрж</Text>
              <Text style={styles.bagts}>10</Text>
              <Text style={styles.too}>90</Text>
              <Text style={styles.dun}>102,510</Text>
            </View>
            <View style={styles.description}>
              <Text style={styles.price}> Үнэ: 2742</Text>
              <Text style={styles.bagtsintoo}> Багцын тоо:12</Text>
            </View>
            <View
              style={{
                borderBottomColor: "#bfc2c7",
                borderBottomWidth: 1,
                top: 20,
                rigth: 20,
              }}
            />
          </View>
          <View
            style={{
              marginHorizontal: 20,
              bottom: 18,
              top: 80,
            }}
          >
            <View style={styles.description}>
              <Text style={styles.itemName}>01307- Оргилуун бэрсүүт жүрж</Text>
              <Text style={styles.bagts}>10</Text>
              <Text style={styles.too}>90</Text>
              <Text style={styles.dun}>102,510</Text>
            </View>

            <View style={styles.description}>
              <Text style={styles.price}> Үнэ: 2742</Text>
              <Text style={styles.bagtsintoo}> Багцын тоо:12</Text>
            </View>
            <View
              style={{
                borderBottomColor: "#bfc2c7",
                borderBottomWidth: 1,
                top: 20,
                rigth: 20,
              }}
            />
          </View>
          <View
            style={{
              marginHorizontal: 20,
              bottom: 18,
              top: 110,
            }}
          >
            <View style={styles.description}>
              <Text style={styles.itemName}>01307- Оргилуун бэрсүүт жүрж</Text>
              <Text style={styles.bagts}>10</Text>
              <Text style={styles.too}>90</Text>
              <Text style={styles.dun}>102,510</Text>
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
          <View style={styles.headerText}>
            <Text
              onPress={() => props.navigation.navigate("OrderItem")}
              style={styles.footerText1}
            >
              {" "}
              + Бараа нэмэх{" "}
            </Text>
            <Text style={styles.footerText2}> 20 </Text>
            <Text style={styles.footerText3}> 270 </Text>
            <Text style={styles.footerText4}> 383,406 </Text>
          </View>
        </View>
      </View>
      <View style={styles.button}>
        <Button
          onPress={() => props.navigation.navigate("Order")}
          title="Хадгалах"
          color="#ffff"
        />
      </View>
    </View>
  );
};

export default OrderConfirmScreen;

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
    top: 12,
  },

  headerText2: {
    left: 140,
  },
  headerText3: {
    left: 160,
  },
  headerText4: {
    left: 200,
  },
  footerText: {
    flexDirection: "row",
    top: 12,
  },
  footerText1: {
    color: "#40a8c4",
    fontWeight: "bold",
  },
  footerText2: {
    left: 80,
  },
  footerText3: {
    left: 105,
  },
  footerText4: {
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
  bagts: {
    left: 20,
    fontSize: 12,
  },
  too: {
    fontSize: 12,
    left: 60,
  },
  dun: {
    fontSize: 12,
    left: 90,
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
