import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import logo from '../assets/calculator.png';

export default function IntroScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Image source={logo} style={styles.innerImg} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#ff5757',
  },
  inner: {
    backgroundColor: 'inherit',
    width: 100,
    height: 100,
  },
  innerImg: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
});
