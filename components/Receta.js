import React, { Component } from 'react';
import { StyleSheet, View, Alert, FlatList, Text } from 'react-native';
import { Image, ListItem } from 'react-native-elements';
export default class Receta extends Component {
    render() {
        console.log(this.props.item)
        return (
            <View style={styles.container}>
                <Image  style={{ width: 200, height: 200 }}  source={{ uri: this.props.item.src }} />
                <Text>{this.props.item.nombre}</Text>
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