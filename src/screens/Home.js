import React, { Component } from "react";
import { Container, Header, Left, Body, Title, Subtitle, Right, Content, Card, CardItem, Text, Button, View } from "native-base";
import { HomeStyle } from '../styles/styles';

export default class Home extends Component{

    onNavigationToSignIn = () => {
        this.props.navigation.navigate('SignIn')
    }

    onNavigationToSignUp = () => {
        this.props.navigation.navigate('SignUp')
    }

    render() {
        return (
            <Container style={HomeStyle.root}>
                              
                <Content>
                    <View style={HomeStyle.banner}>
                        <Text style={HomeStyle.title}>Find your next destination</Text>
                    </View>
                </Content>
                <View style={HomeStyle.buttons}>
                        <Button style={HomeStyle.signIn} onPress={this.onNavigationToSignIn}>
                            <Text style={HomeStyle.textStyle}>Login</Text>
                        </Button>          
                        <Button style={HomeStyle.signUp} onPress={this.onNavigationToSignUp}>
                            <Text style={HomeStyle.textStyle}>Sign Up</Text>
                        </Button>                      
                    </View>
            </Container>
        );
    }
}
