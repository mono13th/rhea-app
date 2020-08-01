import React, { Component } from "react";
import { Container, View, Content, Text, Form, Item, Button } from "native-base";
import { HomeStyle } from '../../styles/styles';

export default class Role extends Component{
    constructor(props){
        super(props);
        this.state = {
            'userid':'',
            'role':'',
            'isLoading': false
        };
    }

    onNavigationToHome = () => {
        this.props.navigation.navigate('Home')
    }

    onNavigationToHost = () => {
        this.props.navigation.navigate('Register')
    }

    onNavigationToGuest = () => {
        this.props.navigation.navigate('Register')
    }

    onNavigationToComplete = () => {
        Actions.complete();
    }

    onNavigationToCompleteGuest = () => {
        //Actions.complete();
        alert('guest');
    }

    // _handleHostType(userid){
    //     fetch(CORE_URL + 'usertype', {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             user_id: userid, //change this dynamically,
    //             type:'host'
    //         }),
    //     }).then((response) => response.json())
    //         .then((responseJson) => {
                
    //             //Redirect     
    //             Actions.complete({userid: responseJson.user_id});
                
    //         })
    //         .catch((error) => {
    //             //console.error(error);
    //             alert('error ' + JSON.stringify(error));
    //         });
    // }

    // _handleGuestType(userid){
    //     fetch(CORE_URL + 'usertype', {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             user_id: userid,//62, //change this dynamically,
    //             type: 'guest'
    //         }),
    //     }).then((response) => response.json())
    //         .then((responseJson) => {
                
    //             //Redirect     
    //             Actions.completeHost({userid: responseJson.user_id});
    //             //alert('OK ' + JSON.stringify(responseJson));
    //         })
    //         .catch((error) => {
    //             //console.error(error);
    //             alert('error ' + JSON.stringify(error));
    //         });
    // }

    render() {
        return (
            <Container style={HomeStyle.root}>
                              
                <Content>
                    <View style={HomeStyle.banner}>
                        <Text style={HomeStyle.title}>Pick your Role</Text>
                    </View>                                                        
                </Content>
                <View style={HomeStyle.wrapButton}>
                        <Button block style={HomeStyle.host} onPress={this.onNavigationToHost} >
                            <Text>Host</Text>
                        </Button>          
                        <Button block style={HomeStyle.guest}>
                            <Text>Guest</Text>
                        </Button>                      
                    </View>
            </Container>
        );
    }
}