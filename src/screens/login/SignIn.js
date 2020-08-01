import React, { Component } from "react";
import { Container, Header, Left, Body, Icon, Title, Subtitle, Right, Content, CheckBox, Text, ListItem, Button, Form, Item, Label, Input, View } from "native-base";
import { LoginStyle } from '../../styles/styles';
import { TouchableHighlight, Image } from 'react-native';
import fb from '../../../assets/facebook-logo.png';
import go from '../../../assets/google-logo.png';

export default class Login extends Component{

  constructor(props){
      super(props);
      this.state = {
        message: '',
        data: '',
        checked: false
      };
  }
  isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    this.setState({ isLoginScreenPresented: !isSignedIn });
  };

  getCurrentUser = async () => {
    const currentUser = await GoogleSignin.getCurrentUser();
    this.setState({ currentUser });
  };

  onAuthorize = () => {
    if (this.state.checked) {
      this.setState({checked: false})
    }else{
      this.setState({checked: true})
    }
    
  }

  _signIn = async () => {
      try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        this.setState({ userInfo });
        if(this.isSignedIn){
            alert('Google Sign In successful!');
        }
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
          alert('cancel');
        } else if (error.code === statusCodes.IN_PROGRESS) {
          // operation (e.g. sign in) is in progress already
          alert('in progress');
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
          alert('not available');
        } else {
          // some other error happened
          alert('error code '+ error.code + ' & ' + error);
        }
      }
    };

    signOut = async () => {
      try {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        this.setState({ user: null }); // Remember to remove the user from your app's state as well
      } catch (error) {
        console.error(error);
      }
    };

    onNavigationToHome = () => {
        Actions.home();
    }

    onNavigationToPlaces = () => {
      Actions.places();
    }

    onNavigationToRequest = () => {
      //Actions.requesttrip();
      Actions.mainhost();
    }

    onNavigationToDistance = () => {
      Actions.distances();
    }

    onNavigationToMain = () => {
      Actions.mainhost();
  }

  handleSignIn = () => {
    fetch('http://ec2-52-221-185-69.ap-southeast-1.compute.amazonaws.com/api/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: this.state.email,
            password: this.state.password
        }),
    }).then((response) => response.json())
        .then((responseJson) => {
            alert(JSON.stringify(responseJson));
            if(responseJson.error){
              this.setState({message: responseJson});
            }else{
              let data = responseJson;

              //Check User is Host / Guest
              Actions.mainhost({user: data.data.id});
            }
            //Redirect     
            
        })
        .catch((error) => {
            alert('error ' + JSON.stringify(error));
        });
}

    render() {
        return (
            <Container style={LoginStyle.root}>
                <Header style={LoginStyle.headerStyle}>
                <Left style={{flex:1}}>
                    <Button  style={LoginStyle.buttonBack}>
                        <Icon name='arrow-back' onPress={this.onNavigationToHome} />
                    </Button>
                </Left>
                
                <Body style={LoginStyle.headerText}>
                    <Title style={LoginStyle.titleText}>Welcome Back!</Title>                    
                    <Subtitle style={LoginStyle.subtitleText}>Sign in with email</Subtitle>
                </Body>
                <Right  style={{flex:1}} />
                
                </Header>
                <Content style={{maxHeight: 250}}>
                    <Form>
                        <Item floatingLabel>
                            <Label style={LoginStyle.textColor}>Username</Label>
                            <Input style={LoginStyle.textColor} onChangeText={(text) => this.setState({email: text})} value={this.state.email} />
                        </Item>
                        <Item floatingLabel>
                            <Label style={LoginStyle.textColor}>Password</Label>
                            <Input style={LoginStyle.textColor} secureTextEntry={true} onChangeText={(text) => this.setState({password: text})} value={this.state.password} />
                        </Item>
                        <ListItem style={{borderBottomWidth: 0}}>                            
                            <Body>
                                <Text style={LoginStyle.rememberText}>Remember username / password</Text>
                            </Body>
                            <CheckBox checked={this.state.background_check} style={this.state.checked ? LoginStyle.rememberChecked:LoginStyle.rememberCheck} onPress={this.onAuthorize} />
                        </ListItem>
                        
                    </Form>
                    <Text>{this.state.message}</Text>
                </Content>
                <View style={{flex:1}}>              
                    <Button  block onPress={this.onNavigationToRequest} style={LoginStyle.buttonLogin}>
                        <Text style={LoginStyle.buttonText}>Login</Text>                        
                    </Button>         
                    <Text style={LoginStyle.forgotButton}>Forgot Password?</Text>  
                </View>
                <View style={LoginStyle.borderWhite}>  
                    <Text style={LoginStyle.optionsButton}>
                      or continue with options below
                    </Text>       
                    <View style={{flexDirection:'row'}}>
                          <TouchableHighlight
                              style={LoginStyle.buttonSocial}
                              onPress={()=>navigation.navigate('HostRegister')}
                          >
                              <View style={LoginStyle.buttonGuest}>
                              <Image source={go} alt='google' style={{width:50, height: 50}} />
                              </View>
                          </TouchableHighlight>

                          <TouchableHighlight
                              style={LoginStyle.buttonSocial}
                              onPress={() => navigation.navigate('GuestRegister')}
                          >
                              <View style={LoginStyle.buttonGuest}>                  
                              <Image source={fb} alt='facebook' style={{width:50, height: 50}} />
                              </View>
                          </TouchableHighlight>
                      </View>
                </View>
            </Container>
        );
    }
}