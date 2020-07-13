import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from "react-native";
import * as Font from 'expo-font';
import { FontAwesome5 } from '@expo/vector-icons';
import { Container, Header, Content, Form, Item, Input, Label, Button, Left, Right, Body, Title, Subtitle, Icon } from 'native-base';

function SignUp(props) {


  const {navigation} = props;
  return (
    <Container style={styles.container}>
        <Header style={{ backgroundColor : 'transparent', paddingTop: 10, height:75}}>
          <Title>
            <Text>Create an Account</Text>            
          </Title>
          
        </Header>
        <Content style={styles.content}>
          <Form>
            <Item style={styles.item} floatingLabel>
              <Label style={styles.label}>Username</Label>
              <Input style={styles.input} />
            </Item>
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>Email</Label>
              <Input style={styles.input} />
            </Item>
            <Item floatingLabel style={styles.item} >
              <Label style={styles.label}>Password</Label>
              <Input style={styles.input} secureTextEntry={true} />
            </Item>
              <Button style={styles.button} onPress={()=> navigation.navigate('Role')}>
                <Text style={styles.buttonLabel}>Sign Up</Text>
              </Button>
          </Form>

          <View style={styles.options}>
            <Text style={styles.optionsText}> Or continue with one of these options</Text>

            <View style={{flexDirection:'row'}}>
              <TouchableHighlight
                style={styles.buttonSocial}
                onPress={()=>navigation.navigate('HostRegister')}
              >
                <View style={styles.buttonHost}>
                <FontAwesome5 name='google' size={50}/>
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.buttonSocial}
                onPress={() => navigation.navigate('GuestRegister')}
              >
                <View style={styles.buttonGuest}>                  
                  <FontAwesome5 name='facebook' size={50}/>
                </View>
              </TouchableHighlight>
            </View>
          </View>
          
        </Content>
      </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#db443c',    
  },
  content: {
    paddingLeft: 10,
    paddingRight: 30,    
  },
  item: {
    marginTop: 30,
  },  
  label: {
    color: '#fff',
  },
  button: {
    width: '90%',
    margin:25,
    backgroundColor: '#fdd8d5',
    justifyContent:'center'
  }, 
  buttonSocial: {
    margin:25,
    backgroundColor: '#8c8c8c',
    justifyContent:'center',
    alignItems: 'center',
    padding: 20,
    width:100
  },  
  buttonLabel: {
    color: '#8c8c8c',
    fontSize: 25
  },
  input: {
    color: '#fff',
  },
  options:{
    marginTop: 100,
    borderTopColor: '#fff',
    borderTopWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsText:{
    textAlign: 'center',
    color: '#fff',
    fontSize: 15,
  }

});

export default SignUp;
