import React, { Component } from 'react';
import { StyleSheet, View, Alert, FlatList, TouchableOpacity, Text, Image } from 'react-native';
import { Input, Block, NavBar, Button } from 'galio-framework';
import {  SearchBar } from 'react-native-elements';
import logo from '../assets/logo.png';
import firebase from 'firebase';
import { db } from '../Firebase';
import { Actions } from 'react-native-router-flux';
import { yellow } from 'ansi-colors';

export default class Recetas extends Component {
    constructor() {
        super();
        this.state = {
            recetas: [],
            search: ''
        };
    }
    componentDidMount() {
        let datos = [];
        db.collection("recetas")
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    //console.log(doc.id, " => ", doc.data().nombre);
                    datos.push(doc.data())
                });
                //console.log(datos)
                this.setState({ recetas: datos });
            })
            .catch(error => {
                console.log("Error getting documents: ", error);
            });


    }
 

    verdatos = () => {
        let datos = [];
        db.collection("recetas")
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    //console.log(doc.id, " => ", doc.data().nombre);
                    datos.push(doc.data())
                });
                //console.log(datos)
                this.setState({ recetas: datos });
            })
            .catch(error => {
                console.log("Error getting documents: ", error);
            });
    }

    verreceta = (item) => {
        var params = { item: item }
        Actions.receta(params);
    }

    updateSearch = search => {
        this.setState({ search });
    };

    agregarreceta= ()=>{
        Actions.nuevareceta();
    }
    render() {
        const { search } = this.state;

        return (
            <View style={styles.MainContainer}>
                <SearchBar
                    platform="android"
                    placeholder="Buscar receta..."
                    onChangeText={this.updateSearch}
                    value={search}
                />
                <FlatList
                    data={this.state.recetas}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, flexDirection: 'column', margin: 15 }}>
                            <TouchableOpacity onPress={() => this.verreceta(item)}>
                                <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
                                <Text style={{ color: 'white', textAlign: "center" , flex:1 }}>{item.nombre}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    numColumns={3}
                    keyExtractor={(item, index) => index.toString()}
                />
                <View style={styles.container}>
                <Button radius={200} shadowless={true} style={{ backgroundColor: '#F59D2D', }} onPress={() => this.agregarreceta()}>Agregar nueva receta</Button>
                <Button radius={200} shadowless={true} style={{ backgroundColor: '#F59D2D', marginTop:10}} onPress={() => this.verdatos()}>Actualizar datos datos</Button>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF5733',
        alignItems: 'center',
        
    },
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        paddingTop: 24,
        backgroundColor: '#FF5733',

    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        borderRadius: 25,
        borderColor: 'yellow',
        borderWidth: 5
    },
});
