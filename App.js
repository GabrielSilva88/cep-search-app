import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity } from "react-native";
import api from "./src/services/api";



export default function App() {

  const [cep, setCep] = useState('');
  const inputRef = useRef(null)

  async function buscar() {
    if (cep == '') {
      alert('Digite um cep valido')
      setCep('');
      return; //
    }

    try {

      const response = await api.get('/53090110/json')
      console.log(response.data)

    } catch (error) {
      console.log('ERRO: ' + error)
    }
  }
  function limpar() {
    setCep('');
    inputRef.current.focus();
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
        <TouchableOpacity style={[styles.botao, { backgroundColor: '#1af652' }]}
          onPress={limpar}
        >
          <Text style={styles.botaoTexto}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultado}>

        <Text style={styles.itemTexto}>Cep:  </Text>
        <Text style={styles.itemTexto}>Logradouro:  </Text>
        <Text style={styles.itemTexto}>Bairo:  </Text>
        <Text style={styles.itemTexto}>Cidade:  </Text>
        <Text style={styles.itemTexto}>Estado:  </Text>

      </View>
    </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

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
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#DDD',
    width: '90%',
    padding: 10,
    fontSize: 20
  },
  areaBotao: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around'
  },
  botao: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
  },
  botaoTexto: {
    fontSize: 22
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