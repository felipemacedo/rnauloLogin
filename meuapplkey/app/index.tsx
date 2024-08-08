import React, {Component} from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';



export default class App extends Component {
clicou = ()=>{
  Alert.alert("Checkin", "Você clicou no botão de logar!");
}

  render(){
    return (
      <View style={styles.container}>
        
        <Image source={require('../app/src/logo.png')} style={styles.logo}/>
        <TextInput placeholder='Digite seu email' style={styles.input}/>
        <TextInput 
                placeholder='Digite sua senha' 
                style={styles.input}
                secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.botao}
          onPress={ () => {this.clicou()}}
        >
          <Text style={styles.txtBtn}>
            Logar
          </Text>

        </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#A5A19A'
  },
  logo:{
    width :75,
    height :75,
    borderRadius :100,
  },
  input:{
    marginTop :10,
    width :300,
    backgroundColor:'#ffffff',
    fontSize: 16,
    fontWeight:'bold',
    borderRadius:5,
    padding:10,
  },
  botao:{
    width:300,
    height:42,
    backgroundColor:'#01BFFF',
    marginTop:10,
    borderRadius:4,
    alignItems:'center',
    justifyContent:'center'
  },
  txtBtn:{
    fontSize:20,
    fontWeight:'bold',
    color:'#fff',
  }


});

