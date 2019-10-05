import React from 'react';
import { StyleSheet, View, ActivityIndicator} from 'react-native';
import { Text, Button } from 'galio-framework' ;
import { Image, SocialIcon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';


const Index = () => {
      return (
        <View style={styles.container}>
        <Text style={{fontFamily: 'sans-serif-medium', color: 'white'}} h1>RECETICAPP</Text>
        <Image
          source={{ uri: "https://images.vexels.com/media/users/3/143047/isolated/preview/b0c9678466af11dd45a62163bdcf03fe-icono-plano-de-hamburguesa-de-comida-r--pida-by-vexels.png"}}
          style={{ width: 200, height: 200 }}
        />
        <SocialIcon
          title='Sign In With Facebook'
          button
          type='facebook'
          style={{width: 350}}
        />
        <SocialIcon
          title='Sign In With Google'
          button
          type='google'
          style={{width: 350}}
        />
        <Button onPress ={() => Actions.recetas()}>Recetas</Button>
      </View>
      );
  }
  export default Index;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FF5733',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });  