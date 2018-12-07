import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

const Trip = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.wrapperTrip}>
      <View style={styles.image}>
        <Text>Image</Text>
      </View>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.price}>R$ {props.price}</Text>
    </TouchableOpacity>
  );
};

export default Trip;
