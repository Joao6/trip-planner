import { StyleSheet, Dimensions } from "react-native";
const dim = Dimensions.get("window");
const styles = StyleSheet.create({
  wrapperTrip: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "white"
  },
  image: {
    backgroundColor: "pink",
    width: dim.width - 32,
    height: 144,
    marginBottom: 4
  },
  price: {
    position: "absolute",
    top: 144 - 28,
    right: 32,
    textAlign: "right",
    backgroundColor: "#24C6DC",    
    padding: 4,
    color: "white",
    fontWeight: "bold",
    fontSize: 18
  },
  title: {
    fontSize: 18,
    marginBottom: 4
  }
});

export default styles;
