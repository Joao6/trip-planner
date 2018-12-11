import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 16
  },
  itemName: { fontWeight: "bold", fontSize: 18 },
  itemDescription: { fontSize: 16 },
  wrapperItemPrice: { alignItems: "center", justifyContent: "center" },
  itemPrice: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#24C6DC"
  },
  wrapperInfo: { flex: 1 },
  wrapper: { flex: 1 },
  header: { height: 192, backgroundColor: "grey" },
  backButton: { position: "absolute", top: 12, left: 12, padding: 4 },
  tripTitle: {
    position: "absolute",
    bottom: 16,
    left: 16,
    fontSize: 18,
    color: "white"
  },
  tripPrice: {
    position: "absolute",
    bottom: 16,
    right: 16,
    textAlign: "right",
    backgroundColor: "#24C6DC",
    padding: 4,
    color: "white",
    fontWeight: "bold",
    fontSize: 18
  },
  input: {
    backgroundColor: "#E5E5E5",
    padding: 16,
    marginBottom: 16
  },
  button: {
    backgroundColor: "#E5E5E5",
    padding: 16,
    marginBottom: 16
  }
});

export default styles;
