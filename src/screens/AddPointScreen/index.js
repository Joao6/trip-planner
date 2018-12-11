import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  AsyncStorage
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import styles from "./styles";

class AddPointScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    position: {
      latitude: 37.78825,
      longitude: -122.4324
    },
    pointName: "",
    description: "",
    price: ""
  };

  handleSave = async () => {
    const tripId = this.props.navigation.state.params.id;
    const pointsAs = await AsyncStorage.getItem("trip-" + tripId);
    let points = [];
    if (pointsAs) {
      points = JSON.parse(pointsAs);
    }
    points.push(this.state);
    await AsyncStorage.setItem("trip-" + tripId, JSON.stringify(points));

    let total = 0;
    points.forEach(p => {
      total += p.price;
    });
    const tripsAs = await AsyncStorage.getItem("trips");
    let trips = [];
    if (tripsAs) {
      trips = JSON.parse(tripsAs);
    }

    trips.forEach((trip, index) => {
      if (trip.id === tripId) {
        trips[index].price = total;
        trips[index].latitude = points[0].position.latitude;
        trips[index].longitude = points[0].position.longitude;
      }
    });

    await AsyncStorage.setItem("trips", JSON.stringify(trips));
  };
  render() {
    const tripId = this.props.navigation.state.params.id;
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          >
            <Marker
              coordinate={{
                latitude: 37.78825,
                longitude: -122.4324
              }}
              draggable
              onDragEnd={evt =>
                this.setState({ position: evt.nativeEvent.coordinate })
              }
            />
          </MapView>
          <View style={styles.backButton}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={require("../../../assets/arrow-left-white.png")} />
            </TouchableOpacity>
          </View>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Nome do ponto"
          onChangeText={txt => this.setState({ pointName: txt })}
        />
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          onChangeText={txt => this.setState({ description: txt })}
        />
        <TextInput
          style={styles.input}
          placeholder="Preço"
          onChangeText={txt => this.setState({ price: parseFloat(txt) })}
        />

        <TouchableOpacity style={styles.button} onPress={this.handleSave}>
          <Text>SALVAR</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddPointScreen;
