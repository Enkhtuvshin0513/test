import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";

const DeliveryScreen = (props) => {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.all1}>
        <View style={styles.all2}>
          <Text
            style={styles.textTitle}
            onPress={() => props.navigation.navigate("DeliveryItem")}
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
    </View>
  );
};

export default DeliveryScreen;

const styles = StyleSheet.create({
  all1: {
    marginTop: 30,
    marginHorizontal: 25,
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

  textDate: {
    fontSize: 11,
    color: "#1c1c1f",
    fontWeight: "bold",
    top: 18,
  },
});
