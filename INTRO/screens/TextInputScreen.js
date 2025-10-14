import { Text, StyleSheet, View, TextInput, Alert, Button } from 'react-native'
import React, { useState } from 'react'

export default function TextInputScreen() {
    return (
        <View>
            <Text>Proximamente...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
    }
})