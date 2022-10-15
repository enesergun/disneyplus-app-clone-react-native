/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export const Home = () => {
  return (
    <View style={styles.homeScreen}>
      <Text>home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    marginTop: 30,
    /* backgroundColor: '#fff', */
  },
  header: {
    height: 44,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingBottom: 4,
  },
  navigations: {
    flexDirection: 'row',
  },
  button: {
    marginRight: 10,
  },
});
