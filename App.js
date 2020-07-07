import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
  Button
} from "react-native";

class App extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      context: null
    };
  }

  setSignInContext = () => {
    this.setState({ context: "signin" });
  };

  setSignUpContext = () => {
    this.setState({ context: "signup" });
  };

  render() {
    const { context } = this.state;
    if (context === "signin") {
      //return <SignIn />;
      alert('sign in')
    }
    if (context === "signup") {
      //return <SignUp />;
      alert('sign up')
    }
    return (
      <View style={styles.container}>

        <Text>
          Find your next destinations
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
  },  
  buttonLabel: {
    color: '#fff',
  },
  buttonSignIn: {
    backgroundColor: '#404040',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    
  },
  buttonSignUp: {
    backgroundColor: '#8c8c8c',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

export default App;
