//1. Imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React ,{useState} from 'react';

//2. Main: Zona de componentes
export default function ContadorScreen() {

    const [contador, setContador] = useState(0);

    return (

    <View style={styles.container}>

    <Text style={styles.texto} > Contador: </Text>
    <Text style={styles.texto2} > {contador} </Text>

    <View style={styles.botonesContainer}>
    <Button color= 'purple' title='Agregar' onPress={()=>setContador(contador+1)} />
    <Button color= 'green' title='Quitar' onPress={()=>setContador(contador-1)} />
    <Button color= 'orange' title='Reiniciar' onPress={()=>setContador(0)} />
    </View>

    <StatusBar style="auto" />

    </View>
    );
}

//3. Estilos: Zona estetica para componentes
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#adadadff',
        alignItems: 'center', // Cambia la poición X del botón
        justifyContent: 'center', // Cambia la posición Y del botón
    },

    texto:{
        color:'#bbff45ff',
        fontSize:40, // Tamaño de la fuente
        fontFamily: 'Thor', // Tipografía
        fontWeigth:'300',
        fontStyle: 'italic',// Negrita
        textDecorationLine: 'underline', // Línea de decoración
        
    },

    texto2:{
        color:'#ffda45ff',
        fontSize:40, // Tamaño de la fuente
        fontFamily: 'Arial', // Tipografía
        fontWeigth:'500',
        fontStyle: 'italic',// Negrita
        textDecorationLine: 'underline', // Línea de decoración
        
    },
    botonesContainer:{
        marginTop:20, // Separación entre el texto y los botones 
        flexDirection:'colum-reverse', // Colocación de los botones
        gap: 15, // Separación de los botones
    },
});