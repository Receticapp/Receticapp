import React, { Component } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { Text, Input, Button, Block } from 'galio-framework';
import logo from '../assets/logo.png';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import backurl from '../backurl';

export default class ActualizarDatosReceta extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            descripcion: "",
            imagen: "",
            ingredientes: "",
            precio: 0,
            stock: 0
        };
    }

    ActualizarReceta = (nombre,descripcion,imagen,ingredientes,precio,stock,id_receta) => {
        const parametros ={
            nombre: nombre,
            descripcion: descripcion,
            ingredientes: ingredientes,
            imagen: imagen,
            precio_unitario: precio,
            stock: stock
        }
        axios.patch(backurl+"recipes/"+id_receta,parametros)
        .then(result=>{Alert.alert("Receta actualizada correctamente"); Actions.VistaMenuTienda();})
        .catch(error=>{Alert.alert("Error actualizando receta"); console.log(error);})
    }

    render() {
        console.log(this.props.receta.id)
        return (
            <View style={styles.container}>
                <Image
                    source={logo}
                    style={{ width: 200, height: 200 }}
                />
                    <Input placeholder="Nuevo Nombre" type='default' onChangeText={nombre => this.setState({ nombre })} />
                    <Input placeholder="Nueva Descripcion" type='default' onChangeText={descripcion => this.setState({ descripcion })} />
                    <Input placeholder="Nueva Imagen" type='default' onChangeText={imagen => this.setState({ imagen })} />
                    <Input placeholder="Nuevos Ingredientes" type='default' onChangeText={ingredientes => this.setState({ ingredientes })} />
                    <Input placeholder="Nuevos Precio unitario" type='default' onChangeText={precio => this.setState({ precio })} />
                    <Input placeholder="Nuevos Stock" type='default' onChangeText={stock => this.setState({ stock })} />
                <Button
                    radius={200}
                    shadowless={true}
                    style={{ backgroundColor: '#F59D2D', marginTop: 10 }}
                    onPress={() => this.ActualizarReceta(
                        this.state.nombre,
                        this.state.descripcion,
                        this.state.imagen,
                        this.state.ingredientes,
                        this.state.precio,
                        this.state.stock,
                        this.props.receta.id)}>
                    Editar Receta
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