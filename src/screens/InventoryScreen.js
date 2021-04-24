import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";

export default class testScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HeadTable: ["Aгуулах", "Үлд", "ХУ/Үлд", "Бол/Үлд", "Үнэ"],
      DataTable: [
        ["001", "100", "15", "95", "2742"],
        ["002", "50", "0", "50", "1980"],
      ],
    };
  }

  render() {
    const state = this.state;
    return (
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <View style={styles.container}>
          <Text> 01307 - Kaltenberg Bottle 0.5L/Dunkel </Text>

          <View style={styles.Names}>
            <Text style={styles.textItemName}> Бар код - 10002353012 </Text>
            <Text style={styles.textItemName2}> Үндсэн х.н - Ширхэг </Text>
          </View>
          <View style={styles.Names}>
            <Text style={styles.textItemName3}> Барaaны ангилал - Ус </Text>
            <Text style={styles.textItemName4}> Борлуулалтын х.н - Авдар </Text>
          </View>

          <Table borderStyle={{ borderWidth: 0.01, borderColor: "#ffffff" }}>
            <Row
              data={state.HeadTable}
              style={styles.HeadStyle}
              textStyle={styles.TableText}
            />
            <Rows data={state.DataTable} textStyle={styles.TableText} />
          </Table>
        </View>
        <View style={styles.container2}>
          <Text> 01307 - Kaltenberg Bottle 0.5L/Dunkel </Text>

          <View style={styles.Names}>
            <Text style={styles.textItemName}> Бар код - 10002353012 </Text>
            <Text style={styles.textItemName2}> Үндсэн х.н - Ширхэг </Text>
          </View>
          <View style={styles.Names}>
            <Text style={styles.textItemName3}> Барaaны ангилал - Ус </Text>
            <Text style={styles.textItemName4}> Борлуулалтын х.н - Авдар </Text>
          </View>
          <Table borderStyle={{ borderWidth: 0.1, borderColor: "#ffffff" }}>
            <Row
              data={state.HeadTable}
              style={styles.HeadStyle}
              textStyle={styles.TableText}
            />
            <Rows data={state.DataTable} textStyle={styles.TableText} />
          </Table>
        </View>
        <View style={styles.container3}>
          <Text> 01307 - Kaltenberg Bottle 0.5L/Dunkel </Text>

          <View style={styles.Names}>
            <Text style={styles.textItemName}> Бар код - 10002353012 </Text>
            <Text style={styles.textItemName2}> Үндсэн х.н - Ширхэг </Text>
          </View>
          <View style={styles.Names}>
            <Text style={styles.textItemName3}> Барaaны ангилал - Ус </Text>
            <Text style={styles.textItemName4}> Борлуулалтын х.н - Авдар </Text>
          </View>
          <Table borderStyle={{ borderWidth: 0.01, borderColor: "#ffffff" }}>
            <Row
              data={state.HeadTable}
              style={styles.HeadStyle}
              textStyle={styles.TableText}
            />
            <Rows data={state.DataTable} textStyle={styles.TableText} />
          </Table>
        </View>
        <View style={styles.container4}>
          <Text> 01307 - Kaltenberg Bottle 0.5L/Dunkel </Text>

          <View style={styles.Names}>
            <Text style={styles.textItemName}> Бар код - 10002353012 </Text>
            <Text style={styles.textItemName2}> Үндсэн х.н - Ширхэг </Text>
          </View>
          <View style={styles.Names}>
            <Text style={styles.textItemName3}> Барaaны ангилал - Ус </Text>
            <Text style={styles.textItemName4}> Борлуулалтын х.н - Авдар </Text>
          </View>
          <Table borderStyle={{ borderWidth: 0.01, borderColor: "#ffffff" }}>
            <Row
              data={state.HeadTable}
              style={styles.HeadStyle}
              textStyle={styles.TableText}
            />
            <Rows data={state.DataTable} textStyle={styles.TableText} />
          </Table>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 25,
    top: 15,
  },
  container2: {
    padding: 20,
    bottom: 5,
  },
  container3: {
    padding: 20,
    bottom: 25,
  },
  container4: {
    padding: 20,
    bottom: 40,
  },
  HeadStyle: {
    height: 40,
    alignContent: "center",
    backgroundColor: "#dee0e3",
    borderRadius: 3,
  },
  TableText: {
    margin: 10,
    color: "#1d1d27",
  },
  textTitle: {
    bottom: 10,
    fontSize: 16,
    fontWeight: "500",
  },
  Names: {
    flexDirection: "row",
    bottom: 10,
  },

  textItemName: {
    fontSize: 12,
    color: "#606469",
    marginTop: 20,
  },
  textItemName2: {
    fontSize: 12,
    marginTop: 20,
    color: "#606469",
    marginLeft: 50,
  },
  textItemName3: {
    fontSize: 12,
    marginTop: 10,
    color: "#606469",
  },
  textItemName4: {
    fontSize: 12,
    marginTop: 10,
    color: "#606469",
    marginLeft: 60,
  },
});
