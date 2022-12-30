import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment-timezone";

const FormDatePicker = ({
  editable = true,
  name,
  label,
  width = 350,
  onChange,
  date,
  ...rest
}) => {
  const [show, setShow] = React.useState(false);
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    onChange(currentDate);
  };

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
      <TouchableWithoutFeedback
        onPress={() => {
          setShow(true);
        }}
      >
        <Text
          style={{
            width: width,
            height: 50,
            fontSize: 18,
            padding: 12,
            marginTop: 10,
            marginLeft: 10,
            backgroundColor: !editable ? "#e8e8e8" : "white",
            borderColor: !editable ? "#e8e8e8" : "#808080",
            borderWidth: 1,
          }}
          editable={editable}
          {...rest}
        >
          {(Platform.OS === "android" || !show) && moment(date).format("DD/MM/YYYY")}
        </Text>
      </TouchableWithoutFeedback>

      {show && (
        <DateTimePicker
          style={{
            position: "relative",
            bottom:45,
            right: 260,
            zIndex: 3,
          }}
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          is24Hour={true}
          onChange={onChangeDate}
        />
      )}
    </View>
  );
};

export default FormDatePicker;
