import React from "react";
import {
    View,
    Text,
    TextInput,
  } from "react-native";
const FormInput = ({ editable = true, name, label, width = 350, ...rest }) => {
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
            <TextInput
                style={{
                    width: width,
                    height: 50,
                    fontSize: 18,
                    padding: 10,
                    marginTop: 10,
                    marginLeft: 10,
                    backgroundColor: !editable ? "#e8e8e8" : "white",
                    borderColor: !editable ? "#e8e8e8" : "#808080",
                    borderWidth: 1,
                }}
                numberOfLines={1}
                editable={editable}
                {...rest}
            />
        </View>
    );
};

export default FormInput;