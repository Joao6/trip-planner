import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

class TripScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  renderItem = item => {
    return (
      <View style={styles.item}>
        <View style={styles.wrapperInfo}>
          <Text style={styles.itemName}>{item.item.name}</Text>
          <Text style={styles.itemDescription}>{item.item.description}</Text>
        </View>
        <View style={styles.wrapperItemPrice}>
          <Text style={styles.itemPrice}>R$ {item.item.price}</Text>
        </View>
      </View>
    );
  };
  render() {
    const trip = {
      title: "Eurotrip 2019",
      price: 5000,
      places: [
        {
          id: "1",
          name: "Amsterdam",
          description: "Chegada",
          price: 100,
          lat: 0,
          long: 0
        },
        {
          id: "2",
          name: "Bruxelas",
          description: "Hospedagem",
          price: 200,
          lat: 0,
          long: 0
        }
      ]
    };
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View style={styles.backButton}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={require("../../../assets/arrow-left-white.png")} />
            </TouchableOpacity>
          </View>
          <Text style={styles.tripTitle}>{trip.title}</Text>
          <Text
            style={styles.tripPrice}
          >
            R$ {trip.price}
          </Text>
        </View>
        <FlatList
          style={{ flex: 1 }}
          contentContainerStyle={{ padding: 16 }}
          data={trip.places}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

export default TripScreen;
