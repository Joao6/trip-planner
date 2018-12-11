import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import styles from "./styles";

class AddTripScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  handleSaveTrip = async () => {
    const newTrip = {
      id: new Date().getTime(),
      trip: this.state.trip,
      price: 0,
      latitude: 0,
      longitude: 0
    };
    const tripsAs = await AsyncStorage.getItem("trips");
    let trips = [];
    if (tripsAs) {
      trips = JSON.parse(tripsAs);
    }
    trips.push(newTrip);
    await AsyncStorage.setItem("trips", JSON.stringify(trips));
    //this.props.navigation.navigate("AddPoint", { id: newTrip.id });
    this.props.navigation.state.params.refresh();
    this.props.navigation.goBack();
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
        <TextInput
          style={styles.input}
          placeholder="Nome da viagem"
          onChangeText={txt => this.setState({ trip: txt })}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleSaveTrip}>
          <Text>SALVAR</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddTripScreen;
