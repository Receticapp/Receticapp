import React, { Component } from 'react';
import { StyleSheet, View, Alert, KeyboardAvoidingView } from 'react-native';
import { Text, Input, Block, Button } from 'galio-framework';
import { Image, SocialIcon } from 'react-native-elements';
import logo from '../assets/logo.png';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    Login = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
            Actions.profile();
        }).catch(res => {
            Alert.alert("Contraseña o email erroneos, por favor intente de nuevo");
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
                            <Input placeholder="Email" type='email-address' onChangeText={email => this.setState({ email })} />
                            <Input placeholder="Contraseña" password={true} onChangeText={password => this.setState({ password })} />
                            <Button radius={200} shadowless={true} style={{ backgroundColor: '#F59D2D', }} onPress={() => this.Login(this.state.email, this.state.password)}>Iniciar Sesión</Button>
                        </Block>
                    </KeyboardAvoidingView>
                    <View >
                        <Text h5 color='white' bold={true} italic={true} onPress={() => { Actions.register() }}>Aun no estas registrado?</Text>
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
