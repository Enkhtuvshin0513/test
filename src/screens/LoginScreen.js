import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { withTheme } from "react-native-elements";
import MyInput from "../components/MyInput";
export default function (props) {
  return (
    <View style={{ backgroundColor: "#40a8c4", flex: 1 }}>
      <Image
        style={style.image}
        source={require("../../assets/img/renovation-logo.png")}
      />
      <Text style={style.text}> SALES</Text>
      <View
        style={{
          marginTop: 220,
        }}
      >
        <MyInput
          placeholderTextColor="white"
          placeholder="Нэврэх нэрээ оруулна уу"
        />

        <MyInput
          secureTextEntry={true}
          placeholderTextColor="white"
          placeholder="Нууц үгээ оруулна уу"
        />

        <View style={css.button}>
          <Button
            onPress={() => props.navigation.navigate("Home")}
            title="Нэвтрэх"
            color="#ffff"
          />
        </View>
      </View>
    </View>
  );
}

const css = StyleSheet.create({
  button: {
    paddingVertical: 4,
    marginHorizontal: 40,
    marginTop: 25,
    backgroundColor: "#174772",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#174772",
  },
});
const style = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginHorizontal: 100,
    top: 100,
  },
  text: {
    marginLeft: 160,
    top: 1,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
