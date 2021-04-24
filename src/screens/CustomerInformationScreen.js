import * as React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Receivable from "../components/Receivable";
import Payment from "../components/Payment";

function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Text style={{ top: 20, left: 20, fontWeight: "600" }}>
        {" "}
        015382 - A Mart, Их алтан булаг ХХК{" "}
      </Text>

      <View style={{ top: 20 }}>
        <View style={{ flexDirection: "row", top: 70, marginHorizontal: 40 }}>
          <View>
            <Text style={styles.text1}>Регистрийн дугаар</Text>
            <Text style={styles.text2}>5927102</Text>
          </View>
          <View style={{ left: 60 }}>
            <Text style={styles.text1}> Харилцагчийн ангилал</Text>
            <Text style={styles.text2}> Дэлгүүр</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", top: 100, marginHorizontal: 40 }}>
          <View>
            <Text style={styles.text1}> НӨАТ-ын төлөгч</Text>
            <Text style={styles.text2}> Тийм</Text>
          </View>
          <View style={{ left: 80 }}>
            <Text style={styles.text1}>Зон</Text>
            <Text style={styles.text2}> 001</Text>
          </View>
        </View>
        <View style={{ top: 130, marginHorizontal: 40 }}>
          <View>
            <Text style={styles.text1}> Харилцагчийн төлөв</Text>
            <Text style={styles.text2}> Идэвхтэй </Text>
          </View>
        </View>
      </View>
      <View style={styles.edit}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ left: 40 }}>
            <Text style={styles.text1}> Утас</Text>
            <Text style={styles.text2}> 99787408 </Text>
          </View>
          <View style={{ left: 130 }}>
            <Text style={styles.text1}> Email</Text>
            <Text style={styles.text2}> Zaya@gmail.com</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", top: 30 }}>
          <View style={{ left: 40 }}>
            <Text style={styles.text1}> Хариуцагч1</Text>
            <Text style={styles.text2}> Алтангарэл</Text>
          </View>
          <View style={{ left: 130 }}>
            <Text style={styles.text1}>Хариуцагч2</Text>
            <Text style={styles.text2}>Нарантуяа </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", top: 60 }}>
          <View style={{ left: 40 }}>
            <Text style={styles.text1}> Банк </Text>
            <Text style={styles.text2}> Голомт</Text>
          </View>
          <View style={{ left: 160 }}>
            <Text style={styles.text1}> Дансны нэр</Text>
            <Text style={styles.text2}> Нарантуяа </Text>
          </View>
        </View>
        <View style={{ top: 90 }}>
          <View style={{ left: 40 }}>
            <Text style={styles.text1}> Дансны дугаар </Text>
            <Text style={styles.text2}> 1000345367</Text>
          </View>
        </View>
        <View style={{ top: 120 }}>
          <View style={{ left: 40 }}>
            <Text style={styles.text1}> Хаяг</Text>
            <Text style={styles.text2}> Зайсан номун хотхон</Text>
          </View>
        </View>
        <View style={{ top: 150 }}>
          <View style={{ left: 40 }}>
            <Text style={styles.text1}> Нэмэлт мэдээлэл</Text>
            <Text style={styles.text2}> Харилцагчийн нэмэлт мэдээлэл</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Text style={{ top: 20, left: 20, fontWeight: "600" }}>
        {" "}
        015382 - A Mart, Их алтан булаг ХХК{" "}
      </Text>
      <View style={{ top: 20 }}>
        <View style={{ flexDirection: "row", top: 70, marginHorizontal: 40 }}>
          <View>
            <Text style={styles.text1}>Кредит</Text>
            <Text style={styles.text2}>12,500,000</Text>
          </View>
          <View style={{ left: 120 }}>
            <Text style={styles.text1}> Дудаж борлуулалт</Text>
            <Text style={styles.text2}> 4,563,150</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", top: 100, marginHorizontal: 40 }}>
          <View>
            <Text style={styles.text1}> Сүүлийн төлбөрийн дүн</Text>
            <Text style={styles.text2}> 3,450,000</Text>
          </View>
          <View style={{ left: 55 }}>
            <Text style={styles.text1}>Сүүлийн төлбөрийн огноо</Text>
            <Text style={styles.text2}> 2021.04.20</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", top: 130, marginHorizontal: 40 }}>
          <View>
            <Text style={styles.text1}> Захиалгын давтамж (сард)</Text>
            <Text style={styles.text2}> 4</Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={{ top: 210 }}>
          <Receivable />
        </View>
        <View style={{ top: 250 }}>
          <Payment />
        </View>
      </ScrollView>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: "white",
          marginHorizontal: 90,
          height: 45,
          bottom: 705,
          borderRadius: 40,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowRadius: 2,
          shadowOpacity: 0.3,
        },
        labelStyle: {
          fontSize: 14,
          top: 10,
        },
      }}
    >
      <Tab.Screen name="Үндсэн" component={HomeScreen} options={{}} />
      <Tab.Screen name="Санхүү" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return <MyTabs />;
}
const styles = StyleSheet.create({
  edit: {
    backgroundColor: "#ffff",
    width: 380,
    height: 420,
    top: 220,
    marginHorizontal: 20,
    bottom: 120,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 0.5,
    borderRadius: 10,
  },
  text1: {
    top: 30,
    color: "#666b73",
    fontWeight: "500",
    fontSize: 12,
  },
  text2: {
    top: 40,
    fontWeight: "700",
    fontSize: 14,
  },
});
