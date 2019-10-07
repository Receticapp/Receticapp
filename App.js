import React,{ Component } from 'react';
import { StyleSheet, View, Alert,YellowBox} from 'react-native';
import { Text, Button } from 'galio-framework' ;
import { Image, SocialIcon } from 'react-native-elements';
import _ from 'lodash';
import { Container, Item, Form, Input, Label,Root } from "native-base";
import {Router, Stack, Scene} from 'react-native-router-flux';
import Login from './components/Login.js'
import Register from './components/Register'
import Profile from './components/Profile'
import Recetas from './components/Recetas'
import Receta from './components/Receta'
import Nuevareceta from './components/Nuevareceta'
YellowBox.ignoreWarnings(['Setting a timer']);

const _console = _.clone(console);
console.warn = message => {
    if (message.indexOf('Setting a timer')<= -1) {
        _console.warn(message);
    }
};


export default class App extends Component {
render(){
  return (
    <Root >
    <Router >
			    <Stack key="root" hideNavBar={true}>
            <Scene key="login" component={Login} title="Iniciar sesión" initial={true}/>
            <Scene key="register" component={Register} title="Registro" />
            <Scene key="profile" component={Profile} title="Perfil de usuario" hideNavBar={false} />
            <Scene key="recetas" component={Recetas} title="Recetas" />
            <Scene key="receta" component={Receta} title="Receta"  />
            <Scene key="nuevareceta" component={Nuevareceta} title="Agregar Receta"  hideNavBar={false}/>
			    </Stack>
			 </Router>
    </Root>
  );}
}

