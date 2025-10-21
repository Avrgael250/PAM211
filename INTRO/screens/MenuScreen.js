import { Text, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import BotonesScreen from './BotonesScreen';
import ContadorScreen from './ContadorScreen';
import TextInputScreen from './TextInputScreen';
import ImageBackgroundScreen from './ImageBackgroundScreen';
import ScrollViewScreen from './ScrollViewScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import ListScreen from './ListScreen';
import ModalScreen from './ModalScreen';
import { Button } from 'react-native-web';

export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');

    switch(screen){
        case 'contador':
            return <ContadorScreen/>;
        case 'botones':
            return <BotonesScreen/>;
        case 'textinput':
            return <TextInputScreen/>;
        case 'imagebackground':
            return <ImageBackgroundScreen/>;
        case 'scrollview':
            return <ScrollViewScreen/>;
        case 'activityindicator':
            return <ActivityIndicatorScreen/>;
        case 'list':
            return <ListScreen/>;
        case 'modal':
            return <ModalScreen/>;
        case 'menu':
        default:
                return (
            <View>
                <Text style={styles.title}> Menu de Prácticas </Text>
                <Button color= 'purple' onPress={() => setScreen('contador')} title='Práctica: Contador' />
                <Button color= 'red' onPress={() => setScreen('botones')} title='Práctica: Botones' />
                <Button color= 'pink' onPress={() => setScreen('textinput')} title='Práctica: Text Input y Alert' />
                <Button color= 'yellow' onPress={() => setScreen('imagebackground')} title='Práctica: ImageBackground' />
                <Button color= 'green' onPress={() => setScreen('scrollview')} title='Práctica: ScrollView' />
                <Button color= 'orange' onPress={() => setScreen('activityindicator')} title='Práctica: ActivityIndicator' />
                <Button color= 'blue' onPress={() => setScreen('list')} title='Práctica: Lists' />
                <Button color= 'grey'onPress={() => setScreen('modal')} title='Práctica: Modal' />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'Thor',
        textAlign: 'center',
        marginVertical: 20,
    }
})
