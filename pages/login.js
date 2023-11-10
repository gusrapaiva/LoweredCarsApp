import * as React from 'react';
import {SafeAreaView, Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import MainContainer from './rotastab';

export default function Login({Navigation}){
  return(
    <SafeAreaView style={estilo.container}>
    <TouchableOpacity style={estilo.btn}>
      <Text>
        oi mano
      </Text>
    </TouchableOpacity>
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    backgroundColor: '#ff9f69',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 25,
  }
});

// estilo = StyleSheet.create{()}