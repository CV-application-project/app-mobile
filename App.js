import * as React from "react";
import Login from "./src/components/page/Login";
import Home from "./src/components/page/home";
import Profile from "./src/components/page/profile";
import UpdateAvatar from "./src/components/page/profile/updateAvatar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GuideUploadCard from "./src/components/page/card/GuideUploadCard";
import UploadCard from "./src/components/page/card/uploadCard";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Update profile" component={Profile} />
        <Stack.Screen
          name="Update avatar"
          component={UpdateAvatar}
          options={{ headerBackTitle: "Back" }}
        />
        <Stack.Screen
          name="Uploading Card Instructions"
          component={GuideUploadCard}
          options={{ headerBackTitle: "Back" }}
        />
        <Stack.Screen
          name="Upload Card"
          component={UploadCard}
          options={{ headerBackTitle: "Back" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
