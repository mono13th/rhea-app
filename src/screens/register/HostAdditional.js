import React, { Component } from "react";
import { Container, Header, Left, Body, Icon, Title, ListItem, Right, Content,  Text, Button, Form, Item, Label, Input, View, Picker } from "native-base";
// import ImagePicker from 'react-native-image-picker';
import { LoginStyle } from '../../styles/styles';
// import { CORE_URL } from "../utils/Const";
// import { Alert, Image } from "react-native";
import { Image } from "react-native";

export default class HostAdditional extends Component{

    constructor(props){
        super(props);
        this.state = {
            spoken: [],
            cities: [],
        };
        
    }

    // handleChoosePhoto = () => {
    //     const options = {
    //         title: 'Select License',
    //         customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    //         storageOptions: {
    //           skipBackup: true,
    //           path: 'images',
    //         },
    //       };

    //     ImagePicker.launchImageLibrary(options, response => {
    //         if (response.didCancel) {
    //             console.log('User cancelled image picker');
    //           } else if (response.error) {
    //             console.log('ImagePicker Error: ', response.error);
    //           } else if (response.customButton) {
    //             console.log('User tapped custom button: ', response.customButton);
    //           } else {
    //             const source = { uri: response.uri };
            
    //             // You can also display the image using data:
    //             const sourceBlob = { uri: 'data:image/jpeg;base64,' + response.data };
            
    //             this.setState({
    //               license_image: source,
    //               license_url: sourceBlob
    //             });
    //             alert('image : ' + JSON.stringify(this.state.license_image));
    //           }
    //     });
    // }

    
    handleComplete = () => {
      this.props.navigation.navigate('HostCar');
    }

    onNavigationBack = () => {
      this.props.navigation.navigate('HostInfo')
    }

    // handleComplete(userid){
    //     if(this.state.background_check){
    //         fetch(CORE_URL + 'host', {
    //             method: 'POST',
    //             headers: {
    //                 Accept: 'application/json',
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 user_id: userid,
    //                 license_number: this.state.license_number,
    //                 license_url:this.state.license_url,
    //                 insurance_number: this.state.insurance_number,
    //                 social_security: this.state.social_security,
    //                 background_check: true,
    //                 fee: this.state.fee,
    //                 status: 'active'
    
    //             }),
    //         }).then((response) => response.json())
    //             .then((responseJson) => {
    //                 //alert('success ' + JSON.stringify(responseJson));
    //                 //Redirect     
    //                 Actions.car({hostid: responseJson.id});
    //             })
    //             .catch((error) => {
    //                 //console.error(error);
    //                 alert('SUBMIT ERROR  ' + JSON.stringify(error));
    //             });
    //     }else{
    //         Alert.alert("Warning", 
    //                     "You must authorize to continue", 
    //                     [
    //                         {text: 'OK'}
    //                     ],
    //                     {cancelable: false})
    //     }
        
    // }

    render() {
        
        return (
            <Container style={LoginStyle.root}>
                <Header style={LoginStyle.headerStyle}>
                <Left>
                    <Button  style={LoginStyle.buttonBack}>
                        <Icon name='arrow-back' onPress={this.onNavigationBack} />
                    </Button>
                </Left>
                
                <Body style={LoginStyle.headerText}>
                    <Title style={{ width: 200 }}>Profile</Title>                    
                </Body>
                <Right />
                
                </Header>
                <Content>
                    <Form>
                        <Item>
                            <Picker
                                    mode="dropdown"
                                    style={LoginStyle.stateStyle}
                                    selectedValue={this.state.usstate}
                                    onValueChange={this.onUsStateChange}
                                >
                                    <Picker.Item label="Spoken Language (other than English)" value="" />
                                    <Picker.Item label="Arabic" value="arabic" />
                                    <Picker.Item label="Hindi" value="hindi" />
                            </Picker>
                        </Item>
                        <Item>
                            <Picker
                                    mode="dropdown"
                                    style={LoginStyle.stateStyle}
                                    selectedValue={this.state.usstate}
                                    onValueChange={this.onUsStateChange}
                                >
                                    <Picker.Item label="Cities you will cover" value="" />
                                    <Picker.Item label="San Francisco" value="SF" />
                                    <Picker.Item label="Los Angeles" value="LA" />
                                    <Picker.Item label="Bakersfield" value="BD" />
                            </Picker>
                        </Item>
                        <View>
                            <Text style={{color: '#fff', marginLeft:15, marginTop:5, paddingTop:10}}>
                                Note : 
                            </Text>
                            <Text style={{color: '#fff', marginLeft:15, marginTop:5, paddingTop:10}}>
                                You can edit these later anytime in settings.
                            </Text>
                        </View>
                    </Form>
                </Content>
                <View>              
                    <Button  block onPress={() => this.handleComplete(this.props.userid)} style={LoginStyle.buttonLogin}>
                        <Text>Next</Text>                        
                    </Button>         
                  </View>                  
            </Container>
        );
    }
}