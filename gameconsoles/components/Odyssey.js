import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Odyssey() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Magnavox Odyssey</Text>
      <View style={estilo.imgContainer}>
        <Image style={estilo.img} source={require('../assets/odyssey.gif')} />
      </View>
      <View style={estilo.topicosContainer}>
        <Text style={estilo.topicos}>
          <AntDesign name="star" size={24} color="black" />
          O primeiro console de videogame, possuia cartuchos com jogos bem limitados, mas por ser muito caro foi um fracasso em vendas, com concorrentes imitando seus jogos e vendendo por preços mais acessíveis.
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
