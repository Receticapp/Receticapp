import React, { Component } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { Text, Input, Button } from 'galio-framework';
import logo from '../assets/logo.png';
import axios from 'axios';
import backurl from '../backurl';
import { Actions } from 'react-native-router-flux';

export default class ActualizarDatosUsuario extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            direccion: "",
            imagen: "",
            telefono: "",
        };
    }
    ActualizarDatosUsuario = (google_id, nombre, direccion, imagen, telefono) => {
        const nueva_informacion_usuario = {
            nombre: nombre,
            direccion: direccion,
            imagen: imagen,
            telefono: telefono
        }
        axios.patch(backurl + "users/" + google_id, nueva_informacion_usuario)
            .then(result => { global.user = result.data; Alert.alert("Datos actualizados correctamente"); Actions.VistaMenuUsuario(); })
            .catch(error => { console.log(error); Alert.alert("Error actualizando datos"); })

    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontFamily: 'sans-serif-medium', color: 'white' }} h4>Actualizar</Text>
                <Text style={{ fontFamily: 'sans-serif-medium', color: 'white' }} h4>Mis Datos Personales</Text>
                <Image
                    source={logo}
                    style={{ width: 200, height: 200 }}
                />
                <Input placeholder="Nombre" type='default' onChangeText={nombre => this.setState({ nombre })} />
                <Input placeholder="Direccion" type='default' onChangeText={direccion => this.setState({ direccion })} />
                <Input placeholder="Imagen" type='default' onChangeText={imagen => this.setState({ imagen })} />
                <Input placeholder="Telefono" type='default' onChangeText={telefono => this.setState({ telefono })} />

                <Button
                    radius={200}
                    shadowless={true}
                    style={{ backgroundColor: '#F59D2D', marginTop: 10 }}
                    onPress={() => this.ActualizarDatosUsuario(global.gid, this.state.nombre, this.state.direccion, this.state.imagen, this.state.telefono)}>
                    Actualizar mis Datos
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
        justifyContent: 'center',
    },
});