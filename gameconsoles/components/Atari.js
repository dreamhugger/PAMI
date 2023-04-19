import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Atari() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Atari 2600</Text>
      <View style={estilo.imgContainer}>
        <Image style={estilo.img} source={require('../assets/atari.gif')} />
      </View>
      <View style={estilo.topicosContainer}>
        <Text style={estilo.topicos}>
          <AntDesign name="star" size={24} color="black" />
          Trazendo vários jogos de arcade para o console foi um sucesso imediato. Porém, teve uma quantidade astronomica de jogos mau feitos por empresas terceirizadas, o que resultou em uma crise na indústria de jogos.
        </Text>
      </View>
    </View>
  );
}

const largura = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    padding: 15,
  },
  titulo: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 30,
  },
  topicos: {
    fontSize: 20,
  },
  imgContainer: {
    alignItems: 'center',
  },
  img: {
    width: largura - 50,
    height: 300,
    borderRadius: 30,
    margin: 10,
  },
  topicosContainer: {
    backgroundColor: 'violet',
    borderRadius: 5,
    margin: 15,
    padding: 10,
  },
});
