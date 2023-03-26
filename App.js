import { StyleSheet, Text, View } from 'react-native';
import './App.css';
import {ImageBackground, Image, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View >
      <ImageBackground source={require('./space.avif')} resizeMode="cover" style={styles.background}>
          <View>

            <View style={styles.container}>
                <a href="#" target="_blank">
                  <Image source={require('./perfil.jpeg')} style={styles.perfil} />
                </a>
            </View>

            <h1 className="title">Hello World!</h1>
              <View className="card">
        
                <h3 className="title">
                Olá eu sou o Arthur Duarte! 👋
                </h3>

              </View>
              <p className="text">
              Cursando sexto semestre de Tecnologia em Sistemas para Internet, Técnico de Informática,🧑‍💻!
              </p>

              <p className="text">
              Tenho como objetivo entrar no mercado de trabalho como desenvolvedor Front-end
              </p>

              <p className="text">
              Atual faço parte do time de programadores front-end em formação pela Plural Systems!
              </p>
          </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  perfil: {
    width: 130,
    height: 130,
    borderRadius: 450,
    padding: 1.5,
    flex: 1,
    position: 'relative',
    alignItems: 'center'
  }
});
