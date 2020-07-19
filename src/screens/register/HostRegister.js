import React, { Component } from "react";
import { Container, Header, Left, Body, Icon, Title, Subtitle, Right, Content,  Text, Button, Form, Item, Label, Input, View } from "native-base";
import { LoginStyle } from '../../styles/styles';

export default class HostRegister extends Component{

    constructor(props){
        super(props);
        this.state = {
            phone: '',
            address: '',
            city: ''
        };
    }

    onUpdate = (val) => {
        this.setState({
          city: val
        })
      };

    handleComplete = () => {
      this.props.navigation.navigate('HostInfo')
    }

    onNavigationBack = () => {
      this.props.navigation.navigate('Home')
    }

    // handleComplete(userid){
    //     fetch(CORE_URL + 'updateuser/'+userid, {
    //         method: 'PUT',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             phone: this.state.phone, //this.state.name,
    //             address: this.state.address,
    //             city: this.state.city
    //         }),
    //     }).then((response) => response.json())
    //         .then((responseJson) => {
    //             //Redirect     
    //             //alert(JSON.stringify(responseJson));
    //             Actions.completehost({userid: responseJson.data.id});
    //         })
    //         .catch((error) => {
    //             //console.error(error);
    //             alert('error ' + JSON.stringify(error));
    //         });
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
                    <Title>Profile</Title>                    
                </Body>
                <Right />
                
                </Header>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label style={LoginStyle.textColor}>First Name</Label>
                            <Input onChangeText={(text) => this.setState({phone: text})} value={this.state.phone} />
                        </Item> 
                        <Item floatingLabel>
                            <Label style={LoginStyle.textColor}>Last Name</Label>
                            <Input onChangeText={(text) => this.setState({phone: text})} value={this.state.phone} />
                        </Item>                                                                    
                        <Item floatingLabel>
                            <Label style={LoginStyle.textColor}>Date of Birth</Label>
                            <Input onChangeText={(text) => this.setState({phone: text})} value={this.state.phone} />
                        </Item>                                                                    
                        <Item floatingLabel>
                            <Label style={LoginStyle.textColor}>Phone</Label>
                            <Input onChangeText={(text) => this.setState({address: text})} value={this.state.address} />
                        </Item> 
                        <Item floatingLabel>
                            <Label style={LoginStyle.textColor}>Address Line 1</Label>
                            <Input onChangeText={(text) => this.setState({phone: text})} value={this.state.phone} />
                        </Item> 
                        <Item floatingLabel>
                            <Label style={LoginStyle.textColor}>Address Line 2</Label>
                            <Input onChangeText={(text) => this.setState({phone: text})} value={this.state.phone} />
                        </Item>                                                                    
                        <Item floatingLabel>
                            <Label style={LoginStyle.textColor}>City</Label>
                            <Input onChangeText={(text) => this.setState({phone: text})} value={this.state.phone} />
                        </Item>                                                                    
                        <Item floatingLabel>
                            <Label style={LoginStyle.textColor}>State</Label>
                            <Input onChangeText={(text) => this.setState({address: text})} value={this.state.address} />
                        </Item>
                        <Item floatingLabel>
                            <Label style={LoginStyle.textColor}>Zipcode</Label>
                            <Input onChangeText={(text) => this.setState({address: text})} value={this.state.address} />
                        </Item>                                                    
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