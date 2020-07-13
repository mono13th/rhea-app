import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableHighlight
} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

function Role(props) {
    const {navigation} = props
  return (
    <View style={styles.container}>
    <View>
      <Text style={styles.title}>
        Pick a role
      </Text>
      </View>
    <View style={styles.content}>
      <TouchableHighlight
        style={styles.button}
        onPress={()=>navigation.navigate('HostRegister')}
      >
        <View style={styles.buttonHost}>
          <Text style={styles.buttonLabel}>HOST</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.button}
        onPress={() => navigation.navigate('GuestRegister')}
      >
        <View style={styles.buttonGuest}>
          <Text style={styles.buttonLabel}>GUEST</Text>
        </View>
      </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#db443c',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
  },
  button: {
    marginLeft: 20,
    marginRight: 20,
    width: 150,
  },  
  title: {
    fontSize: 50,
    fontWeight: "900",
    color: '#fff',
    padding: 100,
  },
  buttonLabel: {
    color: '#fff',
  },
  buttonHost: {
    backgroundColor: '#404040',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    
  },
  buttonGuest: {
    backgroundColor: '#8c8c8c',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});

export default Role;
