/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import { Platform, StyleSheet, useColorScheme, View, Text } from 'react-native';

function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>POC with rn 80, react 19, rnw 0.21.0 </Text>


      {Platform.OS === "web" ? (
        <a href="https://github.com/ankitt8/cross-platform-myapp" target="_blank" rel="noopener noreferrer">
          Code link
        </a>
      ) : null}

      <View style={{ marginTop: 20, background: 'red' }}>
        <Text style={styles.text}>POC with rn 80, react 18, rnw 0.21.0 </Text>
        <Text style={styles.text}>rn and rnw starts complaining of peer react version 19 needed </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  text: {
    fontSize: 20,
  },
});

export default App;
