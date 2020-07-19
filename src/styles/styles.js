import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Right } from 'native-base';

export const HomeStyle = StyleSheet.create({
    root: {
        backgroundColor: '#de4738',
    },
    banner: {
        height: '100%',
    },
    buttons: {
        height: '20%',
    },
    signIn: {
        backgroundColor: '#404040',
        margin:10
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
        color: '#fff'
    },
    guest:{
        backgroundColor: '#8c8c8c',
        margin: 20,
        width: '40%'
    },
    host: {
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
        backgroundColor: '#de4738',
        height: 100,
        elevation: 0
    },
    headerText: {
        margin: 20
    },  
    buttonBack: {
        elevation: 0, 
        backgroundColor: '#de4738',       
    },
    textColor: {
        color: '#fff'
    },
    buttonLogin: {
        backgroundColor: '#404040',
        margin: 20,
    },
    forgotButton: {
        alignItems:'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
        marginTop: -10
    },
    borderWhite: {
        borderTopColor: '#fff',
        borderTopWidth: 1,
        marginTop: 10,
        marginBottom: 10
    },
    optionsButton: {
        alignItems:'center',
        justifyContent: 'center',
        color: '#fff',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 12,
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