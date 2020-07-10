import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
  Button
} from "react-native";

class SignUp extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      context: null
    };
  }

  render() {
    const { context } = this.state;
    return (
      <View style={styles.container}>

        <Text style={styles.title}>
          SIGN UP!
        </Text>

        <TouchableHighlight
          onPress={this.setSignInContext}
          style={styles.button}
        >
          <View style={styles.buttonSignIn}>
            <Text style={styles.buttonLabel}>LOGIN</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.setSignUpContext}
          style={styles.button}
        >
          <View style={styles.buttonSignUp}>
            <Text style={styles.buttonLabel}>SIGN UP</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
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

export default SignUp;
