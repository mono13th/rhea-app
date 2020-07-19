import React, { Component } from "react";
import { Body, View, Picker, Item } from "native-base";
//import { CORE_URL } from '../utils/Const';

export default class States extends Component {
    constructor(props) {
        super(props);
        this.state = {
          cities: [],
          selectedCity: ''
        };
      }

    onCityChange = (e) => {
        // this.props.onUpdate(val);
        // this.setState({
        //     selectedCity: val
        // })
        //alert(e.name);
        if(e.id !== 0){
            this.props.onUpdate(e.id);
            this.setState({selectedCity: e.id});
        }
        
    }
      
    onLoadCities = () => {
        fetch(CORE_URL + 'cities', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((response) => response.json())
            .then((responseJson) => {
                this.setState({cities: responseJson});
            })
            .catch((error) => {
                //console.error(error);
                alert('error ' + JSON.stringify(CORE_URL));
 
            });
    }

    componentDidMount = () => {
        this.onLoadCities();    
    }

    render() {

        let cityItems = <View></View>
        if(this.state.cities){
            cityItems = this.state.cities.map( cty => {
                return (
                    <Picker.Item style={{color: '#fff'}} key={cty.id} label={cty.name} value={cty} />
                );
            })
        }
        return (
                
            <Body>
                <Item picker>
                <Picker
                    mode="dialog"
                    style={{ width: undefined }}
                    placeholder="Select your City"
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.selectedCity}
                    onValueChange={this.onCityChange}
                >
                    {cityItems}
                </Picker>
                </Item>         
            </Body>
       
        );
    }
}