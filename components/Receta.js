import React, { Component } from 'react';
import { StyleSheet, View, Alert, ScrollView, Text, Image } from 'react-native';
import { Input, Block, Button } from 'galio-framework';


export default class Receta extends Component {
    render() {
        console.log(this.props.item)
        return (
            <View style={{ backgroundColor: '#FF5733', }}>
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={{ color: 'white', fontSize: 40, textAlign: 'center', }}>{this.props.item.nombre}</Text>
                        <Image style={styles.imageDesing} source={{ uri: this.props.item.src }} />
                        <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', }}>Ingredientes:</Text>
                        <Text style={{ color: 'white', fontSize: 20 }} > 360 gramos de tallarines </Text>
                        <Input placeholder="Cantidad" style={{ width: 100 }}></Input>
                        <Text style={{ color: 'white', fontSize: 20 }} > 60 gramos de albahaca fresca </Text>
                        <Input placeholder="Cantidad" style={{ width: 100 }}></Input>
                        <Text style={{ color: 'white', fontSize: 20 }} > 60 mililitros de piñones o almendras peladas </Text>
                        <Input placeholder="Cantidad" style={{ width: 100 }}></Input>
                        <Text style={{ color: 'white', fontSize: 20 }} > 4 dientes de ajo </Text>
                        <Input placeholder="Cantidad" style={{ width: 100 }}></Input>
                        <Button radius={200} shadowless={true} style={{ backgroundColor: '#F59D2D', marginTop:10}} onPress={() => {Alert.alert("Su orden ha sido encargada, por favor este atento a que llegue.")}}>Encargar Orden</Button>
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
        justifyContent: 'flex-start',
    },
    imageDesing: {
        width: 300,
        height: 300,
        borderRadius: 25,
        borderColor: 'yellow',
        borderWidth: 5
    }
});