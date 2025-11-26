import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import UsuarioView from './screens/InsertUsuarioScreen';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <UsuarioView />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
