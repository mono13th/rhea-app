import React, { Component } from "react";
import { Container, Header, Left, Body, Icon, Title, Subtitle, Right, Content,  Text, Button, Form, Item, Label, Input, View, CheckBox } from "native-base";
import { LoginStyle } from '../../styles/styles';
//import { CORE_URL } from '../utils/Const';
//import ImagePicker from 'react-native-image-picker';
import { Alert, Image } from "react-native";

export default class HostCar extends Component{

    constructor(props){
        super(props);
        this.state = {
            host_id: null,
            car_type: null,
            manufacture: null,
            model: null,
            color: null,
            mileage: null,
            capacity: null,
            features: null,
            image: null,
            image_url: null
        };
    }

    // handleChoosePhoto = () => {
    //     const options = {
    //         title: 'Select Car',
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
    //                 image: source,
    //                 image_url: sourceBlob
    //             });
    //             alert('image : ' + JSON.stringify(this.state.image));
    //           }
    //     });
    // }

    // handleCar(hostid){
    //     fetch(CORE_URL + 'host/' + hostid + '/car', {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             host_id: hostid,//this.state.host,
    //             car_type: this.state.car_type,
    //             manufacture: this.state.manufacture,
    //             model: this.state.model,
    //             color: this.state.color,
    //             mileage: this.state.mileage,
    //             capacity: this.state.capacity,
    //             features: this.state.features,
    //             image_url: this.state.image_url
    //         }),
    //     }).then((response) => response.json())
    //         .then((responseJson) => {
    //             //alert('success ' + JSON.stringify(responseJson));
    //             //Redirect     
    //             Actions.mainhost({hostid: responseJson.host_id});
    //         })
    //         .catch((error) => {
    //             //console.error(error);
    //             alert('error ' + JSON.stringify(error));
    //         });
    // }

    onNavigationBack = () => {
      this.props.navigation.navigate('HostInfo')
    }
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
                    <Title style={{ width: 200 }}>Vehicle info</Title>                    
                </Body>
                <Right />
                
                </Header>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label style={LoginStyle.textColor}>Brand</Label>
                            <Input onChangeText={(text) => this.setState({car_type: text})} value={this.state.car_type} />
                        </Item>
                        <Item floatingLabel>
                            <Label style={LoginStyle.textColor}>Year</Label>
                            <Input onChangeText={(text) => this.setState({manufacture: text})} value={this.state.manufacture} />
                        </Item>
                        <Item floatingLabel>
                            <Label style={LoginStyle.textColor}>Model</Label>
                            <Input onChangeText={(text) => this.setState({model: text})} value={this.state.model} />
                        </Item>
                        <Item floatingLabel>
                            <Label style={LoginStyle.textColor}>Capacity</Label>
                            <Input onChangeText={(text) => this.setState({color: text})} value={this.state.color} />
                        </Item>
                        <Item floatingLabel>
                            <Label style={LoginStyle.textColor}>VIN Number</Label>
                            <Input onChangeText={(text) => this.setState({year: text})} value={this.state.year} />
                        </Item>    
                                                                                        
                        <Item floatingLabel>
                            <Label style={LoginStyle.textColor}>Mileage</Label>
                            <Input onChangeText={(text) => this.setState({mileage: text})} value={this.state.mileage} />
                        </Item> 
                        <Item floatingLabel>
                            <Label style={LoginStyle.textColor}>Feature</Label>
                            <Input onChangeText={(text) => this.setState({features: text})} value={this.state.features} />
                        </Item> 
                        <View style={{margin:20}}>
                            <Button style={{backgroundColor: '#404040', color:'#000', margin:5}} onPress={this.handleChoosePhoto} iconRight>
                                <Text>Upload Car Photo</Text>
                                <Icon name='camera' />
                            </Button>
                            
                        </View>
                        <View style={{margin: 20}}>
                            <Body>
                            <Image source={this.state.image} style={{height:150, width:200}}/>
                            </Body>
                            
                        </View>                                                                                                                         
                    </Form>
                </Content>
                <View>              
                    <Button  block onPress={() => this.handleCar(this.props.hostid)} style={LoginStyle.buttonSubmit}>
                        <Text>Confirm</Text>                        
                    </Button>         
                  </View>                  
            </Container>
        );
    }
}