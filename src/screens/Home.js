import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableHighlight
} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

function Home(props) {
    const {navigation} = props
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Find your next destinations
      </Text>

      <TouchableHighlight
        style={styles.button}
        onPress={()=>navigation.navigate('SignIn')}
      >
        <View style={styles.buttonSignIn}>
          <Text style={styles.buttonLabel}>Login</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.button}
        onPress={() => navigation.navigate('SignUp')}
      >
        <View style={styles.buttonSignUp}>
          <Text style={styles.buttonLabel}>SIGN UP</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#db443c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '90%',
    margin:5,
    shadowColor: '#000',
    backgroundColor: '#404040',
  },  
  title: {
    fontSize: 20,
    color: '#fff',
    padding: 100,
  },
  buttonLabel: {
    color: '#fff',
  },
  buttonSignIn: {
    backgroundColor: '#404040',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    
  },
  buttonSignUp: {
    backgroundColor: '#8c8c8c',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});

export default Home;