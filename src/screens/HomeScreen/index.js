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
  static navigationOptions = {
    header: null
  };
  state = {
    show: false
  };

  handleClick = () => {
    this.setState({ show: !this.state.show });
  };

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
        {!this.state.show ? (
          <TouchableWithoutFeedback onPress={this.handleClick}>
            <View style={styles.buttonBackground}>
              <Text style={styles.buttonText}>COMEÇAR!</Text>
            </View>
          </TouchableWithoutFeedback>
        ) : (
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate("Trips")}
          >
            <View style={styles.buttonEmptyStateBackground}>
              <Image source={assets.pin} style={styles.pin} />
              <Text style={styles.buttonEmptyStateText}>
                Vamos planejar sua primeira viagem?
              </Text>
              <Image source={assets.arrow} style={styles.arrow} />
            </View>
          </TouchableWithoutFeedback>
        )}
      </ImageBackground>
    );
  }
}

export default HomeScreen;
