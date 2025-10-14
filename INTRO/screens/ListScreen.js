import { Text, StyleSheet, View, FlatList, SectionList } from 'react-native'
import React from 'react'

export default function ListScreen() {
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
    subtitle: {
        fontSize: 18,
        marginVertical: 10,
        fontWeight: 'bold',
    },
    item: {
        backgroundColor: '#f9f9f9',
        padding: 15,
        marginVertical: 5,
        borderRadius: 5,
    },
    sectionHeader: {
        backgroundColor: '#e0e0e0',
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
    }
})