import React, { Component } from 'react';
import { StyleSheet, View, Alert, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { Text, Block, Button } from 'galio-framework';
import { Avatar } from 'react-native-elements';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Nombre de usuario",
            email: "Correo@dominio.com",
            picture: "http://cdn.shopify.com/s/files/1/0496/1029/files/Freesample.svg?5153"
        };
    }
    componentWillMount() {
        var user = firebase.auth().currentUser;
        this.setState({
            username: user.displayName,
            email: user.email,
            picture: user.photoURL
        });
    }

    render() {
        return (

            <View style={styles.container}>

                <Text style={{ fontFamily: 'sans-serif-medium', color: 'white' }} h1>Bienvenido</Text>
                <Avatar
                    size="xlarge"
                    rounded
                    source={{
                        uri: this.state.picture
                    }}
                />
                <KeyboardAvoidingView behavior="padding" enabled>
                    <Block style={{ margin: 25 }}>
                        <CardItem style={{ margin: 10 }}>
                            <Body>
                                <Text h6 color='black' >Nombre: {this.state.username}</Text>
                            </Body>
                        </CardItem >
                        <CardItem style={{ margin: 10 }}>
                            <Body>
                                <Text h6 color='black' >Email: {this.state.email}</Text>
                            </Body>
                        </CardItem>
                        <CardItem style={{ margin: 10 }}>
                            <Body>
                                <Text h6 color='black' >Dirección: Trans 70c Bis #78-25</Text>
                            </Body>
                        </CardItem>
                        <CardItem style={{ margin: 10 }}>
                            <Body>
                                <Text h6 color='black' >Telefono: 312-851-1274</Text>
                            </Body>
                        </CardItem>
                        <Button radius={200} shadowless={true} style={{ backgroundColor: '#F59D2D', }} onPress={() => { Actions.recetas() }}>Ver recetas</Button>
                    </Block>
                </KeyboardAvoidingView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF5733',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});
