import React, { useState } from 'react';
import{ Text, TextInput, View, StyleSheet } from'react-native';
import{ Button } from'react-native-web';import{ Entypo } from'@expo/vector-icons';
import{ FontAwesome5 } from'@expo/vector-icons';
export default function App() {

  const[click, setClick] =useState(true)
  const[email, setNome] =useState('');
  const[idade, setIdade] =useState('');
  const[textBotao, setTextBotao] =useState('Login')

  function mudarBool(){
    setClick(!click)
    if(click==true){
      setTextBotao("Login")
    }else{
      setIdade('')
      setNome('')
      setTextBotao("Deslogar")}
    }
    
    return(
      <View style={styles.container}>
        <Text>Nelsin</Text>
        <View style={styles.backgroundInput}>
          <Entypo name="mail"size={24}color="black"/>
          <TextInput style={styles.input}placeholder="Nome:"value={email}onChangeText={setNome}/>
        </View>
      <View style={styles.backgroundInput}>
        <FontAwesome5 name="key"size={24}color="black"/>
        <TextInput style={styles.input}placeholder="Idade:"value={idade}onChangeText={setIdade}/>
      </View>
        <Button style={styles.botao}title={textBotao}onPress={mudarBool}/>
      </View>
      );
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
},
input:{
  marginLeft:5,
   padding:10
},
backgroundInput:{
  alignItems:'center',
  flexDirection:'row',
  borderWidth:1,
  borderColor:"#777",
  padding:8,
  margin:10,
  width:'80%',
  borderRadius:5
},
botao:{
  width:'100%',
  padding:'100%'
}
});