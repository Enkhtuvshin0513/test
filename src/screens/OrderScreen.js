import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const OrderScreen = (props) => {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView>
        <View style={styles.all1}>
          <View style={styles.all2}>
            <Text
              style={styles.textTitle}
              onPress={() => props.navigation.navigate("OrderConfirm")}
            >
              015382 - Bell Mart, Бирмүүнд холдинг ХХК
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View style={styles.all2}>
              <Text style={styles.textStyle1}> Суваг 02 - Дэлгүүр </Text>
              <Text style={styles.textStyle1}> Нийт тоо - 10 </Text>
            </View>
            <View style={styles.all2}>
              <Text style={styles.textStyle2}> Төрөл - Бэлэн </Text>
              <Text style={styles.textStyle2}> Нийт дүн - 640,000 </Text>
            </View>
            <View>
              <Text style={styles.textStatus}> Pending</Text>
              <Text style={styles.textDate}> 2021.04.20</Text>
            </View>
          </View>

          <View
            style={{
              borderBottomColor: "#bfc2c7",
              borderBottomWidth: 1,
              bottom: 2,
            }}
          />
        </View>
        <View style={styles.all1}>
          <View style={styles.all2}>
            <Text style={styles.textTitle}>
              015830 - Buba Маркет, Дөлгөөн дэлэг ХХК
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View style={styles.all2}>
              <Text style={styles.textStyle1}> Суваг 02 - Дэлгүүр </Text>
              <Text style={styles.textStyle1}> Нийт тоо - 24 </Text>
            </View>
            <View style={styles.all2}>
              <Text style={styles.textStyle2}> Төрөл - Бэлэн </Text>
              <Text style={styles.textStyle2}> Нийт дүн - 360,000 </Text>
            </View>
            <View>
              <Text style={styles.textStatus2}> Approved</Text>
              <Text style={styles.textDate}> 2021.04.20</Text>
            </View>
          </View>

          <View
            style={{
              borderBottomColor: "#bfc2c7",
              borderBottomWidth: 1,

              bottom: 2,
            }}
          />
        </View>
        <View style={styles.all1}>
          <View style={styles.all2}>
            <Text style={styles.textTitle}>
              015382 - D Mart, Эгшиг ундрага трейд ХХК
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View style={styles.all2}>
              <Text style={styles.textStyle1}> Суваг 02 - Дэлгүүр </Text>
              <Text style={styles.textStyle1}> Нийт тоо - 10 </Text>
            </View>
            <View style={styles.all2}>
              <Text style={styles.textStyle2}> Төрөл - Бэлэн </Text>
              <Text style={styles.textStyle2}> Нийт дүн - 180,000 </Text>
            </View>
            <View>
              <Text style={styles.textStatus3}> Rejected</Text>
              <Text style={styles.textDate}> 2021.04.20</Text>
            </View>
          </View>

          <View
            style={{
              borderBottomColor: "#bfc2c7",
              borderBottomWidth: 1,
              bottom: 2,
            }}
          />
        </View>
        <View style={styles.all1}>
          <View style={styles.all2}>
            <Text style={styles.textTitle}>
              015382 - E card-2 дэлгүүр, Би И Си ЭЛ ХХК
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View style={styles.all2}>
              <Text style={styles.textStyle1}> Суваг 02 - Дэлгүүр </Text>
              <Text style={styles.textStyle1}> Нийт тоо - 20 </Text>
            </View>
            <View style={styles.all2}>
              <Text style={styles.textStyle2}> Төрөл - Бэлэн </Text>
              <Text style={styles.textStyle2}> Нийт дүн - 240,000 </Text>
            </View>
            <View>
              <Text style={styles.textStatus}> Pending</Text>
              <Text style={styles.textDate}> 2021.04.20</Text>
            </View>
          </View>

          <View
            style={{
              borderBottomColor: "#bfc2c7",
              borderBottomWidth: 1,
              bottom: 2,
            }}
          />
        </View>
        <View style={styles.all1}>
          <View style={styles.all2}>
            <Text style={styles.textTitle}>
              013586 - E Market, Дэвжих буудай ХХК
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View style={styles.all2}>
              <Text style={styles.textStyle1}> Суваг 02 - Дэлгүүр </Text>
              <Text style={styles.textStyle1}> Нийт тоо - 10 </Text>
            </View>
            <View style={styles.all2}>
              <Text style={styles.textStyle2}> Төрөл - Бэлэн </Text>
              <Text style={styles.textStyle2}> Нийт дүн - 640,000 </Text>
            </View>
            <View>
              <Text style={styles.textStatus}> Pending</Text>
              <Text style={styles.textDate}> 2021.04.20</Text>
            </View>
          </View>

          <View
            style={{
              borderBottomColor: "#bfc2c7",
              borderBottomWidth: 1,

              bottom: 2,
            }}
          />
        </View>
        <View style={styles.all1}>
          <View style={styles.all2}>
            <Text style={styles.textTitle}>
              015382 - Elizabeth супермаркет, Нэмч трейд ХХК
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View style={styles.all2}>
              <Text style={styles.textStyle1}> Суваг 02 - Дэлгүүр </Text>
              <Text style={styles.textStyle1}> Нийт тоо - 10 </Text>
            </View>
            <View style={styles.all2}>
              <Text style={styles.textStyle2}> Төрөл - Бэлэн </Text>
              <Text style={styles.textStyle2}> Нийт дүн - 640,000 </Text>
            </View>
            <View>
              <Text style={styles.textStatus}> Pending</Text>
              <Text style={styles.textDate}> 2021.04.20</Text>
            </View>
          </View>

          <View
            style={{
              borderBottomColor: "#bfc2c7",
              borderBottomWidth: 1,

              bottom: 2,
            }}
          />
        </View>
        <View style={styles.all1}>
          <View style={styles.all2}>
            <Text style={styles.textTitle}>
              014404 - Full Market, Арвижах өлгий ХХК
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View style={styles.all2}>
              <Text style={styles.textStyle1}> Суваг 02 - Дэлгүүр </Text>
              <Text style={styles.textStyle1}> Нийт тоо - 36 </Text>
            </View>
            <View style={styles.all2}>
              <Text style={styles.textStyle2}> Төрөл - Бэлэн </Text>
              <Text style={styles.textStyle2}> Нийт дүн - 480,000 </Text>
            </View>
            <View>
              <Text style={styles.textStatus2}> Approved</Text>
              <Text style={styles.textDate}> 2021.04.20</Text>
            </View>
          </View>

          <View
            style={{
              borderBottomColor: "#bfc2c7",
              borderBottomWidth: 1,
              bottom: 2,
            }}
          />
        </View>
        <View style={styles.all1}>
          <View style={styles.all2}>
            <Text style={styles.textTitle}>
              014404 - Full Market, Арвижах өлгий ХХК
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View style={styles.all2}>
              <Text style={styles.textStyle1}> Суваг 02 - Дэлгүүр </Text>
              <Text style={styles.textStyle1}> Нийт тоо - 36 </Text>
            </View>
            <View style={styles.all2}>
              <Text style={styles.textStyle2}> Төрөл - Бэлэн </Text>
              <Text style={styles.textStyle2}> Нийт дүн - 480,000 </Text>
            </View>
            <View>
              <Text style={styles.textStatus2}> Approved</Text>
              <Text style={styles.textDate}> 2021.04.20</Text>
            </View>
          </View>

          <View
            style={{
              borderBottomColor: "#bfc2c7",
              borderBottomWidth: 1,
              bottom: 2,
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  all1: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  all2: {
    paddingBottom: 10,
    marginRight: 35,
  },
  textTitle: {
    fontWeight: "600",
    fontSize: 13,
  },
  textStyle1: {
    fontSize: 11,
    color: "#757c8a",
    paddingBottom: 5,
  },
  textStyle2: {
    fontSize: 11,
    color: "#757c8a",
    paddingBottom: 5,
  },

  textStatus: {
    fontSize: 12,
    color: "#e8df27",
    fontWeight: "bold",
    marginLeft: 20,
    bottom: 12,
  },
  textStatus2: {
    fontSize: 12,
    color: "#2aa193",
    fontWeight: "bold",
    marginLeft: 10,
    bottom: 12,
  },
  textStatus3: {
    fontSize: 12,
    color: "#e32b56",
    fontWeight: "bold",
    marginLeft: 20,
    bottom: 12,
  },
  textDate: {
    fontSize: 12,
    color: "#1c1c1f",
    fontWeight: "bold",
  },
});
