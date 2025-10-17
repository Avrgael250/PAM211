import React, { use, useState } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Switch } from 'react-native'

export default function BotonesScreen() {
    const [prendido, setPrendido] = useState(false);
    const backgroundColor = prendido ? '#F5F5F5' : '#121212';
    const textColor = prendido ? '#000' : '#FFF';

    return (
        <View style={[styles.container, {backgroundColor}]}>
            <Text style={[styles.texto, {color: textColor}]}> Estado: {prendido ? 'Prendido' : 'Apagado'} </Text>
            <TouchableOpacity style={styles.botonEncender} onPress={()=> setPrendido(true)}>
                    <Text style={styles.textBotton}>Prender</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botonApagar} onPress={()=> setPrendido(false)}>
                    <Text style={styles.textBotton}>Apagar</Text>
            </TouchableOpacity>

            <View style = {styles.switchContainer}> 
                <Text style = {[styles.switchLaber, {color: textColor}]}> Controles de Switch: </Text>
                <Switch value = {prendido} onValueChange={setPrendido}> </Switch>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4e94f0ff',
    },

    texto: {
        color: '#3b7ad2eb',
        fontSize: 20,
        marginBottom: 30,
        fontWeight: 'bold',
    },

    botonEncender: {
        backgroundColor: '#4CAF50',
        paddingVertical:10,
        paddingHorizontal: 25,
        borderRadius: 8,
        marginBottom: 20,
    },

        botonApagar: {
        backgroundColor: '#d81010ff',
        paddingVertical:10,
        paddingHorizontal: 25,
        borderRadius: 8,
        marginBottom: 20,
    },

    textBotton: {
        color: '#ffffffeb',
        fontWeight: 'bold',
        fontSize: 20,
    },

    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    switchLaber: {
        fontSize: 16,
        marginRight: 10,
    }
})
