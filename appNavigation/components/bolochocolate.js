import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Bolochocolate() {
  return (
    <View style={styles.corpo}>
      <Text style={styles.titulo}>As melhores receitas de bolo</Text>
      <Image style={styles.imagem} source={require('../assets/bolochocolate.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  corpo: {
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
  },
  titulo: {
    fontStyle: 'italic',
    fontSize: 20,
  },
  imagem: {
    marginTop: 5,
    marginBottom: 5,
    width: 300,
    height: 200,
    resizeMode: 'center',
    borderRadius: 15,
    borderWidth: 1,
  },
});

