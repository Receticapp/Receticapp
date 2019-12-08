import React, { Component } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { Text, Block, Button } from 'galio-framework';
import { Avatar } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { CardItem, Body } from 'native-base';

export default class VistaDatosUsuario extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontFamily: 'sans-serif-medium', color: 'white' }} h2>Bienvenido</Text>
                <Avatar size="xlarge" rounded source={{ uri: global.user.imagen }} />
                <Text style={{ fontFamily: 'sans-serif-medium', color: 'white', marginTop: 5 }} h5>{global.user.nombre}</Text>
                <KeyboardAvoidingView behavior="padding" enabled>
                    <Block style={{ margin: 25 }}>
                        <CardItem style={{ margin: 10 }}>
                            <Body>
                                <Text h6 color='black' >Nombre: {global.user.nombre}</Text>
                            </Body>
                        </CardItem >
                        <CardItem style={{ margin: 10 }}>
                            <Body>
                                <Text h6 color='black' >Email: {global.user.correo}</Text>
                            </Body>
                        </CardItem>
                        <CardItem style={{ margin: 10 }}>
                            <Body>
                                <Text h6 color='black' >Dirección: {global.user.direccion}</Text>
                            </Body>
                        </CardItem>
                        <CardItem style={{ margin: 10 }}>
                            <Body>
                                <Text h6 color='black' >Telefono: {global.user.telefono}</Text>
                            </Body>
                        </CardItem>
                        <CardItem style={{ margin: 10 }}>
                            <Body>
                                <Text h6 color='black' >Saldo: $ {global.user.saldo}</Text>
                            </Body>
                        </CardItem>
                        <Button radius={200} shadowless={true} style={{ backgroundColor: '#F59D2D', margin: 10 }}
                            onPress={() => { Actions.ActualizarDatosUsuario(); }}>Actualizar mis datos personales</Button>
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
