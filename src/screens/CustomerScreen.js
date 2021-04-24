import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

const CustomerScreen = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text onPress={() => props.navigation.navigate("CustomerInformation")}>
          +
        </Text>
        <SectionList
          sections={[
            {
              title: "A",
              data: [
                "018862-A Mart,Их алтан булаг ХХК",
                "014531-AT mart, БИ СИ ХИ ХХК",
              ],
            },
            {
              title: "B",
              data: [
                "015382-Bell Mart, Бирмүүд холдинг ХХК",
                "018556-Buba market, Дөлгөөн дэлэг ХХК",
                "018556- B Mart, Эх булаг ХХК",
              ],
            },
            {
              title: "C",
              data: [
                "017254- CU twin tower ,“Сэнтрал Экспресс Си Ви Эс” ХХК",
                "017254-D Mart, Эгшиг ундрах трейд  ХХК",
              ],
            },
            {
              title: "D",
              data: [
                "017254-D Mart, Эгшиг ундрах трейд  ХХК",
                "017254-Dalai eej mini market , Эгшиг ундрах трейд  ХХК",
                "017254- Dudu super market , Эгшиг ундрах трейд  ХХК",
              ],
            },
            {
              title: "E",
              data: ["017254- EMart Chinggis, Скай Хайпермаркет ХХК "],
            },
            {
              title: "G",
              data: [
                "017254-G Mart, Эгшиг ундрах трейд  ХХК",
                "017254-Galt Market, Эгшиг ундрах трейд  ХХК",
              ],
            },

            {
              title: "H",
              data: [
                "017254-H Mart, Эгшиг ундрах трейд  ХХК",
                "017254-I Mart, Эгшиг ундрах трейд  ХХК",
                "017254-I Mart, Эгшиг ундрах трейд  ХХК",
              ],
            },
            {
              title: "I",
              data: [
                "017254-I Mart, Эгшиг ундрах трейд  ХХК",
                "017254-I Mart, Эгшиг ундрах трейд  ХХК",
                "017254-I Mart, Эгшиг ундрах трейд  ХХК",
                "017254-I Mart, Эгшиг ундрах трейд  ХХК",
              ],
            },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    </View>
  );
};

export default CustomerScreen;
const styles = StyleSheet.create({
  container: {
    top: 1,
    marginHorizontal: 20,
    paddingTop: 15,
    marginHorizontal: 20,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 0.1,
  },
  sectionHeader: {
    paddingTop: 7,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    height: 35,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "#dee0e3",
  },
  item: {
    padding: 10,
    fontSize: 13,
    height: 50,
  },
});
