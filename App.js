import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Profile } from './Profile';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.statusBar}></View>
      <Profile></Profile>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
  },
  statusBar: {
    height: 40,
    width: '100%',
  }
});
