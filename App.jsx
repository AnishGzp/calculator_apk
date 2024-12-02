import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import IntroScreen from './Views/IntroScreen';
import MainScreen from './Views/MainScreen';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  setTimeout(() => {
    setIsLoaded(true);
  }, 2000);

  return (
    <View style={styles.container}>
      {isLoaded ? <MainScreen /> : <IntroScreen />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
