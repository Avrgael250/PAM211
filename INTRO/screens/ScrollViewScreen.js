import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'

export default function ScrollViewScreen() {
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
    content: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    box: {
        backgroundColor: '#e0e0e0',
        padding: 20,
        marginBottom: 10,
        borderRadius: 5,
    },
    boxText: {
        fontSize: 16,
    }
})