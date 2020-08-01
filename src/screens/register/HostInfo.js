import React, { Component } from "react";
import { Container, Header, Left, Body, Icon, Title, ListItem, Right, Content,  Text, Button, Form, Item, Label, Input, View, CheckBox } from "native-base";
// import ImagePicker from 'react-native-image-picker';
import { LoginStyle } from '../../styles/styles';
// import { CORE_URL } from "../utils/Const";
// import { Alert, Image } from "react-native";
import { Image } from "react-native";

export default class HostInfo extends Component{

    constructor(props){
        super(props);
        this.state = {
            user_id: '',
            license_number: '',
            license_image: null,
            license_url:'',
            insurance_number: '',
            social_security: '',
            background_check: false,
            fee: '',
            status: 'active'
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

    onAuthorize = () => {
        if(this.state.background_check){
            this.setState({background_check: false});
        }else{
            this.setState({background_check: true});
        }
    }

    handleComplete = () => {
      this.props.navigation.navigate('HostAdditional');
    }

    onNavigationBack = () => {
      this.props.navigation.navigate('Register')
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
                    <Left style={{flex:1}}>
                        <Button  style={LoginStyle.buttonBack}>
                            <Icon name='arrow-back' onPress={this.onNavigationToHome} />
                        </Button>
                    </Left>
                    
                    <Body style={LoginStyle.headerText}>
                        <Title >Registration Info</Title>                    
                    </Body>
                    <Right  style={{flex:1}} />
                    
                </Header>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label style={LoginStyle.textColor}>Driver's License Number</Label>
                            <Input onChangeText={(text) => this.setState({license_number: text})} value={this.state.license_number} />
                        </Item>    
                        <View style={{margin:20}}>
                            <Button style={LoginStyle.uploadButton} onPress={this.handleChoosePhoto} iconRight>
                                <Text>Upload License Image</Text>
                                <Icon name='camera' />
                            </Button>
                            
                        </View>
                        
                        <Item floatingLabel>
                            <Label style={LoginStyle.textColor}>Social Security Number</Label>
                            <Input onChangeText={(text) => this.setState({social_security: text})} value={this.state.social_security} />
                        </Item> 
                        <Item floatingLabel>
                            <Label style={LoginStyle.textColor}>Insurance Number</Label>
                            <Input onChangeText={(text) => this.setState({insurance_number: text})} value={this.state.insurance_number} />
                        </Item>
                        <ListItem>                            
                            <Body>
                                <Text style={{color: '#fff', marginLeft:0, marginTop:5, paddingTop:10}}>I authorize background checking</Text>
                            </Body>
                            <CheckBox checked={this.state.background_check} style={{color: '#fff', marginTop:20, paddingTop:10}} color="#fff" onPress={this.onAuthorize} />
                        </ListItem>
                        <View style={{margin: 20}}>
                            <Body>
                            <Image source={this.state.license_image} style={{height:150, width:200}}/>
                            </Body>                            
                        </View>
                    </Form>
                </Content>
                <View>              
                    <Button  block onPress={() => this.handleComplete(this.props.userid)} style={LoginStyle.buttonSubmit}>
                        <Text>Next</Text>                        
                    </Button>         
                  </View>                  
            </Container>
        );
    }
}