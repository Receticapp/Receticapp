import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Image, Alert } from 'react-native';
import { Text, Block, Button } from 'galio-framework';
import { CardItem, Body } from 'native-base';

export default class VistaVerOrdenUsuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <View style={{ backgroundColor: '#FF5733'}}>
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={{ color: 'white', fontSize: 30, textAlign: 'center' }}> Orden de: {this.props.orden.recipe.nombre}</Text>
                        <Image style={styles.imageDesing} source={{ uri: this.props.orden.recipe.imagen }} />
                        <Block style={{ margin: 25 }}>
                        <CardItem style={{ margin: 10 }}>
                            <Body>
                                <Text h6 color='black' >No° de Orden: {this.props.orden.id}</Text>
                            </Body>
                        </CardItem >
                        <CardItem style={{ margin: 10 }}>
                            <Body>
                                <Text h6 color='black' >Fecha de entrega: {this.props.orden.fecha_entrega}</Text>
                            </Body>
                        </CardItem>
                        <CardItem style={{ margin: 10 }}>
                            <Body>
                                <Text h6 color='black' >Estado: {this.props.orden.estado}</Text>
                            </Body>
                        </CardItem>
                        <CardItem style={{ margin: 10 }}>
                            <Body>
                                <Text h6 color='black' >Costo Total: {this.props.orden.costo_total}</Text>
                            </Body>
                        </CardItem>
                        <CardItem style={{ margin: 10 }}>
                            <Body>
                                <Text h6 color='black' >Calificación Usuario: {this.props.orden.calificacion_usuario}</Text>
                            </Body>
                        </CardItem>
                        <CardItem style={{ margin: 10 }}>
                            <Body>
                                <Text h6 color='black' >Calificación Tienda: {this.props.orden.calificacion_tienda}</Text>
                            </Body>
                        </CardItem>
                        <Button radius={200} shadowless={true} style={{ backgroundColor: '#F59D2D', margin: 10 }}
                            onPress={() => { Alert.alert("Orden Calificada Correctamente") }}>Calificar Orden</Button>
                    </Block>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF5733',
        alignItems: 'center',
        paddingTop: 20,
        justifyContent: 'center',
    },
    imageDesing: {
        width: 200,
        height: 200,
        borderRadius: 25,
        borderColor: 'yellow',
        borderWidth: 5
    }
});