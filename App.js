import React,{ Component } from 'react';
import { StyleSheet, View, Alert} from 'react-native';
import { Text, Button } from 'galio-framework' ;
import { Image, SocialIcon } from 'react-native-elements';
import firebase from 'firebase'; 
import { Container, Item, Form, Input, Label,Root } from "native-base";
import {Router, Stack, Scene} from 'react-native-router-flux';
import Login from './components/Login.js'
import Register from './components/Register'
import Profile from './components/Profile'
import Recetas from './components/Recetas'

var firebaseConfig = {
  apiKey: "AIzaSyDLgyR0M7Qk_rG6JiX3v7Qn5ZPSWURSIi8",
  authDomain: "recetiapp.firebaseapp.com",
  databaseURL: "https://recetiapp.firebaseio.com",
  projectId: "recetiapp",
  storageBucket: "",
  messagingSenderId: "593389944464",
  appId: "1:593389944464:web:4d7ddc30493d8586772215",
  measurementId: "G-E39PNC4FC8"
};
firebase.initializeApp(firebaseConfig);


export default class App extends Component {
  
render(){
  return (
    <Root >
    <Router >
			    <Stack key="root" hideNavBar={true}>
            <Scene key="login" component={Login} title="Iniciar sesión" initial={true}/>
            <Scene key="register" component={Register} title="Registro" />
            <Scene key="profile" component={Profile} title="Perfil de usuario" />
            <Scene key="recetas" component={Recetas} title="Recetas" />
			    </Stack>
			 </Router>
      
    </Root>
    
  );}

}

