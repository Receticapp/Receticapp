import React from 'react';
import { StyleSheet, View, ListView} from 'react-native';
import { Text, Button } from 'galio-framework' ;
import { Image, SocialIcon, SearchBar,Card, ListItem, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

export default class Home extends React.Component {
    state = {
        search: '',
      };
    
      updateSearch = search => {
        this.setState({ search });
      };
    constructor(props) {
        super(props);
    
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    
        this.state = {
          dataSource: ds.cloneWithRows(['Arroz con Pollo', 'Ajiaco']),
        };
      }
    render() {
        const imageSource = 'https://t1.rg.ltmcdn.com/es/images/9/3/7/img_arroz_con_pollo_con_thermomix_59739_600_square.jpg';
        const { search } = this.state;
        return (
            
            <View style={styles.container}>
                <SearchBar
                    round //To make the searchbar corner round (default square)
                    searchIcon={{ size: 24 }} //Size of the search icon
                    containerStyle = {{backgroundColor: 'white'}}
                    leftIconContainerStyle = {{backgroundColor: 'white'}}
                    rightIconContainerStyle = {{backgroundColor: 'white'}}
                    inputContainerStyle = {{backgroundColor: 'white'}}
                    placeholder="Busca una receta..."
                    onChangeText={this.updateSearch}
                    value={search}
                />
                <Text> {"\n"} </Text> 
                <View style={styles.texto}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={data => (
                    <View style={styles.containers}>
                        <Image
                        source={{ uri: imageSource }}
                        style={styles.img}
                        />
                        <Text style={ {textAlign: 'center', fontFamily: 'sans-serif-medium', color: 'white'}}>{data}</Text>
                    </View>)}
                />
                <Text> {"\n"} </Text> 
                <Button onPress ={() => Actions.index()}>Recetas</Button>
                </View>
            </View>
        );
    }
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FF5733',
      //alignItems: 'center',
      //justifyContent: 'center',
    },
    texto:{
      alignItems: 'center',
      justifyContent: 'center',
    },
    containers: {
        flex: 1,
        marginTop: 20,
    },
    img: {
        width: 193,
        height: 110,
    },
  }); 