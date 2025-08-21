/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import { Platform, StyleSheet, Image, View, Text } from 'react-native';

function App() {

  return (
    <View>
      <Text style={{ ...styles.textpoc, color: 'orange' }}>TLDR;RN 80 doesn't work with react 18</Text>
      <View style={styles.container}>
        <Text style={styles.textpoc}>POC with rn 80, react 19, rnw 0.21.0 </Text>
        <Image style={styles.image} source={require('./images/dependencies.png')} />


        {Platform.OS === "web" ? (
          <a href="https://github.com/ankitt8/cross-platform-myapp" target="_blank" rel="noopener noreferrer">
            Code link
          </a>
        ) : null}
        {Platform.OS === "web" ? (
          <a href="https://github.com/facebook/react-native/blob/0ef21bf8ad9836ad34f459795e180dd3e34f7618/package.json#L106" target="_blank" rel="noopener noreferrer">
            rn github code same is mentioned as dev dependency in their codebase for rn 80 & greater version
          </a>
        ) : null}
      </View>
      <View style={{ marginTop: 20, width: '100%', ...styles.container }}>
        <Text style={styles.textpoc}>POC with rn 80, react 18, rnw 0.21.0 </Text>
        <Image style={styles.image} source={require('./images/react18.png')} />
        <Text style={styles.text}>rn and rnw starts complaining of peer react version 19 needed, tried to just keep rn 80 and other dependencies like rnw and react dom compatible with react 18 ,still rn 80 will complain it want react 19  </Text>
        <Text style={styles.text}></Text>
        <Image style={styles.image} source={require('./images/error-withreact18.png')} />

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
  textpoc: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  image: {
    width: '70%',
    height: 200,
    margin: 20,
  },
});

export default App;
