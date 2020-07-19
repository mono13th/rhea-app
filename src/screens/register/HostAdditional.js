import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Picker
} from "react-native";
import * as Font from 'expo-font';
import { FontAwesome5 } from '@expo/vector-icons';
import { Container, Header, Content, Form, Item, Input, Label, Button, Left, Right, Body, Title, Subtitle, Icon, DatePicker } from 'native-base';

function HostInfo(props) {

  const {navigation} = props;
  
  return (
    <Container style={styles.container}>
        <Header style={{ backgroundColor : 'transparent', paddingTop: 10, height:75}}>          
          <Title>
            <Text>Registration</Text>            
          </Title>
          
        </Header>
        <Content style={styles.content}>
          <Form>
            <Item style={styles.item} floatingLabel>
              <Label style={styles.label}>Spoken Language (other than english)</Label>
              <Input style={styles.input} />
            </Item>
            <Item style={styles.item} floatingLabel>
              <Label style={styles.label}>Cities you will cover</Label>
              <Input style={styles.input} />
              <View>
                <Text>
                  Note : You can edit these later anytime in settings
                </Text>
              </View>
            </Item>
            
            <Button style={styles.button} onPress={()=> navigation.navigate('HostInfo')}>
              <Text style={styles.buttonLabel}>NEXT</Text>
            </Button>
          </Form>
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
    marginTop: 20,
  },  
  label: {
    color: '#fff',
  },
  button: {
    width: '90%',
    margin:25,
    backgroundColor: '#404040',
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
    color: '#FFF',
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

export default HostInfo;
