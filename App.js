import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity, Keyboard } from "react-native";
import api from "./src/services/api";



export default function App() {

  const [cep, setCep] = useState('');
  const inputRef = useRef(null);
  const [cepUser, setCepUser] = useState(null);

  async function buscar() {
    if (cep == '') {
      alert('Digite um cep valido');
      setCep('');
      return; //
    }
    try { //`/${cep}/json`
      const response = await api.get(`/${cep}/json`);
      //console.log(response.data);
      setCepUser(response.data);
      Keyboard.dismiss(); // teclado fechao ao terminar atividade.

    } catch (error) {
      console.log('ERRO: ' + error);
    }

  }

  function limpar() {
    setCep('');
    inputRef.current.focus();
    setCepUser(null);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.area}>
        <Text style={styles.titulo}>
          Digite o C.E.P desejado
        </Text>
        <TextInput
          style={styles.input}
          placeholder="EX: 53090-110"
          value={cep}
          onChangeText={(texto) => setCep(texto)}
          keyboardType="numeric"
          ref={inputRef}
        />
      </View>

      <View style={styles.areaBotao}>
        <TouchableOpacity style={[styles.botao, { backgroundColor: '#1d75cd' }]}
          onPress={buscar}
        >
          <Text style={styles.botaoTexto}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botao, { backgroundColor: '#0c983c' }]}
          onPress={limpar}
        >
          <Text style={styles.botaoTexto}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {cepUser && <View style={styles.resultado}>

        <Text style={styles.itemTexto}>Cep: {cepUser.cep} </Text>
        <Text style={styles.itemTexto}>Logradouro: {cepUser.logradouro} </Text>
        <Text style={styles.itemTexto}>Bairo:  {cepUser.bairro}</Text>
        <Text style={styles.itemTexto}>Cidade: {cepUser.localidade} </Text>
        <Text style={styles.itemTexto}>Estado: {cepUser.uf} </Text>

      </View>
      }
    </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  area: {
    alignItems: 'center'
  },
  titulo: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    width: '90%',
    padding: 10,
    fontSize: 20
  },
  areaBotao: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 51,
    justifyContent: 'space-around'
  },
  botao: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
  },
  botaoTexto: {
    fontSize: 20,
    color:'#fff'
  },
  resultado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemTexto: {
    fontSize: 22
  }
});