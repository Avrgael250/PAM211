import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, View, ImageBackground, Image, Dimensions } from 'react-native';

export default function ImageScreen({ navigation }) {

    const [showSplash, setShowSplash] = useState(true);
    const Billie = require('../assets/Billie2.jpg')
    useEffect(()=> {
        const timer = setTimeout(()=> {
            setShowSplash(false);
        }, 3000);
        return ()=> clearTimeout(timer);
    }, []);
    if (showSplash) {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../assets/Billie2.jpg')}
                    style={styles.background}
                    resizeMode='cover'
                >
                    <View style={styles.overlay}>
                        <Text style={styles.title}>Bienvenido</Text>
                        <Text style={styles.title}>Cargando...</Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }
    return (
        <ImageBackground
                    source={Billie}
                    style={styles.mainScreen}
                    resizeMode='center'
                >
        <View style={styles.mainScreen}>
            <Text style={styles.mainText}> Bienvenido a la pantalla principal</Text>
            
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
            height: '100%',
        },
        overlay: {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
        },

        title: {
            color: '#ffffff',
            fontSize: 32,
            fontWeight: 'bold',
            marginBottom: 10,
            textAlign: 'center',
        },
        
        mainScreen: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },

        mainText: {
            fontSize: 24,
            color: '#333'
        },

        
})


