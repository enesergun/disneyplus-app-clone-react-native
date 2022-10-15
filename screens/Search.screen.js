/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export const Search = () => {
  return (
    <View style={styles.searchScreen}>
      <Text>search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchScreen: {
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
