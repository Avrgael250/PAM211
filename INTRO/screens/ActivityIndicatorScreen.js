import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function ActivityIndicatorScreen() {
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
        textAlign: 'center',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 10,
    },
    content: {
        fontSize: 18,
        textAlign: 'center',
    }
})