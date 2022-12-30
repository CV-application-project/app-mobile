import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Button,
  ImageBackground,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";

const CameraPreview = ({ photo }) => {
  return (
    <View
      style={{
        backgroundColor: "transparent",
        flex: 1,
        width: "100%",
        height: "100%",
      }}
    >
      <ImageBackground
        source={{ uri: photo && photo.uri }}
        style={{
          flex: 1,
        }}
      />
    </View>
  );
};

export default function UpdateAvatar() {
  const [cameraType, setCameraType] = React.useState(CameraType.front);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [capturedImage, setCapturedImage] = React.useState(null);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  let camera;

  const takePicture = async () => {
    if (!camera) return;
    const photo = await camera.takePictureAsync();
    setCapturedImage(photo);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      {capturedImage ? (
        <CameraPreview photo={capturedImage} />
      ) : (
        <Camera
          style={{
            flex: 1,
          }}
          ref={(r) => {
            camera = r;
          }}
          type={cameraType}
        />
      )}

      <View
        style={{
          flexDirection: "row",
          backgroundColor: "white",
          padding: 10,
          height: 100,
        }}
      >
        <TouchableOpacity
          style={{
            alignSelf: "center",
            marginLeft: 10,
          }}
          onPress={() => {
            setCapturedImage(null);
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "black",
            }}
          >
            Re-take
          </Text>
        </TouchableOpacity>

        {capturedImage ? (
          <TouchableOpacity
            style={{
              alignSelf: "center",
              marginHorizontal: 90,
            }}
            onPress={() => {
              setCapturedImage(null);
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "black",
              }}
            >
              Save
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              marginHorizontal: 80,
            }}
            onPress={takePicture}
          >
            <Ionicons name="scan-circle-outline" size={80} color="black" />
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={{
            alignSelf: "center",
          }}
          onPress={() => {
            setCameraType((current) =>
              current === CameraType.back ? CameraType.front : CameraType.back
            );
          }}
        >
          <Ionicons name="camera-reverse-outline" size={40} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
