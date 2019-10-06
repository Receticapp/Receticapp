import React, { Component } from 'react';
import { StyleSheet, View, Alert, YellowBox, ActivityIndicator } from 'react-native';
import { Text, Input, Block, Button, NavBar } from 'galio-framework';
import { Image, SocialIcon } from 'react-native-elements';
import logo from '../assets/logo.png';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
    if (message.indexOf('Setting a timer') <= -1) {
        _console.warn(message);
    }
};

export default class Recetas extends Component {

    enviarreceta = () => {
        firebase.database().ref('/prueba/' + '2')
            .set({
                nombre: 'arroz con pollo',
                image: 'imagen.jpg',
                cantidad: '8000',
                otrodato: '900'
            }).then(result => { Alert.alert("hecho") }).catch(error => { Alert.alert("error") })

    }
    verdatos = () => {
        const nameRef = firebase.database().ref().child('prueba').orderByChild("otrodato")
        nameRef.on('value', snapshot => {

            console.log(JSON.stringify(snapshot));
            /*snapshot.forEach(element => {
                if("arroz con pollo"== element.nombre){
                    console.log(element)
                }
                console.log(element)
            });*/

        })

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontFamily: 'sans-serif-medium', color: 'white' }} h1>AQUI DEBE IR LO DE SERGIO</Text>
                <Button radius={200} shadowless={true} style={{ backgroundColor: '#F59D2D', }} onPress={() => this.enviarreceta()}>Enviar</Button>
                <Button radius={200} shadowless={true} style={{ backgroundColor: '#F59D2D', }} onPress={() => this.verdatos()}>Ver datos</Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF5733',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
