import React, { Component } from 'react';
import { StyleSheet, View, Alert, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { Text, Input, Block, Button } from 'galio-framework';
import { Image, SocialIcon } from 'react-native-elements';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            picture: ""
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
                <Image
                    source={{ uri: this.state.picture }}
                    style={{ width: 200, height: 200 }}
                    PlaceholderContent={<ActivityIndicator />}
                />
                <KeyboardAvoidingView behavior="padding" enabled>
                    <Block>
                        <Text h5 color='white' bold={true} >Nombre: {this.state.username}</Text>
                        <Text h5 color='white' bold={true} >Email: {this.state.email}</Text>
                        <Button radius={200} shadowless={true} style={{ backgroundColor: '#F59D2D', }} onPress={() => {Actions.recetas()}}>Ver recetas</Button>
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
        justifyContent: 'center',
    },
});
