import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView} from 'react-native';

export default function App() {
  return (
    <View style = {estilo.conteudo}>
      <Image style = {estilo.logo} source = {require("./assets/mouseia.png")}></Image>
      <ScrollView>
        <View style = {estilo.conteudo}>
          <Text style = {estilo.paragrafo}>
            Mouseia era o nome dado ao festival das musas olimpianas, onde as pessoas se reuniam para cantar, dançar e adorar essas divindades conectadas as artes. Para cada uma das nove musas dedicarei um dos meus trabalhos artísticos, inspirado pela arte regida por cada musa.
          </Text>
          <Text style = {estilo.titulo}>
            Caliope, musa da poesia épica.
          </Text>
          <Image style = {estilo.imagem} source = {require("./assets/caliope.jpg")}></Image>
          <Text style = {estilo.paragrafo}>
            À Calíope dedico meu cordel <Text style = {estilo.chique}>Primórdios</Text>, e todos os meus trabalhos líricos.
          </Text>
          <Text style = {estilo.titulo}>
            Clio, musa da história.
          </Text>
          <Image style = {estilo.imagem} source = {require("./assets/clio.jpg")}></Image>
          <Text style = {estilo.paragrafo}>
            À Clio dedico minha primeira sessão de RPG que mestrei para meus amigos, e todos os meus trabalhos literários.
          </Text>
          <Text style = {estilo.titulo}>
            Erato, musa da poesia romântica.
          </Text>
          <Image style = {estilo.imagem} source = {require("./assets/erato.jpg")}></Image>
          <Text style = {estilo.paragrafo}>
            À Erato dedico meu podcast <Text style = {estilo.chique}>Amortentia</Text>, que conta a história do amor através das épocas, e todos os atos que fiz inspirado pelo amor.
          </Text>
          <Text style = {estilo.titulo}>
            Euterpe, musa da música.
          </Text>
          <Image style = {estilo.imagem} source = {require("./assets/euterpe.jpg")}></Image>
          <Text style = {estilo.paragrafo}>
            À Euterpe dedico minhas músicas disponíveis no <Text style = {estilo.chique}>SoundCloud</Text>, e também minhas pequenas apresentações em saraus e shows de talentos.
          </Text>
          <Text style = {estilo.titulo}>
            Melpômene, musa da tragédia.
          </Text>
          <Image style = {estilo.imagem} source = {require("./assets/melpomene.jpg")}></Image>
          <Text style = {estilo.paragrafo}>
            À Melpômene dedico o primeiro espetáculo que protagonizei, <Text style = {estilo.chique}>Quixotismo</Text>, e também meus outros trabalhos cênicos.
          </Text>
          <Text style = {estilo.titulo}>
            Políminia, musa da poesia sacra.
          </Text>
          <Image style = {estilo.imagem} source = {require("./assets/poliminia.jpg")}></Image>
          <Text style = {estilo.paragrafo}>
            À Políminia dedico todo o tempo em que me conectei espiritualmente com algo, cada meditação e cada aula de yoga.
          </Text>
          <Text style = {estilo.titulo}>
            Tália, musa da comédia.
          </Text>
          <Image style = {estilo.imagem} source = {require("./assets/talia.jpg")}></Image>
          <Text style = {estilo.paragrafo}>
            À Tália dedico meu treinamento de clown, e meu tempo trabalhando na compahia <Text style = {estilo.chique}>Patifacia</Text>.
          </Text>
          <Text style = {estilo.titulo}>
            Terpsícore, musa da dança.
          </Text>
          <Image style = {estilo.imagem} source = {require("./assets/terpsicore.jpg")}></Image>
          <Text style = {estilo.paragrafo}>
            À Terpsícore dedico minha apresentação, <Text style = {estilo.chique}>A Dança da Morte</Text>, e cada segundo onde dancei ou joguei <Text style = {estilo.chique}>Just Dance.</Text>
          </Text>
          <Text style = {estilo.titulo}>
            Urania, musa da astronomia.
          </Text>
          <Image style = {estilo.imagem} source = {require("./assets/urania.jpg")}></Image>
          <Text style = {estilo.paragrafo}>
            À Urania dedico meu tempo pesquisando sobre e observando as estrelas e a lua, e todos os momentos em que apreciei o crepúsculo.
          </Text>
        </View>
      </ScrollView>
      <Text style = {estilo.credito}>
        © 2023 Marcus Mazzieri CC-BY-SA
      </Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  conteudo: {
    alignItems: "center",
    backgroundColor: "#DCABFF"
  },
  logo: {
    width: 200,
    height: 125
  },
  titulo: {
    fontSize: 17,
    fontWeight: 'bold',
    margin: 10
  },
  paragrafo: {
    fontSize: 15,
    margin: 20
  },
  credito: {
    fontSize: 15,
    color: "#FFF5AD"
  },
  chique: {
    fontStyle: 'italic'
  },
  imagem: {
    width: 250,
    height: 355
  }
});
