import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { Icon } from "react-native-elements";
import { Feather } from "@expo/vector-icons";

const HomeScreen = (props) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [alignContent, setAlignContent] = useState("flex-start");
  const PreviewLayout = ({ values, selectedValue, setSelectedValue }) => (
    <View style={{ padding: 10, flex: 1 }}>
      <View style={styles.row}>
        {values.map((value) => (
          <TouchableOpacity
            key={value}
            onPress={() => setSelectedValue(value)}
            style={[styles.button, selectedValue === value && styles.selected]}
          >
            <Text
              style={[
                styles.buttonLabel,
                selectedValue === value && styles.selectedLabel,
              ]}
            >
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  return (
    <View style={{ backgroundColor: "#eeeeee", flex: 1 }}>
      <View
        style={{
          backgroundColor: "white",
          flex: 0.65,
        }}
      >
        <View
          style={{
            paddingVertical: 20,

            flexDirection: "row",
            justifyContent: "space-evenly",
            padding: 8,
          }}
        >
          <View style={styles.box}>
            <Text
              style={styles.text}
              onPress={() => props.navigation.navigate("Notifications")}
            >
              МЭДЭЭ
            </Text>

            <View style={styles.icon}>
              <Icon
                name="notifications-outline"
                size={32}
                type="ionicon"
                color="#40a8c4"
              />
            </View>
          </View>
          <View style={styles.box}>
            <Text
              style={styles.text}
              onPress={() => props.navigation.navigate("Inquiry")}
            >
              {" "}
              ЛАВЛАГАА
            </Text>
            <View style={styles.icon}>
              <Icon
                name="newspaper-outline"
                size={32}
                type="ionicon"
                color="#40a8c4"
              />
            </View>
          </View>
          <View style={styles.box}>
            <Text
              style={styles.text}
              onPress={() => props.navigation.navigate("Order")}
            >
              {" "}
              ЗАХИАЛГА
            </Text>
            <View style={styles.icon}>
              <Icon
                name="document-text-outline"
                size={32}
                type="ionicon"
                color="#40a8c4"
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            padding: 8,
          }}
        >
          <View style={styles.box}>
            <Text
              onPress={() => props.navigation.navigate("Customer")}
              style={styles.text}
            >
              ХАРИЛЦАГЧ
            </Text>
            <View style={styles.icon}>
              <Icon
                name="people-outline"
                size={32}
                type="ionicon"
                color="#40a8c4"
              />
            </View>
          </View>
          <View style={styles.box}>
            <Text
              onPress={() => props.navigation.navigate("Inventory")}
              style={styles.text}
            >
              {" "}
              БАРАА
            </Text>
            <View style={styles.icon}>
              <Icon
                name="cube-outline"
                type="ionicon"
                size={32}
                color="#40a8c4"
              />
            </View>
          </View>
          <View style={styles.box}>
            <Text
              style={styles.text}
              onPress={() => props.navigation.navigate("Delivery")}
            >
              {" "}
              ТҮГЭЭЛТ
            </Text>
            <View style={styles.icon}>
              <Feather name="truck" size={34} color="#40a8c4" />
            </View>
          </View>
        </View>
      </View>

      <View style={{ flex: 0.19, top: 12 }}>
        <PreviewLayout
          label="alignContent"
          selectedValue={alignContent}
          values={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
          setSelectedValue={setAlignContent}
        ></PreviewLayout>
      </View>
      <Text
        style={{
          top: -10,
          fontWeight: "bold",
          marginHorizontal: 30,
        }}
      >
        2021 . 05 . 01 - Monday (4)
      </Text>
      <View
        style={{
          backgroundColor: "#ffff",
          width: 380,
          height: 370,
          top: 10,
          marginHorizontal: 20,
          bottom: 120,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowRadius: 2,
          shadowOpacity: 0.5,
          borderRadius: 10,
        }}
      >
        <View style={[styles.number]}>
          <Text style={[styles.numberStyle]}>{"1"}</Text>

          <Text style={[styles.numberStyle]}>{"2"}</Text>

          <Text style={[styles.numberStyle]}>{"3"}</Text>

          <Text style={[styles.numberStyle]}>{"4"}</Text>
        </View>

        <View
          style={{
            marginLeft: 65,
            bottom: 15,
          }}
        >
          <Text
            style={styles.routeItemTitle}
            onPress={() => props.navigation.navigate("OrderItem")}
          >
            Борлуулалт
          </Text>
          <Text style={styles.routeItem1}>Bell Bart,Бирмүүнд холдинг ХХК</Text>
          <Text style={styles.routeItem2}>
            РД: 5927012, Зайсан Номун хотхон
          </Text>
          <View
            style={{
              borderBottomColor: "#bfc2c7",
              borderBottomWidth: 1,
              marginRight: 30,
              top: 40,
            }}
          />
        </View>
        <View
          style={{
            marginLeft: 65,
            bottom: 18,
            top: 30,
          }}
        >
          <Text style={styles.routeItemTitle}>Уулзалт</Text>
          <Text style={styles.routeItem1}>Buba Market, Дөлгөөн дэлэг ХХК</Text>
          <Text style={styles.routeItem2}>
            РД: 6066909, Зайсан Оргил шилтгээн
          </Text>
          <View
            style={{
              borderBottomColor: "#bfc2c7",
              borderBottomWidth: 1,
              marginRight: 30,
              top: 40,
            }}
          />
        </View>
        <View
          style={{
            marginLeft: 65,
            bottom: 18,
            top: 75,
          }}
        >
          <Text style={styles.routeItemTitle}>Борлуулалт</Text>
          <Text style={styles.routeItem1}>
            {" "}
            D Mart , Эгшиг ундрага Трейд ХХК
          </Text>
          <Text style={styles.routeItem2}>
            РД: 6556639,БЗД Үндэсний цэцэрлэгт хүрээлэн{" "}
          </Text>
          <View
            style={{
              borderBottomColor: "#bfc2c7",
              borderBottomWidth: 1,
              marginRight: 30,
              top: 40,
            }}
          />
        </View>

        <View
          style={{
            marginLeft: 65,
            bottom: 18,
            top: 120,
          }}
        >
          <Text style={styles.routeItemTitle}>Борлуулалт</Text>
          <Text style={styles.routeItem1}>
            {" "}
            Сансар супермаркет, Алтан жороо Трейд ХХК
          </Text>
          <Text style={styles.routeItem2}>
            РД: 3526501, Зайсан Номун хотхон
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    top: 20,

    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 0.5,
  },
  box: {
    backgroundColor: "white",
    top: 10,
    width: 100,
    height: 100,
    borderRadius: 10,

    justifyContent: "space-between",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 0.5,
  },
  text: {
    textAlign: "center",
    marginTop: 70,
    fontWeight: "bold",
    fontSize: 10,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    bottom: 60,
  },
  headerText: {
    color: "white",
    fontSize: 18,
    marginVertical: 17,
    fontWeight: "bold",
  },
  headerIcon: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  routeItemTitle: {
    fontSize: 13,
    fontWeight: "bold",
    top: 20,
  },
  routeItem1: {
    fontSize: 11,
    top: 25,
    color: "#2d3033",
  },
  routeItem2: {
    fontSize: 12,
    top: 30,
    color: "#646c73",
  },
  number: {
    flex: 0.1,
    flexDirection: "column",
    left: 30,
    bottom: 22,
  },
  numberStyle: {
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 45,

    color: "#656a73",
  },
  row: {
    flexDirection: "row",
    marginHorizontal: 10,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 11,
    backgroundColor: "white",
    alignSelf: "flex-start",
    marginLeft: 1,
    marginRight: 1,
    minWidth: "12%",
    textAlign: "center",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    shadowOpacity: 0.2,
    borderRadius: 3,
  },
  selected: {
    backgroundColor: "#40a8c4",
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "600",
  },
  selectedLabel: {
    color: "white",
  },
});
