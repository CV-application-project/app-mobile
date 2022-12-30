import React from "react";
import { TouchableOpacity, View, Text, Button, Image } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { manipulateAsync, FlipType, SaveFormat } from "expo-image-manipulator";

export default function UploadCard() {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [capturedImage, setCapturedImage] = React.useState({
    front: null,
    back: null,
  });
  const [isFrontCard, setIsFrontCard] = React.useState(true);

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
    let photo = await camera.takePictureAsync();
    const formatCard = await manipulateAsync(
      photo.localUri || photo.uri,
      [{ crop: { height: 1400, originX: 300, originY: 1180, width: 1800 } }],
      { compress: 1, format: SaveFormat.JPEG }
    );
    if (isFrontCard) {
      setCapturedImage({ ...capturedImage, front: formatCard });
      setIsFrontCard(false);
    } else {
      setCapturedImage({ ...capturedImage, back: formatCard });
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Camera
        style={{
          flex: 1,
        }}
        ref={(r) => {
          camera = r;
        }}
        type={CameraType.back}
      >
        <View
          style={{
            height: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: 40,
              marginLeft: 40,
            }}
          >
            {capturedImage.front ? (
              <Image
                style={{
                  width: 140,
                  height: 100,
                  borderRadius: 14,
                }}
                source={{ uri: capturedImage.front.uri }}
              />
            ) : (
              <View
                style={{
                  width: 140,
                  height: 100,
                  borderRadius: 14,
                  backgroundColor: "#FAFAD2",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginTop: 35,
                  }}
                >
                  FRONT
                </Text>
              </View>
            )}

            {capturedImage.back ? (
              <Image
                style={{
                  width: 140,
                  height: 100,
                  marginLeft: 40,
                  borderRadius: 14,
                }}
                source={{ uri: capturedImage.back.uri }}
              />
            ) : (
              <View
                style={{
                  width: 140,
                  height: 100,
                  borderRadius: 14,
                  marginLeft: 40,
                  backgroundColor: "#FAFAD2",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginTop: 35,
                  }}
                >
                  BACK
                </Text>
              </View>
            )}
          </View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              position: "absolute",
              top: 180,
              left: 150,
              color: "white",
            }}
          >
            {isFrontCard ? "Front Card" : "Back Card"}
          </Text>
          <Feather
            name="corner-left-down"
            size={30}
            color="white"
            style={{
              position: "absolute",
              top: 245,
              left: 40,
            }}
          />
          <Feather
            name="corner-down-right"
            size={30}
            color="white"
            style={{
              position: "absolute",
              top: 450,
              left: 40,
            }}
          />
          <Feather
            name="corner-right-up"
            size={30}
            color="white"
            style={{
              top: 445,
              left: 340,
              position: "absolute",
            }}
          />
          <Feather
            name="corner-up-left"
            size={30}
            color="white"
            style={{
              position: "absolute",
              left: 340,
              top: 250,
            }}
          />

          {capturedImage.back ? (
            <View
              style={{
                marginTop: "auto",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                style={{
                  marginBottom: 60,
                  marginLeft: 40,
                }}
                onPress={() => {
                  setCapturedImage({ front: null, back: null });
                  setIsFrontCard(true);
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Re-take
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  marginBottom: 60,
                  marginLeft: 200,
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={{
                marginTop: "auto",
                marginBottom: 20,
                marginLeft: 170,
              }}
              onPress={takePicture}
            >
              <Ionicons name="scan-circle-outline" size={80} color="white" />
            </TouchableOpacity>
          )}
        </View>
      </Camera>
    </View>
  );
}
