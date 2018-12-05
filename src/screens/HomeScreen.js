import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableWithoutFeedback
} from "react-native";

class HomeScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../../assets/background.png")}
        imageStyle={{ resizeMode: "stretch" }}
        style={{
          flex: 1,
          alignItems: "stretch",
          justifyContent: "space-between"
        }}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image source={require("../../assets/logo-tripplanner.png")} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
            paddingBottom: 32
          }}
        >
          <Image source={require("../../assets/logo-devpleno.png")} />
        </View>
        <TouchableWithoutFeedback>
          <View
            style={{
              backgroundColor: "white",
              paddingBottom: 16,
              paddingTop: 16
            }}
          >
            <Text
              style={{ textAlign: "center", fontSize: 24, fontWeight: "400", color: "#24C6DC" }}
            >
              COMEÇAR!
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    );
  }
}

export default HomeScreen;
