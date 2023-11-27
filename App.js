import { StatusBar } from "expo-status-bar";
import {
  Button,
  PermissionsAndroid,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app</Text>
      <Text>Here's another text</Text>
      <Text>Also another</Text>
      <Button title="Request SCAN" onPress={requestBLEscanPermission} />
      <Button title="Request ADVERTISE" onPress={requestBLEadvPermission} />
      <Button title="Request CONNECT" onPress={requestBLEconPermission} />
      <StatusBar style="auto" />
    </View>
  );
}
const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Can I open the get location for fun?",
        message: "It is for testing the code, plzzzzz",
        buttonPositive: "OK",
        buttonNeutral: "Maybe later",
        buttonNegative: "Cancel",
      }
    );
    console.log(
      granted
    );
  } catch (error) {
    console.error(error);
    console.log(
      granted
    );
  } 
};
const requestBLEscanPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
      {
        title: "Can I open the scan blueetooth for fun?",
        message: "It is for testing the code, plzzzzz",
        buttonPositive: "OK",
        buttonNeutral: "Maybe later",
        buttonNegative: "Cancel",
      }
    );
    console.log(
      granted
    );
  } catch (error) {
    console.error(error);
    console.log(
      granted
    );
  } 
};
const requestBLEadvPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_ADVERTISE,
      {
        title: "Can I open the scan blueetooth for fun?",
        message: "It is for testing the code, plzzzzz",
        buttonPositive: "OK",
        buttonNeutral: "Maybe later",
        buttonNegative: "Cancel",
      }
    );
    console.log(
      granted
    );
  } catch (error) {
    console.error(error);
    console.log(
      granted
    );
  } 
};
const requestBLEconPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
      {
        title: "Can I open the scan blueetooth for fun?",
        message: "It is for testing the code, plzzzzz",
        buttonPositive: "OK",
        buttonNeutral: "Maybe later",
        buttonNegative: "Cancel",
      }
    );
    console.log(
      granted
    );
  } catch (error) {
    console.error(error);
    console.log(
      granted
    );
  } 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffc",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
