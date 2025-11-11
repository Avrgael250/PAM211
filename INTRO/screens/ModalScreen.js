import { Text, StyleSheet, View, Modal, Button } from 'react-native'
import React, { useState } from 'react'

export default function ModalScreen() {

    const [modalVisible, setModalVisible ] = useState(false);

    return (
        <View style={styles.container}>
            <Button title='Mostrar modal' onPress={()=> setModalVisible(true)} color='green'>
            </Button>

            <Modal 
            animationType='fade'
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.textoModal}> No soy un modal </Text>

                        <Button title='Ocultar modal' onPress={()=> setModalVisible(false)} color='red'>

                        </Button>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c9c9c9'
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#c9c9c9'
    },

    modalContent: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 25,
        borderRadius: 15,
        alignItems: 'center',
    },

    textoModal: {
        backgroundColor: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
    },
});