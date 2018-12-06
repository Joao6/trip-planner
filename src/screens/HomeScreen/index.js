import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableWithoutFeedback
} from "react-native";

import styles from "./styles";
import assets from "./assets";

class HomeScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={assets.background}
        imageStyle={{ resizeMode: "stretch" }}
        style={styles.background}
      >
        <View style={styles.wrapperLogoTripPlanner}>
          <Image source={assets.tripPlanner} />
        </View>
        <View style={styles.wrapperLogoDevPleno}>
          <Image source={assets.devPleno} />
        </View>
        <TouchableWithoutFeedback>
          <View style={styles.buttonBackground}>
            <Text style={styles.buttonText}>COMEÇAR!</Text>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    );
  }
}

export default HomeScreen;
