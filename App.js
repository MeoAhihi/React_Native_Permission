import { StatusBar } from 'expo-status-bar';
import { Button, PermissionsAndroid, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Here's another text</Text>
      <Text>Also another</Text>
      <Button title="Request Permission" onPress={requestCameraPermission}/>
      <StatusBar style="auto" />
    </View>
  );
}

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "Can I open the camera for fun?",
        message: "It is for testing the code, plzzzzz"
      }
    )
  } catch (error) {
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
