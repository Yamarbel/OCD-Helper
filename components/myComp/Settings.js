import React, { useState } from 'react'
import { StyleSheet, TextInput, Button, Dimensions, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { connect } from 'react-redux'
import { func, arrayOf } from 'prop-types'
import * as actions from '../redux/actions/actions'
import AwesomeButton from "react-native-really-awesome-button";
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import AwesomeButtonProgress from 'react-awesome-button/src/components/AwesomeButtonProgress';
import AwesomeButtonSocial from 'react-awesome-button/src/components/AwesomeButtonSocial';
import StyledText from 'react-native-styled-text';
import Reinput from 'reinput'


const MapStateToProps = (state) => {
    return {
        saveCounterAndTimer: state.main.saveCounterAndTimer
    }
}

const SettingsPage = ({ saveCounterAndTimer }) => {

    const [timer, setTimer] = useState(10)
    const [counter, setCounter] = useState(10)

    return (
        <View style={styles.container}>
            <ImageBackground
               style={styles.backgroundImage2} 
               source ={require('../../assets/Logo.png')}
               resizeMode = 'contain'>
            </ImageBackground> 
            <Text>Settings</Text>
            <StyledText
                style={styles.header}
            >
                {"<b>Set your goals!</b>"}
            </StyledText>   
            <Reinput style={styles.textInput2}
            color='#FFFFFF'
            fontWeight='bold'
            label='This is not an Input'
            placeholder="Set timer (in seconds)"
            onChangeText={(input) => { setTimer(input)}}
            />
            <Reinput style={styles.textInput2}
            color='#FFFFFF'
            fontWeight='bold'
            label='This is not an Input'
            placeholder="Set counter (in repeats)"
            onChangeText={(input) => {setCounter(input)}}
            />
            <AwesomeButtonRick
                style={styles.buttonContainer2}
                type="secondary"
                size="large"
                onPress={() => {
                saveCounterAndTimer(counter, timer) }}
                >
                Save 
            </AwesomeButtonRick>
            <AwesomeButtonRick
                style={styles.buttonContainer2}
                type="secondary"
                size="large"
                onPress={() => {
                saveCounterAndTimer(20, 60) }}
                >
                Reset 
            </AwesomeButtonRick>
            
        </View>
    )
}

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000035',
        alignItems: 'center',
        height: '100%',
        width: '100%'
    },

    backgroundImage2:{
        bottom: 80,
        marginLeft: 80,
        justifyContent: "center",
        alignItems: "center",
        width: '70%',
        height: '70%',
        opacity: 0.96
    },

    button: {
        marginTop: 10,
        width: screen.width / 8,
        height: screen.width / 10,
        borderRadius: screen.width / 2

    },
    button2: {
        marginLeft: 0,
        width: screen.width / 2,
        height: screen.width / 3,
        borderRadius: screen.width / 3

    },

    buttonContainer2:
    {
        bottom: 250,
        marginTop: 20,
    },

    textInput: {
        backgroundColor: "orange",
        marginTop:10
    },
    
    textInput2: {
        bottom: 275,
        width: screen.width / 2,
    },

    header: {
        bottom: 330,
        fontSize: 20,
        color: 'orange',
        textAlign: 'center',
        padding: 1,
    },
});

SettingsPage.propTypes = {
    saveCounterAndTimer: func,
    timer:Number
}

const Settings = connect(MapStateToProps, actions)(SettingsPage)

export default Settings