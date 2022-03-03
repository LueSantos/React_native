import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import foto from './assets/foto.jpg';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <View style={style.page}>
      <View style={style.container_header}>
        <Image source={foto} style={style.foto} />
        <Text style={style.nome}>Luciana Santos</Text>
        <Text style={style.dev}>Desenvolvedora Mobile</Text>
        <View style={style.rede_sociais}>
          <Icon name="github" size={25} />
          <Icon name="linkedin" size={25} />
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },

  container_header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
  },

  foto: {
    width: 200,
    height: 200,
    borderRadius: 150,
  },

  nome: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,
  },

  dev: {
    color: 'green',
    fontSize: 16,
    marginTop: 5,
  },

  rede_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '15%',
    marginTop: 10,
  },
});
