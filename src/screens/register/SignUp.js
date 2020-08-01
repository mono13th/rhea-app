import React, { Component } from "react";
import { Container, Header, Left, Body, Icon, Title, Subtitle, Right, Content,  Text, Button, Form, Item, Label, Input, View } from "native-base";
import { LoginStyle } from '../../styles/styles';
import { ActivityIndicator, TouchableHighlight, Image } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import fb from '../../../assets/facebook-logo.png';
import go from '../../../assets/google-logo.png';


export default class Signup extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            msg: '',
            isLoading: false
        };
    }

    onNavigationToHome = () => {
        //Actions.home();
        this.props.navigation.navigate('Home')
    }

    onNavigationToRole = () => {
        //Actions.role();
        this.props.navigation.navigate('')
    }

    handleSignUp = () => {
      this.props.navigation.navigate('Role')
    }

    // handleSignUp = () => {
    //     this.setState({isLoading: true});
    //     fetch(CORE_URL + 'register', {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             name: this.state.name,
    //             email: this.state.email,
    //             password: this.state.password,
    //             password_confirmation: this.state.password,
    //             facebook_token: '',
    //             google_token: ''
    //         }),
    //     }).then((response) => response.json())
    //         .then((responseJson) => {
    //             this.setState({isLoading: false});
    //             //Actions.role();
    //             if(responseJson.errors){
    //                 this.setState({msg: JSON.stringify(responseJson.errors)});
    //             }else{
    //                 //this.setState({msg: JSON.stringify(responseJson.data.id)});
    //                 //Actions.role({userid: responseJson.data.id});
    //             }                
    //         })
    //         .catch((error) => {
    //             //console.error(error);
    //             this.setState({isLoading: false});
    //             this.setState({msg: JSON.stringify(error)});
    //             //alert('error ' + JSON.stringify(error));
    //         });
    // }

    render() {
        if(this.state.isLoading == true){
            return (
                <ActivityIndicator />
            );
        }else{
            return (
                <Container style={LoginStyle.root}>
                    <Header style={LoginStyle.headerStyle}>
                    <Left>
                        <Button  style={LoginStyle.buttonBack}>
                            <Icon name='arrow-back' onPress={this.onNavigationToHome} />
                        </Button>
                    </Left>
                    
                    <Body style={LoginStyle.headerText}>
                        <Title>Create An Account</Title>                    
                        <Subtitle>Sign up with email</Subtitle>
                    </Body>
                    <Right />
                    
                    </Header>
                    <Content>
                        <Form>
                            <Item floatingLabel>
                                <Label style={LoginStyle.textColor}>Username</Label>
                                <Input style={LoginStyle.textColor} onChangeText={(text) => this.setState({name: text})} value={this.state.name} />
                            </Item>
                            <Item floatingLabel>
                                <Label style={LoginStyle.textColor}>Email</Label>
                                <Input style={LoginStyle.textColor} onChangeText={(text) => this.setState({email: text})} value={this.state.email} />
                            </Item>
                            <Item floatingLabel>
                                <Label style={LoginStyle.textColor}>Password</Label>
                                <Input style={LoginStyle.textColor} secureTextEntry={true} onChangeText={(text) => this.setState({password: text})} value={this.state.password} />
                            </Item>
                            
                            
                        </Form>
                        <Text style={LoginStyle.error}>{this.state.msg? 'Warning! \n' + this.state.msg: ''}</Text>
                    </Content>
                    <View>              
                        <Button  block onPress={this.handleSignUp} style={LoginStyle.buttonSignUp}>
                            <Text style={LoginStyle.textSignUp}>Sign Up</Text>                        
                        </Button>         
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
}