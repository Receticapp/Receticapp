import React, { Component } from 'react';
import { StyleSheet, View, Alert, KeyboardAvoidingView, ScrollView  } from 'react-native';
import { Text, Block, Button } from 'galio-framework';
import { Avatar } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default class VistaMenuUsuario extends Component {
    LogOut = () => {
        firebase.auth().signOut()
        .then(result => { Alert.alert("Deslogeado correctamente"); Actions.LoginUsuarioOTienda();})
        .catch(error => { Alert.alert("Error Deslogeando"); console.log(error) })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontFamily: 'sans-serif-medium', color: 'white', margin: 20 }} h2>Bienvenido</Text>
                <Avatar size="xlarge" rounded source={{ uri: global.user.imagen }} />
                <Text style={{ fontFamily: 'sans-serif-medium', color: 'white', marginTop: 10 }} h5>{global.user.nombre}</Text>
                <KeyboardAvoidingView behavior="padding" enabled>
                    <Block style={{ margin: 25 }}>
                        <Button radius={200} shadowless={true} style={{ backgroundColor: '#F59D2D', margin: 10 }}
                            onPress={() => { Actions.VistaRecetasUsuario(); }}>Ver Recetas</Button>
                        <Button radius={200} shadowless={true} style={{ backgroundColor: '#F59D2D', margin: 10 }}
                            onPress={() => { Actions.VistaMisOrdenesUsuario(); }}>Ver mis Ordenes</Button>
                        <Button radius={200} shadowless={true} style={{ backgroundColor: '#F59D2D', margin: 10 }}
                            onPress={() => { Actions.VistaDatosUsuario(); }}>Ver mis Datos Personales</Button>
                        <Button radius={200} shadowless={true} style={{ backgroundColor: '#F59D2D', margin: 10 }}
                            onPress={() => { this.LogOut(); }}>Cerrar sesión</Button>
                    </Block>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#FF5733',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
