import React from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Dropdown from "../DropDown";
const FormSelect = ({
  name,
  label,
  width = 350,
  option = [],
  ...rest
}) => {
  return (
    <View
      style={{
        margin: 12,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          marginLeft: 10,
          fontWeight: "bold",
        }}
      >
        {label}
      </Text>

      <Dropdown label="Chose gender" data={option} {...rest} />
    </View>
  );
};

export default FormSelect;
