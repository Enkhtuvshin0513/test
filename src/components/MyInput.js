import React from "react";
import { TextInput, StyleSheet } from "react-native";
export default function (props) {
  return (
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      {...props}
      style={css.inputField}
    />
  );
}
const css = StyleSheet.create({
  inputField: {
    borderBottomColor: "#2c73b1",
    borderBottomWidth: 1,
    marginHorizontal: 40,
    marginVertical: 10,
    padding: 10,
    color: "white",
    fontSize: 18,
  },
});
