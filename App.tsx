/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NavHeader} from './components/Header';
import {SignIn} from './components/SignIn';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.app}>
      <NavHeader />
      <SignIn />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
