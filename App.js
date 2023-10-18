import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Here's another text</Text>
      <Text>Also another</Text>
      <Button title="Request Permission" onPress={sayHello}/>
      <StatusBar style="auto" />
    </View>
  );
}

const sayHello = () => {
  alert("Hello there! How are you?")
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
