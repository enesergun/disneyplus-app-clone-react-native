/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export const Download = () => {
  return (
    <View style={styles.DownloadScreen}>
      <Text>Download</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  DownloadScreen: {
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

/* <?xml version="1.0" ?><svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z"/></svg> */