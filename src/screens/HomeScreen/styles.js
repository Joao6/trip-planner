import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "space-between"
  },
  wrapperLogoTripPlanner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  wrapperLogoDevPleno: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingBottom: 32
  },
  buttonBackground: {
    backgroundColor: "white",
    paddingBottom: 16,
    paddingTop: 16
  },
  buttonText: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "400",
    color: "#24C6DC"
  }
});

export default styles;