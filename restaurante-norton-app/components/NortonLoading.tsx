import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import LottieView from 'lottie-react-native';

const { width } = Dimensions.get('window');

const COR_NORTON = '#FF6B00';

export default function NortonLoading() {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/Restaurant website Pre loader.json')} 
        autoPlay
        loop
        style={styles.lottie}
      />
      <Text style={styles.texto}>A carregar sabores...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', 
  },
  lottie: {
    width: width * 0.7, 
    height: width * 0.7,
  },
  texto: {
    marginTop: 20,
    fontSize: 16,
    color: COR_NORTON, 
    fontWeight: 'bold',
  }
});
