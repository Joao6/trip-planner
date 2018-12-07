import React from "react";
import { View, Text, FlatList } from "react-native";
import Trip from "./Trip";
import styles from "./styles";

class TripsScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  renderItem = item => (
    <Trip
      onPress={() => this.props.navigation.navigate("Trip")}
      title={item.item.title}
      price={item.item.price}
    />
  );

  render() {
    const trips = [
      { id: "1", title: "Eurotrip 2019", price: "4000" },
      { id: "2", title: "Expedição Atacama", price: "5000" }
    ];
    return (
      <View style={styles.wrapperTrips}>
        <View style={{ backgroundColor: "red", flex: 1 }}>
          <Text>Mapa</Text>
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
