import { StatusBar,} from 'expo-status-bar';

import React,{useState} from 'react';

import { StyleSheet, Text, View,TextInput,Button,TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Feather } from '@expo/vector-icons';

export default function App() {

const [nome,setNome] = useState('');

const [senha,setSenha] = useState('');

const [texto,setTexto] = useState('');

const [botao,setBotao] = useState('Login');

function liga () {

if (botao == 'Login'){

if (nome !== '' && senha !== ''){
setTexto(`Nome: ${nome} Senha: ${senha}`);
setBotao('Apaga texto')

} else{
setTexto('');
}

}

else{
setBotao('Login')
setTexto('');
}

}

return (

<View style={styles.container}>
  <Text>
    Login
  </Text>
  <View style={styles.caixa}>
    
    <TextInput style={styles.inputoso}
    placeholder='Enter your e-mail'
    onChangeText={setNome}
    />
    <MaterialIcons name="email" size={22} color="black" />

  </View>
  <View style={styles.caixa}>
    
    <TextInput style={styles.inputoso}
    placeholder='Enter your password'
    onChangeText={setSenha}
    />
    <MaterialCommunityIcons name="onepassword" size={24} color="black" />
  </View>

  <View style={styles.botao}>
    
    <Button
    color="#FF0000"
    onPress={liga}
    title={botao} />
  </View>

  <Text style={styles.textos}>{texto}</Text>
  <StatusBar style="auto" />
</View>
);
}

const styles = StyleSheet.create({

container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},

caixa:{
width:"80%",
borderWidth:1,
padding:5,
margin:10,
borderRadius:5,
flexDirection:'row',
alignItems:'center',
},

botao:{
width:'45%',
},

inputoso:{
width:"90%",
marginHorizontal:2,
},

textos:{
alignSelf:'center',
}
});