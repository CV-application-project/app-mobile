import React from "react";
import {
  Image,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { StyleHome, StyleCommon } from "../../../themes";
import { userProfile } from "../../../fakeData";
import defaultAvatar from "../../../../assets/default_avatar.png";
import CalendarItem from "./CalendarItem";
import ActionItem from "./ActionItem";
import { timeTracking } from "../../../fakeData";
import { numberToTime } from "../../../ultils/helper";
export default function Home({navigation}) {
  const [workingTime, setWorkingTime] = React.useState(0);

  const [isCheckedIn, setIsCheckedId] = React.useState(false);
  let id = null;

  React.useEffect(() => {
    if (!isCheckedIn) {
      clearInterval(id);
    } else {
      id = setInterval(() => setWorkingTime((oldCount) => oldCount + 1), 1000);
    }

    return () => {
      setWorkingTime(0);
    };
  }, [isCheckedIn]);

  return (
    <SafeAreaView style={StyleHome.container}>
      <View style={StyleHome.userInfo.container}>
        <Image
          source={userProfile.avatar ? {uri:userProfile.avatar}: defaultAvatar}
          style={StyleHome.userInfo.avatar}
        />
        <View
          style={{
            marginTop: 30,
          }}
        >
          <Text style={StyleHome.userInfo.username}>{userProfile?.name}</Text>
          <Text style={StyleHome.userInfo.role}>{userProfile?.role}</Text>
        </View>
      </View>
      <View style={StyleHome.calendar.container}>
        {timeTracking.map((item, index) => (
          <CalendarItem
            key={index}
            date={item.date}
            checkin={item.checkin}
            checkout={item.checkout}
          />
        ))}
      </View>
      <View style={StyleHome.timeKeeping.container}>
        <View style={StyleHome.timeKeeping.title}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Time Keeping
          </Text>
          <Text style={{ marginLeft: "auto", fontSize: 16 }}>
            {numberToTime(workingTime)}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            ...StyleCommon.button,
            backgroundColor: isCheckedIn ? "#20B2AA" : "#90EE90",
          }}
          onPress={() => setIsCheckedId(!isCheckedIn)}
        >
          <Text
            style={{
              ...StyleCommon.buttonText,
              color: isCheckedIn ? "#800000" : "#8B0000",
            }}
          >
            {isCheckedIn ? "Clock out" : "Clock in"}
          </Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginLeft: 20,
          marginTop: 10,
        }}
      >
        Actions
      </Text>
      <View style={StyleHome.action.container}>
        <ActionItem name="Update profile" icon="smileo" 
          onPress={() => navigation.navigate('Update profile')}
       />
        <ActionItem name="Time tracking" icon="calendar" />
        <ActionItem name="Upload CardID" icon="idcard" 
          onPress={() => navigation.navigate('Uploading Card Instructions')}
        />
        <ActionItem name="Logout" icon="logout" 
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </SafeAreaView>
  );
}
