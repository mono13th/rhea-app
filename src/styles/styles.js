import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Right } from 'native-base';

export const HomeStyle = StyleSheet.create({
    root: {
        backgroundColor: '#de4738',
    },
    banner: {
        height: '100%',
        flex:1,
    },
    buttons: {
        flex:1,
        height: '20%',
    },
    signIn: {
        backgroundColor: '#404040',
        margin:10,
        justifyContent:'center',          
    },
    signUp: {
        backgroundColor: '#8c8c8c',
        margin:10,        
        justifyContent:'center',        
    },
    title:{
        justifyContent:'center',
        alignContent:'center',
        fontSize: 30,
        margin: 20,
        marginTop:'50%',
        alignSelf: 'center',
        color: '#fff',
        flex:1,
    },
    host:{
        backgroundColor: '#8c8c8c',
        margin: 20,
        width: '40%'
    },
    guest: {
        backgroundColor: '#404040',
        margin: 20,
        width: '40%'
    },
    wrapButton: {
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 30,
        marginBottom: '100%'
    }
});

export const LoginStyle = StyleSheet.create({
    root: {
        backgroundColor: '#de4738',
        color: '#fff'
    },
    headerStyle: {
        backgroundColor: 'transparent',
        height: 150,
        elevation: 0,                
    },
    headerText: {
        margin: 20,        
        //backgroundColor:'#fff',
        minWidth:100,
        flex: 1,
        alignItems: 'center'
    },
    titleText:{
        fontSize: 28,
        fontWeight: 'bold',
    }, 
    subtitleText:{
        fontSize: 18,
    },  
    buttonBack: {
        elevation: 0, 
        backgroundColor: 'transparent',       
    },
    textColor: {
        color: '#fff'
    },
    rememberText:{
        color: '#fff', 
        marginLeft:0, 
        marginTop:5, 
        paddingTop:10,
    },
    rememberCheck:{
        borderColor:'#fff', 
        backgroundColor: 'transparent',
        marginTop:20, 
        paddingTop:10
    },
    rememberChecked:{
        borderColor:'#fff',
        backgroundColor: '#a0a0a0',
        marginTop:20, 
        paddingTop:10
    },
    buttonLogin: {
        backgroundColor: '#fff',
        margin: 20,
    },
    buttonSubmit: {
        backgroundColor: '#404040',
        margin: 20,
    },
    buttonText: {
        color: '#de4738',
        fontSize:28,
        margin: 20,
        textTransform: 'capitalize',
    },
    borderWhite: {
        marginBottom: 10,
        marginTop: 10,
        borderTopColor: '#fff',
        borderTopWidth: 2,
        justifyContent: 'center',
        alignItems:'center',
        flex:1,
    },
    //------//
    buttonSignUp: {
        backgroundColor: '#fdd8d5',
        margin: 20,
        height: 80,
    },
    textSignUp: {
        color: '#8c8c8c',
        fontSize: 28
    },
    forgotButton: {
        alignItems:'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        marginTop: -10
    },
   
    optionsButton: {
        alignItems:'center',
        justifyContent: 'center',
        color: '#fff',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18,
        textAlign: 'center',
    },
    error: {
        color: '#fff',
        margin: 30
    },
    uploadButton: {
        backgroundColor: '#404040', 
        color:'#000', 
        justifyContent: 'center'
    },
    buttonSocial: {
        margin:25,
        backgroundColor: '#8c8c8c',
        justifyContent:'center',
        alignItems: 'center',
        padding: 20,
        width:150
    },
    stateStyle: {
        color: '#fff',
        marginLeft: -8,
        marginTop: 15,
    },

    dateStyle: {
        color: '#fff',
        marginLeft: 15,
        marginTop: 15,
    }
});

export const RequestStyle = StyleSheet.create({
    root: {
        backgroundColor: '#fff',
    },
    headerStyle: {
        backgroundColor: '#fff',
        height: 100,
        elevation: 0,
    },
    headerText:{
        color: '#a0a0a0',
        textAlign: 'center',
        justifyContent: 'center',
        
    },
    buttonStyle:{
        backgroundColor: '#404040',
        margin: 10
    },
    footerStyle:{
        backgroundColor:'#fff',
        borderTopWidth:1,
        borderTopColor:'#000'
    },
    formStyle: {
        margin: 20
    }
});

export const TripsStyle = StyleSheet.create({
    root: {
        backgroundColor: '#fff',
    },
    headerStyle: {
        backgroundColor: '#fff',
        height: 100,
        elevation: 0,
    },
    headerText:{
        color: '#a0a0a0',
        textAlign: 'center',
        justifyContent: 'center',
        
    },
    buttonStyle:{
        backgroundColor: '#404040',
        margin: 10
    },
    contentStyle: {
        margin: 30,
    },
    titleText:{
        fontSize:30,
        borderBottomColor: '#000',
        borderBottomWidth:1
    },
    avatarStyle:{
        
    },
    bodyStyle:{
        marginLeft: 10
    },
    historyLink: {
        fontSize:20,
        textAlign: 'right',
        marginTop: 10
    }
});

export const DriverStyle = StyleSheet.create({
    root:{
        backgroundColor: '#fff'
    },
    headerStyle: {
        backgroundColor: '#fff',
        height: 100,
        elevation: 0,
    },
    headerText:{
        color: '#a0a0a0',
        textAlign: 'center',
        justifyContent: 'center',
        
    },
    buttonStyle:{
        backgroundColor: '#fff',
        margin: 10,
        elevation: 0
    },
    contentStyle: {
        margin: 30,
    },
    titleText:{
        fontSize:30,
        borderBottomColor: '#000',
        borderBottomWidth:1
    },
    avatarStyle:{
        
    },
    bodyStyle:{
        marginLeft: 10
    },
});

export const ProfilesStyle = StyleSheet.create({
    root: {
        backgroundColor: '#fff',
    },
    headerStyle: {
        backgroundColor: '#fff',
        height: 100,
        elevation: 0,
        margin: 20
    },
    linkStyle: {
        fontSize:20,
        marginTop: 15
    }
});

export const FooterStyle = StyleSheet.create({
    
    footerStyle:{
        backgroundColor:'#fff',
        borderTopWidth:1,
        borderTopColor:'#000'
    },
    
});

export const PlaceStyle = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        color: '#8c8c8c',
        borderBottomColor: '#8c8c8c',
        borderBottomWidth:1,
        marginTop:10
    }
});

export const PersonStyle = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        color: '#8c8c8c',
        borderBottomColor: '#8c8c8c',
        borderBottomWidth:1,
        marginTop:10
    }
});

export const DateStyle = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        color: '#8c8c8c',
        borderBottomColor: '#8c8c8c',
        borderBottomWidth:1
    }
});

export const HostStyle = StyleSheet.create({
    root: {
        backgroundColor: '#fff',
    },
    headerStyle: {
        backgroundColor: '#fff',
        height: 100,
        elevation: 0,
    },
    headerText:{
        color: '#a0a0a0',
        textAlign: 'center',
        justifyContent: 'center',
        
    },
    buttonStyle:{
        backgroundColor: '#404040',
        margin: 10
    },
    contentStyle: {
        margin: 30,
    },
    titleText:{
        fontSize:30,
        borderBottomColor: '#000',
        borderBottomWidth:1
    },
    avatarStyle:{
        
    },
    bodyStyle:{
        marginLeft: 10
    },
    historyLink: {
        fontSize:20,
        textAlign: 'right',
        marginTop: 10
    }
});