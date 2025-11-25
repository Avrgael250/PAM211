import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Alert,
    ActivityIndicator
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@usuarios_db';

export default function App() {
    const [usuarios, setUsuarios] = useState([]);
    const [nombre, setNombre] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        cargarUsuarios();
    }, []);

    const cargarUsuarios = async () => {
        try {
            const data = await AsyncStorage.getItem(STORAGE_KEY);
            const parsed = data ? JSON.parse(data) : [];
            setUsuarios(parsed);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleAgregar = async () => {
        if (!nombre.trim()) return;

        try {
            const nuevoUsuario = {
                id: Date.now(),
                nombre: nombre.trim(),
                fecha_creacion: new Date().toISOString()
            };

            const nuevaLista = [nuevoUsuario, ...usuarios];
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(nuevaLista));
            setUsuarios(nuevaLista);
            setNombre('');
            Alert.alert('Éxito', 'Usuario agregado');
        } catch (error) {
            Alert.alert('Error', 'No se pudo agregar');
        }
    };

    const renderUsuario = ({ item, index }) => (
        <View style={styles.userItem}>
            <View style={styles.userNumber}>
                <Text style={styles.userNumberText}>{index + 1}</Text>
            </View>
            <View style={styles.userInfo}>
                <Text style={styles.userName}>{item.nombre}</Text>
                <Text style={styles.userId}>ID: {item.id}</Text>
                <Text style={styles.userDate}>
                    {new Date(item.fecha_creacion).toLocaleDateString('es-MX', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </Text>
            </View>
        </View>
    );

    if (loading) {
        return (
            <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" color="#2196F3" />
                <Text style={{ marginTop: 10, color: '#666' }}>Cargando...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.formulario}>
                <Text style={styles.titulo}>Agregar Usuario</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Nombre del usuario"
                    value={nombre}
                    onChangeText={setNombre}
                />

                <TouchableOpacity
                    style={styles.botonGuardar}
                    onPress={handleAgregar}
                    disabled={!nombre.trim()}
                >
                    <Text style={styles.botonTexto}>Agregar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.listaContainer}>
                <Text style={styles.subtitulo}>Lista de Usuarios ({usuarios.length})</Text>
                <FlatList
                    data={usuarios}
                    renderItem={renderUsuario}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.lista}
                    ListEmptyComponent={
                        <Text style={styles.emptyText}>No hay usuarios. ¡Agrega el primero!</Text>
                    }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: 50,
    },
    formulario: {
        backgroundColor: 'white',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    subtitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 15,
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 12,
        marginBottom: 15,
        borderRadius: 8,
        fontSize: 16,
    },
    listaContainer: {
        flex: 1,
    },
    lista: {
        padding: 15,
    },
    botonGuardar: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    botonTexto: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    userItem: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    userNumber: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#2196F3',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    userNumberText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    userInfo: {
        flex: 1,
        justifyContent: 'center',
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    userId: {
        fontSize: 14,
        color: '#666',
        marginBottom: 3,
    },
    userDate: {
        fontSize: 12,
        color: '#999',
    },
    emptyText: {
        textAlign: 'center',
        color: '#999',
        fontSize: 16,
        marginTop: 50,
    },
});
