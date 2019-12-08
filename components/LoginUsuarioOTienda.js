import React, { Component } from 'react';
import { StyleSheet, View, Alert, KeyboardAvoidingView } from 'react-native';
import { Text, Input, Block, Button, Checkbox } from 'galio-framework';
import { Image } from 'react-native-elements';
import logo from '../assets/logo.png';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import backurl from '../backurl';

export default class LoginUsuarioTienda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login_correo: "",
            login_password: "",
            tienda: true,
        };
    }

    Login = (login_correo, login_password, tienda) => {
        firebase.auth().signInWithEmailAndPassword(login_correo, login_password).then(result => {
            global.gid = result.user.uid;
            if (tienda) {
                axios.get(backurl + "stores/" + result.user.uid)
                    .then(result => { global.user = result.data; Actions.VistaMenuTienda() })
                    .catch(error => { Alert.alert("Error obteniendo datos de usuario en Back"); console.log(error); })
            } else {
                axios.get(backurl + "users/" + result.user.uid)
                    .then(result => { global.user = result.data; Actions.VistaMenuUsuario() })
                    .catch(error => { Alert.alert("Error obteniendo datos de usuario en Back"); console.log(error); })
            }
        }).catch(error => {
            Alert.alert("Error en Login Firebase"); console.log(error);
        });
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                global.gid = user.uid;
                axios.get(backurl + "users/" + user.uid)
                    .then(res => {
                        if (res.data) {
                            global.user = res.data;
                            Actions.VistaMenuUsuario();
                            console.log("Con usuario Logeado");
                        }
                    });
                axios.get(backurl + "stores/" + user.uid)
                    .then(res => {
                        if (res.data) {
                            global.user = res.data;
                            Actions.VistaMenuTienda();
                            console.log("Con tienda Logeada");
                        }
                    });
            } else {
                console.log("Sin usuario Log")
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontFamily: 'sans-serif-medium', color: 'white' }} h1>RECETICAPP</Text>
                <Image
                    source={logo}
                    style={{ width: 200, height: 200 }}
                />
                <KeyboardAvoidingView behavior="padding" enabled>
                    <Block>
                        <Input placeholder="Email" type='email-address'
                            onChangeText={login_correo => this.setState({ login_correo })} />
                        <Input placeholder="Contraseña" password={true}
                            onChangeText={login_password => this.setState({ login_password })} />
                        <View style={{ padding: 15 }}>
                            <Checkbox color="warning" label="Ingresar como Tienda"
                                labelStyle={{ color: 'white' }}
                                onChange={() => {
                                    if (this.state.tienda) {
                                        this.setState({ tienda: false });
                                    } else {
                                        this.setState({ tienda: true });
                                    }
                                }} />
                        </View>
                        <Button radius={200} shadowless={true} style={{ backgroundColor: '#F59D2D', }}
                            onPress={() => this.Login(
                                this.state.login_correo,
                                this.state.login_password,
                                this.state.tienda)}>Iniciar Sesión</Button>
                    </Block>
                </KeyboardAvoidingView>
                <View >
                    <Text h5 color='white' bold={true} italic={true} onPress={() => { Actions.RegistroUsuarioOTienda() }}>Aun no estas registrado?</Text>
                </View>
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
