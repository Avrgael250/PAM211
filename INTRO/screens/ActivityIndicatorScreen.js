import { Text, StyleSheet, View, Alert, Platform, ActivityIndicator, Button } from 'react-native'
import React, { useState } from 'react'

export default function ActivityIndicatorScreen() {

    const [cargando, setCargando] = useState(false);
    const carga =()=> {

        setCargando(true);
        setTimeout(()=> {
            setCargando(false);

            if(Platform.OS === 'web') {
                window.alert('Carga completa');
            } else{
                Alert.alert('Carga completa');
            }
        }, 3000);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.texto}> Presione para iniciar la carga</Text>
            <View style={styles.botonesContainer}> 
                {cargando ? (<ActivityIndicator size='large' color='black'></ActivityIndicator>): (<Button color='green' title='Presione para iniciar' onPress={carga}></Button>)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C9C9C9',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    texto: {
        color: '#296822ff',
        fontSize: 30,
        fontFamily: 'Thor',
        fontStyle: 'italic',
        fontWeight: 'bold',
    },

    botonesContainer: {
        marginTop: 20,
        gap: 20,
    },

    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
})