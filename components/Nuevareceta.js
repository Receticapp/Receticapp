import React, { Component } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { Text, Input, Button, Block } from 'galio-framework';
import logo from '../assets/logo.png';
import { db } from '../Firebase';
import { Actions } from 'react-native-router-flux';

export default class Nuevareceta extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            imagen: "",
            ingredientes: "",
        };
    }

    handleSubmit = () => {
        db.collection("recetas").add({
            nombre: this.state.nombre,
            imagen: this.state.imagen,
            src: this.state.imagen,
            ingredientes: this.state.ingredientes
        })
            .then(result => {
                console.log("Document written with ID: ", result.id);
                Alert.alert("Nueva receta agregada.");
                Actions.refresh();
            })
            .catch(error => {
                console.error("Error adding document: ", error);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={logo}
                    style={{ width: 200, height: 200 }}
                />
                    <Input placeholder="Nombre" type='default' onChangeText={nombre => this.setState({ nombre })} />
                    <Input placeholder="Imagen" type='default' onChangeText={imagen => this.setState({ imagen })} />
                    <Input placeholder="Ingredientes" type='default' onChangeText={ingredientes => this.setState({ ingredientes })} />
               
                <Button
                    radius={200}
                    shadowless={true}
                    style={{ backgroundColor: '#F59D2D', marginTop: 10 }}
                    onPress={() => this.handleSubmit()}>
                    Agregar nueva receta
                </Button>
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