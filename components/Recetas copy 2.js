import React, { Component } from 'react';
import { StyleSheet, View, Alert, YellowBox, ActivityIndicator } from 'react-native';
import { Text, Input, Block, Button, NavBar } from 'galio-framework';
import { Image, SocialIcon } from 'react-native-elements';
import logo from '../assets/logo.png';
import firebase from 'firebase';
import {db} from '../App';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
YellowBox.ignoreWarnings(['Setting a timer']);
YellowBox.ignoreWarnings(['cycle']);
const _console = _.clone(console);

console.warn = message => {
    if (message.indexOf('Setting a timer') <= -1) {
        _console.warn(message);
    }
    if (message.indexOf('cycle') <= -1) {
        _console.warn(message);
    }
};




export default class Recetas extends Component {

    
    enviarreceta = () => {
        db.collection("recetas").add({
            nombre: "pollo frito",
            imagen: "imagen2.jpg",
            precio: 40000,
            cantidad: 80
        })
        .then(result => {
            console.log("Document written with ID: ", result.id);
        })
        .catch(error => {
            console.error("Error adding document: ", error);
        });
    }
    verdatos = () => {
        db.collection("recetas").where("nombre", "array-contains", "arroz con pollo")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

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
