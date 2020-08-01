import React, { Component } from "react";
import { Container, Header, Left, Body, Icon, Title, Subtitle, Right, Content,  Text, Button, Form, Item, Label, Input, View } from "native-base";
import { LoginStyle } from '../../styles/styles';
import { ActivityIndicator, TouchableHighlight, Image } from "react-native";
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
        this.props.navigation.navigate('Home')
    }

    onNavigationToRole = () => {
        this.props.navigation.navigate('')
    }

    handleSignUp = () => {
      this.props.navigation.navigate('Role')
    }

    render() {
        if(this.state.isLoading == true){
            return (
                <ActivityIndicator />
            );
        }else{
            return (
                <Container style={LoginStyle.root}>
                    <Header style={LoginStyle.headerStyle}>
                    <Left style={{flex:1}}>
                        <Button  style={LoginStyle.buttonBack}>
                            <Icon name='arrow-back' onPress={this.onNavigationToHome} />
                        </Button>
                    </Left>
                    
                    <Body style={LoginStyle.headerText}>
                        <Title >Create An Account</Title>                    
                        <Subtitle >Sign up with email</Subtitle>
                    </Body>
                    <Right  style={{flex:1}} />
                    
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