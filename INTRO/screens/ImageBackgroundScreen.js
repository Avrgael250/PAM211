import { Text, StyleSheet, View, ImageBackground, Image } from 'react-native'
import React from 'react'

export default function ImageBackgroundScreen() {
    return (
        <View>
            <Text>Proximamente...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 10,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    text: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    }
})