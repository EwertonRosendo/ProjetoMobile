import React, { useState } from 'react';
import{ Text, TextInput, View, StyleSheet, Button, TouchableOpacity } from'react-native';
import{ Entypo } from'@expo/vector-icons';
import{ FontAwesome5 } from'@expo/vector-icons';
export default function App() {

  const[click, setClick] =useState(true)
  const[email, setEmail] =useState('');
  const[senha, setSenha] =useState('');
  const[textBotao, setTextBotao] =useState('Cadastro')

  function mudarBool(){
    setClick(!click)
    if(click==true){
      setTextBotao("Cadastro")
    }else{
      setSenha('')
      setEmail('')
      setTextBotao("Deslogar")}
    }
    
    return(
      <View style={styles.container}>
      
        <Text style={styles.logo}>Nilson</Text>

        <View style={styles.backgroundInput}>
          <Entypo name="mail"size={24}color="black"/>
          <TextInput style={styles.input}placeholder="Email:"value={email}onChangeText={setEmail}/>
        </View>

      <View style={styles.backgroundInput}>
        <FontAwesome5 name="key"size={24}color="black"/>
        <TextInput style={styles.input}placeholder="Senha:"value={senha}onChangeText={setSenha}/>
      </View>

      <TouchableOpacity style={styles.forgot}>
        <Text style={styles.textForgot}>Já possui uma conta?</Text>
      </TouchableOpacity>
      
        <TouchableOpacity style={styles.cadastro}>
          <Text style={styles.cadastroText}>Sign Up</Text>
        </TouchableOpacity>
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
logo:{
  fontSize:40,
  fontStyle:'italic',
  margin:40,
  fontWeight: 'bold'
},
cadastro:{
  backgroundColor:'blue',
  width:'80%',
  height:50,
  justifyContent:'center',
  alignItems:'center',
  borderRadius:10,
  marginTop:20,
},
cadastroText:{
  fontSize:30,
  color:'white',
  fontWeight: 'bold'
},
forgot:{
  width:'80%',
  alignItems:'flex-end',
  marginRight:20, 
},
textForgot:{
  fontWeight: 'bold'
}
});