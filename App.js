import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView } from "react-native";
import api from "./src/services/api";



export default function App() {

  const [cep, setCep] = useState('');

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
        />
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
  titulo:{
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight:'bold'
  },
  input:{
    backgroundColor:'#ffffff',
    
  }
});