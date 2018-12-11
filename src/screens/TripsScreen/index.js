import React from "react";
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import Trip from "./Trip";
import styles from "./styles";
import MapView from "react-native-maps";

class TripsScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    trips: []
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    const tripsAs = await AsyncStorage.getItem("trips");
    let trips = [];
    if (tripsAs) {
      trips = JSON.parse(tripsAs);
    }
    this.setState({ trips });
  };

  renderItem = item => (
    <Trip
      onPress={() => this.props.navigation.navigate("Trip", { id: item.item.id })}
      title={item.item.trip}
      price={item.item.price}
    />
  );

  render() {
    const { trips } = this.state;
    return (
      <View style={styles.wrapperTrips}>
        <View style={{ flex: 1 }}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          />
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("AddTrip", {
                refresh: this.loadData
              })
            }
            style={{
              position: "absolute",
              bottom: 16,
              right: 16,
              padding: 10,
              backgroundColor: "#24C6DC"
            }}
          >
            <Image source={require("../../../assets/add.png")} />
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={trips}
            renderItem={this.renderItem}
            horizontal
            pagingEnabled
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  }
}

export default TripsScreen;
