import { Text, StyleSheet, View, Button, Alert, TextInput, Platform } from 'react-native'
import React, { Component, useState } from 'react'

export default function TextInputScreen () {

    const [nombre, setNombre] = useState('');
    const [contraseña, setPassword] = useState('');
    const [comentario, setComentario] = useState('');

    const mostrartAlerta = () => {
    if ((nombre.trim()==='') || (comentario.trim()==='') || (contraseña.trim()==='')) {
        if (Platform.OS === 'web') {
            window.alert ('Error: por favor ingresa tu nombre, comentario y contraseña');
        }else {
            Alert.alert ('Error: por favor ingresa tu nombre, comentario y contraseña')
        }}
        else {
            if (Platform.OS === 'web') {
                window.alert(`Hola ${nombre}`);
            }else {
                Alert.alert(`Hola ${nombre}`);
            }
        }}

    return (
    <View style={styles.container}>
        <Text style={styles.titulo}> TextInputScreen </Text>

        <TextInput
        style={styles.recuadro} placeholder='Escribe tu nombre' value ={nombre} onChangeText={setNombre} maxLength={50}
        />
        <TextInput
        style={styles.recuadro} placeholder='Escribe tu contraseña' value ={contraseña} onChangeText={setPassword} secureTextEntry= {true} keyboardType='numeric' maxLength={50}
        />
        <TextInput
        style={styles.recuadro} placeholder='Escribe tu comentario' value ={comentario} onChangeText={setComentario} maxLength={200}
        />

        <Button color='grey' title='Mostrar saludo' onPress={mostrartAlerta}/>
    </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffffff',
        padding: 20,
    },

    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
    },

    recuadro: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginBottom: 20,
    },

})