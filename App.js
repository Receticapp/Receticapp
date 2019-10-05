import React from 'react';
import { StyleSheet, View, ActivityIndicator} from 'react-native';
import { Text, Button } from 'galio-framework' ;
import { Image, SocialIcon } from 'react-native-elements';
import { Scene, Router,Stack } from 'react-native-router-flux';
import Index from "./components/Index"
import Recetas from "./components/Recetas"

const App =() => {
  
  return (
    <Router>
      <Scene key = "root">

        <Scene
          key = "index"
          component = {Index}
          title = "Index"
          initial
        />
        <Scene
          key = "recetas"
          component = {Recetas}
          title = "Recetas"
        />  


      </Scene>
    </Router>
    
  )
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5733',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

