import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home(props) {
  return (
    <View style={styles.corpo}>
      <Text style={styles.titulo}>As melhores receitas de bolo</Text>
      <Image
        style={styles.imagem}
        source={require('../assets/boloprincipal.jpg')}
      />
      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          props.navigation.navigate('BoloChocolate');
        }}>
        <Text style={styles.texto}>Bolo de Chocolate</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          props.navigation.navigate('BoloFuba');
        }}>
        <Text style={styles.texto}>Bolo de Fubá</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          props.navigation.navigate('BoloMilho');
        }}>
        <Text style={styles.texto}>Bolo de Milho</Text>
      </TouchableOpacity>
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
  botao: {
    margin: 5,
    backgroundColor: 'pink',
    borderRadius: 50,
    marginLeft: 50,
    marginRight: 50,
    paddingTop: 10,
    paddingBottom: 10,
  },
  texto: {
    fontSize: 15,
    fontWeight: 500,
  }
});
