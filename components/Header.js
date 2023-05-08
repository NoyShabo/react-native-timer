import {Image, StyleSheet, Text, View} from 'react-native';

export function NavHeader() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.textHeader}>My Timer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
    borderBottomColor: '#999498',
    borderBottomWidth: 0.5,
    // boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)', ask about it
  },
  logo: {
    width: 50,
    height: 50,
    position: 'absolute',
    left: 10,
  },
  textHeader: {
    color: '#000',
    fontWeight: '800',
    fontSize: 36,
  },
});
