import React from "react";
import {
  Image,
  SafeAreaView,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import sampleCard from "../../../../assets/sample_card.png";
export default function GuideUploadCard({ navigation }) {
  return (
    <SafeAreaView
      style={{
        marginLeft: 20,
      }}
    >
      <View
        style={{
          width: 120,
          height: 120,
          borderRadius: 60,
          backgroundColor: "#6495ED",
          marginLeft: 110,
          marginTop: 30,
          marginBottom: 30,
        }}
      >
        <FontAwesome
          name="id-card-o"
          size={60}
          color="#00FFFF"
          style={{
            padding: 25,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          width: 250,
          marginBottom: 20,
        }}
      >
        <View
          style={{
            borderWidth: 1,
            width: 120,
            height: 100,
            paddingLeft: 20,
            paddingTop: 8,
            backgroundColor: "#6495ED",
            borderColor: "#6495ED",
          }}
        >
          <Image
            source={sampleCard}
            style={{
              width: 80,
              height: 80,
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginLeft: 30,
            marginTop: 30,
          }}
        >
          The identification card is still valid.
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          width: 250,
          marginBottom: 20,
        }}
      >
        <View
          style={{
            borderWidth: 1,
            width: 120,
            height: 100,
            paddingLeft: 20,
            paddingTop: 8,
            backgroundColor: "#6495ED",
            borderColor: "#6495ED",
          }}
        >
          <Feather
            name="corner-left-down"
            size={15}
            color="black"
            style={{
              position: "absolute",
              top: 8,
              left: 10,
            }}
          />
          <Feather
            name="corner-down-right"
            size={15}
            color="black"
            style={{
              position: "absolute",
              top: 75,
              left: 10,
            }}
          />
          <Feather
            name="corner-right-up"
            size={15}
            color="black"
            style={{
              top: 75,
              left: 96,
              position: "absolute",
            }}
          />
          <Feather
            name="corner-up-left"
            size={15}
            color="black"
            style={{
              position: "absolute",
              left: 92,
              top: 8,
            }}
          />
          <Image
            source={sampleCard}
            style={{
              width: 80,
              height: 80,
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginLeft: 30,
            marginTop: 10,
          }}
        >
          The image should be placed in the required place.
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          width: 250,
          marginBottom: 20,
        }}
      >
        <View
          style={{
            borderWidth: 1,
            width: 120,
            height: 100,
            paddingLeft: 20,
            paddingTop: 8,
            backgroundColor: "#6495ED",
            borderColor: "#6495ED",
          }}
        >
          <ImageBackground
            source={sampleCard}
            style={{
              width: 80,
              height: 80,
            }}
          >
            <View
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                width: "100%",
                height: "70%",
                marginTop: 12,
              }}
            />
          </ImageBackground>
        </View>

        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginLeft: 30,
            marginTop: 20,
          }}
        >
          The images must be of high quality.
        </Text>
      </View>

      <TouchableOpacity
        style={{
          width: 200,
          height: 60,
          borderRadius: 20,
          alignItems: "center",
          backgroundColor: "#00BFFF",
          marginLeft: 80,
          marginTop: 20
        }}
        onPress={() => navigation.navigate('Upload Card')}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            paddingTop: 15,
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
