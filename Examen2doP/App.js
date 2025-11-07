import { StyleSheet, Text, View, SectionList, ImageBackground, Image, Dimensions} from 'react-native';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-web';

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
            <Text style={styles.title}> Bienvenido a Ratatui </Text>
          </View>
        </ImageBackground>
      </View>

    );
  }
  return (
    <ImageBackground
    source={food}
    style={styles.mainScreen}
    resizeMode='cover'
    >
      <Text style={styles.titulo}> Ratatui </Text>
      <Text style={styles.subtitulo}> Restaurante con 5 estrellas michelin </Text>
                <View style={styles.container}>
            <ScrollView style={styles.scrollArea} contentContainerStyle={styles.content} showsHorizontalScrollIndicator = {true}>

              <Text style={styles.comida}> Pambazo </Text>
              <Text style={styles.descripcion}> Torta bañada en salsa roja llamada pambazo, asi se llama, no guajolote</Text>

              
              <Text style={styles.comida}> Enchiladas verdes </Text>
              <Text style={styles.descripcion}> Tortilla bañada en salsa verde y con qeuso dentro y/o pollo</Text>

                            <Text style={styles.comida}> Tacos de basura </Text>
              <Text style={styles.descripcion}> Solo tiene basura jaja</Text>
            </ScrollView>
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
    flex: 1,
    overlay: '#000000ff',
    padding: 20,
  },

  titulo: {
    color: '#c62727ff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },

    title: {
    color: '#d03333ff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },

  subtitulo: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },

  comida: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#10a4daff',
    textAlign: 'center',
    marginBottom: 20,
  },

  descripcion: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00ffd5ff',
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 15,
    padding: 10,
  },

  mainScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  mainText: {
    fontSize: 34,
    color: '#000000ff',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
