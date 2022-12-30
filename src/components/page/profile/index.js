import React from "react";
import { Image, TouchableOpacity, View, ScrollView, Text } from "react-native";
import { StyleProfile, StyleHome } from "../../../themes";
import { userProfile } from "../../../fakeData";
import { Entypo } from "@expo/vector-icons";
import { FormInput, FormSelect, FormDatePicker } from "../../common/form";
import { GENDER } from "../../../ultils/enum";
import { AntDesign } from "@expo/vector-icons";
import moment from "moment-timezone";

export default function Profile({ navigation }) {
  const [isEditable, setIsEditable] = React.useState(false);
  const [dataSubmit, setDataSubmit] = React.useState({
    name: userProfile.name,
    phone: userProfile.phone,
    address: userProfile.address,
    cardId: userProfile.cardId,
    gender: userProfile.gender,
    role: userProfile.role,
    department: userProfile.department,
    dob: userProfile.dob,
  });

  const handleChangeForm = (key, value) => {
    setDataSubmit({
      ...dataSubmit,
      [`${key}`]: value,
    });
  };

  return (
    <ScrollView style={StyleProfile.container}>
      <Image
        source={
          userProfile.avatar ? { uri: userProfile.avatar } : defaultAvatar
        }
        style={{
          ...StyleHome.userInfo.avatar,
          marginLeft: 150,
          marginTop: 30,
          marginBottom: 0,
        }}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("Update avatar")}
        style={{
          position: "relative",
          bottom: 30,
          width: 30,
          left: 215,
          height: 30,
          borderColor: "white",
          borderRadius: 15,
          borderWidth: 1,
          backgroundColor: "#00CED1",
        }}
      >
        <Entypo
          name="camera"
          size={18}
          color="white"
          style={{
            position: "relative",
            top: 4,
            left: 5,
          }}
        />
      </TouchableOpacity>

      <View
        style={{
          width: "100%",
          height: 30,
          backgroundColor: "#D3D3D3",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            marginLeft: 10,
            marginTop: 8,
            color: "#808080",
          }}
        >
          PERSONAL PROFILE
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginLeft: 20,
        }}
      >
      
        <TouchableOpacity
          style={{
            marginRight: 40,
            marginTop: 10,
            backgroundColor: "#FFB6C1",
            borderRadius: 5,
            width: 100,
            height: 40,
            padding: 5,
            flexDirection: "row",
          }}
          onPress={() => setIsEditable(!isEditable)}
        >
          <AntDesign
            name={isEditable ? "save" : "edit"}
            size={30}
            color="black"
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginLeft: 10,
              marginTop: 4,
            }}
          >
            {isEditable ? "Save" : "Edit"}
          </Text>
        </TouchableOpacity>

        {isEditable && (
          <TouchableOpacity
            style={{
              marginRight: 40,
              marginTop: 10,
              backgroundColor: "#FFB6C1",
              borderRadius: 5,
              width: 150,
              height: 40,
              padding: 5,
              flexDirection: "row",
            }}
            onPress={() => {}}
          >
            <AntDesign name={"idcard"} size={30} col or="black" />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                marginLeft: 10,
                marginTop: 4,
              }}
            >
              Fill by card
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View>
        <FormInput
          label="Full name"
          value={dataSubmit.name}
          editable={isEditable}
          onChangeText={(value) => handleChangeForm("name", value)}
        />

        <FormDatePicker
          label="Date of birth"
          editable={isEditable}
          date={moment(dataSubmit.dob).toDate()}
          onChange={(date) => handleChangeForm("dob", date)}
        />
        <View
          style={{
            flexDirection: "row",
            width: 350,
          }}
        >
          <FormInput
            label="Card ID"
            width={160}
            editable={isEditable}
            value={dataSubmit.cardId}
            onChangeText={(value) => handleChangeForm("cardId", value)}
          />
          <FormSelect
            label="Gender"
            width={160}
            editable={isEditable}
            defaultValue={GENDER.find(
              (gender) => gender.value === dataSubmit.gender
            )}
            option={GENDER}
            onSelect={(value) => handleChangeForm("gender", value)}
          />
        </View>

        <FormInput
          label="Address"
          editable={isEditable}
          value={dataSubmit.address}
          onChangeText={(value) => handleChangeForm("address", value)}
        />

        <FormInput
          label="Phone"
          editable={isEditable}
          value={dataSubmit.phone}
          onChangeText={(value) => handleChangeForm("phone", value)}
        />
      </View>

      <View
        style={{
          width: "100%",
          height: 30,
          backgroundColor: "#D3D3D3",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            marginLeft: 10,
            marginTop: 4,
            color: "#808080",
          }}
        >
          COMPANY PROFILE
        </Text>
      </View>

      <View style={{}}>
        <FormInput
          label="Department"
          value={dataSubmit.department}
          editable={false}
          onChangeText={(value) => handleChangeForm("department", value)}
        />
        <FormInput
          label="Position"
          value={dataSubmit.role}
          editable={false}
          onChangeText={(value) => handleChangeForm("role", value)}
        />
      </View>
    </ScrollView>
  );
}
