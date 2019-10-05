import React, { Component } from 'react';
import { StyleSheet, View, Alert, KeyboardAvoidingView } from 'react-native';
import { Text, Input, Block, Button } from 'galio-framework';
import { Image, SocialIcon } from 'react-native-elements';
import logo from '../assets/logo.png';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';



export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        };
    }
    SignUp = (username, email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(result => {
                Alert.alert("Registrado correctamente");
                var user = firebase.auth().currentUser;
                user.updateProfile({
                    displayName: this.state.username,
                    photoURL: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                }).then(result => {
                    Alert.alert("Bienvenido", username);
                    Actions.profile();
                }).catch(error => {
                    Alert.alert("Ha ocurrido un error, intente de nuevo.");
                });
            }).catch(error => {
                Alert.alert("Error en los datos, intente de nuevo.");
            });
    };

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
                        <Input placeholder="Nombre completo" type='default' onChangeText={username => this.setState({ username })} />
                        <Input placeholder="Email" type='email-address' onChangeText={email => this.setState({ email })} />
                        <Input placeholder="Contraseña" password={true} onChangeText={password => this.setState({ password })} />
                        <Button radius={200} shadowless={true} style={{ backgroundColor: '#F59D2D', }} onPress={() => this.SignUp(this.state.username, this.state.email, this.state.password)}>Registrate</Button>
                    </Block>
                </KeyboardAvoidingView>
                <View >
                    <Text h5 color='white' bold={true} italic={true} onPress={() => { Actions.login() }}>Ya te encuentras registrado?</Text>
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
