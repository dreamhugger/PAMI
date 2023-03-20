import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Nabla_400Regular } from '@expo-google-fonts/nabla';
import { EduQLDBeginner_400Regular } from '@expo-google-fonts/edu-qld-beginner';
import { Sono_400Regular } from '@expo-google-fonts/sono';

export default () => {
  let [fontsLoaded] = useFonts({
    Nabla_400Regular,
    EduQLDBeginner_400Regular,
    Sono_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View>
        <Text style={styles.titulo}>Nostalgia</Text>
        <Text style={styles.texto}>
          Palavra que vem do grego e significa "anseio pelo passado" e em seu
          sentido mais tradicional "saudade de casa".
        </Text>
        <Text style={styles.sub}>Jogos que me dão nostalgia.</Text>
        <FlatList
          data={array}
          renderItem={({ item }) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image style={styles.imagem} source={item.imagem} />
              <Text style={styles.sub}>{item.legenda}</Text>
            </View>
          )}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  titulo: {
    fontFamily: 'Nabla_400Regular',
    fontSize: 50,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 10,
  },
  texto: {
    fontFamily: 'EduQLDBeginner_400Regular',
    fontSize: 22,
    textAlign: 'justify',
    paddingLeft: 40,
    paddingRight: 40,
    marginBottom: 15,
  },
  sub: {
    fontFamily: 'Sono_400Regular',
    fontSize: 19,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 30,
  },
  imagem: {
    width: 250,
    height: 250,
    resizeMode: 'center',
  },
});

const array = [
  {
    imagem: require('./assets/minecraft.png'),
    legenda: 'Minecraft',
  },
  {
    imagem: require('./assets/fnaf.png'),
    legenda: "Five Night's at Freedy",
  },
  {
    imagem: require('./assets/ab.png'),
    legenda: 'Angry Birds Epic',
  },
  {
    imagem: require('./assets/undertale.png'),
    legenda: 'Undertale',
  },
];
