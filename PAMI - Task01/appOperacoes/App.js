import {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
const [num1,setNum1] = useState('');
const [num2,setNum2] = useState('');

function soma() {
  const resultado = parseFloat(num1) + parseFloat(num2);
  alert('O resultado é ' + resultado)
}
function sub() {
  const resultado = parseFloat(num1) - parseFloat(num2);
  alert('O resultado é ' + resultado)
}
function multi() {
  const resultado = parseFloat(num1) * parseFloat(num2);
  alert('O resultado é ' + resultado)
}
function div() {
  const resultado = parseFloat(num1) / parseFloat(num2);
  alert('O resultado é ' + resultado)
}

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Calculadora </Text>
      <TextInput style={styles.input0} keyboardType='numeric' placeholder='Digite um número' onChangeText={(num1)=>setNum1(num1)}/>
      <TextInput style={styles.input1} keyboardType='numeric' placeholder='Digite um número' onChangeText={(num2)=>setNum2(num2)}/>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.btn} onPress={soma}>
          <Text style={styles.btntext}> + </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={sub}>
          <Text style={styles.btntext}> - </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={multi}>
          <Text style={styles.btntext}> x </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={div}>
          <Text style={styles.btntext}> / </Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  titulo: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 500,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  input0: {
    backgroundColor: 'pink',
    borderRadius: 15,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  input1: {
    backgroundColor: 'pink',
    borderRadius: 15,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  btn: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: 10,
    paddingBottom: 5,
    paddingRight: 20,
    paddingLeft: 20,
  },
  btntext: {
    fontSize: 20,
    color: 'pink',
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});
