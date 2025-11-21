import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Detalles() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalles Usuario</Text>
            <Text style={styles.subtitle}>Usando Navegacion Stack</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#000',
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        color: '#4285F4',
    },
});
