import { StyleSheet, Text, View, SectionList, ImageBackground, Image, Dimensions} from 'react-native';
import React, { useEffect, useState } from 'react';

export default function App() {

  const [showSplash, setShowSplash] = useState(true);
  const food = require('../Examen2doP/assets/restaurante.webp');


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      
    }, 3000);
    return ()=> clearTimeout(timer);
  }, []);

  if(showSplash) {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../Examen2doP/assets/restaurante.webp')}
        style={styles.background}
        resizeMode = 'cover'>

          <View style={styles.overlay}>
            <Text style={styles.titulo}> Bienvenido a Ratatui </Text>
          </View>
        </ImageBackground>
      </View>

    );
  }
  return (
    <ImageBackground
    source={restaurante}
    style={styles.mainScreen}
    resizeMode='cover'
    >

      <View style={styles.mainScreen}>
        <Text style={styles.mainText}> El Ratatui </Text>
        <Text style={styles.mainText}> Restaurante de 5 estrellas michelin </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    flex: 1,
    width: '100%',
    height: '100%'
  },

  overlay: {
    flex: 1
  },

  titulo: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },

  mainText: {
    fontSize: 34,
    color: '#000000ff',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
