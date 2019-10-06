import React, { Component } from 'react';
import { StyleSheet, View, Alert, FlatList, TouchableOpacity,Text } from 'react-native';
import { Input, Block, NavBar,Button } from 'galio-framework';
import { Image, ListItem } from 'react-native-elements';
import logo from '../assets/logo.png';
import firebase from 'firebase';
import { db } from '../Firebase';
import { Actions } from 'react-native-router-flux';

export default class Recetas extends Component {
    constructor() {
        super();
        this.state = {
            recetas: []
        };
    }
    componentDidMount() {
        let datos = [];
        db.collection("recetas")
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc=> {
                    //console.log(doc.id, " => ", doc.data().nombre);
                    datos.push(doc.data())
                });
                //console.log(datos)
                this.setState({recetas:datos});
            })
            .catch( error => {
                console.log("Error getting documents: ", error);
            });


    }
    enviarreceta = () => {
        db.collection("recetas").add({
            nombre: "pollo frito",
            imagen: "imagen2.jpg",
            src: "https://t1.rg.ltmcdn.com/es/images/9/3/7/img_arroz_con_pollo_con_thermomix_59739_600_square.jpg",
            precio: 40000,
            cantidad: 80
        })
            .then(result => {
                console.log("Document written with ID: ", result.id);
                Actions.refresh();
            })
            .catch(error => {
                console.error("Error adding document: ", error);
            });
    }

    verdatos = () => {
        let datos = [];
        db.collection("recetas")
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc=> {
                    //console.log(doc.id, " => ", doc.data().nombre);
                    datos.push(doc.data())
                });
                console.log(datos)
                this.setState({recetas:datos});
            })
            .catch( error => {
                console.log("Error getting documents: ", error);
            });
    }

    verreceta=(item)=>{
        var params = {item: item}
        Actions.receta(params);
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <FlatList
                    data={this.state.recetas}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, flexDirection: 'column', margin: 15 }}>
                            <TouchableOpacity onPress={()=>this.verreceta(item)}>
                            <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
                            <Text style={{color:'white'}}>{item.nombre}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    numColumns={3}
                    keyExtractor={(item, index) => index.toString()}
                />
                    <Button radius={200} shadowless={true} style={{ backgroundColor: '#F59D2D', }} onPress={() => this.enviarreceta()}>Enviar</Button>
                    <Button radius={200} shadowless={true} style={{ backgroundColor: '#F59D2D', }} onPress={() => this.verdatos()}>Ver datos</Button>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    MainContainer: {
      justifyContent: 'center',
      flex: 1,
      paddingTop: 30,
      backgroundColor: '#FF5733',
      
    },
    imageThumbnail: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
    },
  });
  /*
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF5733',
        alignItems: 'center',
        justifyContent: 'center',
    },
});*/
