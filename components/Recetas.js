import React, { Component } from 'react';
import { StyleSheet, View, Alert, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { Text, Input, Block, Button, NavBar  } from 'galio-framework';
import { Image, SocialIcon } from 'react-native-elements';
import logo from '../assets/logo.png';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';



export default class Recetas extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontFamily: 'sans-serif-medium', color: 'white' }} h1>AQUI DEBE IR LO DE SERGIO</Text>
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
