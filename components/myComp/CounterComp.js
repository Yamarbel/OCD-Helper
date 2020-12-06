import React, { useState } from 'react'
import { TouchableOpacity, Button, Text, Dimensions, StyleSheet, View, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { func, arrayOf } from 'prop-types'
import * as actions from '../redux/actions/actions'
import AwesomeButton from "react-native-really-awesome-button";
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import AwesomeButtoncartman from 'react-native-really-awesome-button/src/themes/cartman';
import AwesomeButtonProgress from 'react-awesome-button/src/components/AwesomeButtonProgress';
import AwesomeButtonSocial from 'react-awesome-button/src/components/AwesomeButtonSocial';
import StyledText from 'react-native-styled-text';

const MapStateToProps = (state) => {
    return {
        bestCounter: state.stats.bestCounter,
        currentGoal: state.main.counter
    }
}

const Counter = ({ bestCounter, currentGoal,newBestCounter, resetBest }) => {

    let [counter, setCounter] = useState(0)

    return (
        <View style={styles.container}>
            <ImageBackground
               style={styles.backgroundImage2} 
               source ={require('../../assets/Logo.png')}
               resizeMode = 'contain'>
            </ImageBackground> 
            <Text
                style={styles.header2}>
                {counter}
            </Text>   
            <StyledText
                style={styles.header}
            >
                {"<b>Current goal is less or equal to</b>"}
            </StyledText>   
            <Text 
                style={styles.header2}>
                {currentGoal}
            </Text>
            <StyledText
                style={styles.header}
            >
                {"<b>Best counter is</b>"}
            </StyledText>  
            <Text 
                style={styles.header2}>
                {bestCounter}
            </Text>
            <AwesomeButtonRick
                 style={styles.buttonContainer2}
                 type="anchor"
                 onPress={() => 
                 setCounter(counter + 1)
                 }
                >
                Increase
            </AwesomeButtonRick>
            <AwesomeButtonRick
                 style={styles.buttonContainer2}
                 type="disabled"
                 onPress={() => {
                 setCounter(counter - 1)
                }}
                >
                Decrease
            </AwesomeButtonRick>
            <AwesomeButtonRick
                 style={styles.buttonContainer2}
                 type="secondary"
                 onPress={()=>{
                 setCounter(0);
                 }}
                 >
                Reset
            </AwesomeButtonRick>
           
            <AwesomeButtonRick
                 style={styles.buttonContainer2}
                 type="primary"
                 onPress={() => {
                 newBestCounter(counter)
                 }}
                 >
                Save Counter
            </AwesomeButtonRick>
            <AwesomeButtoncartman
                 style={styles.buttonContainer2}
                 type="secondary"
                 onPress={() => {
                 resetBest()
                 }}
                 >
                Reset Best
            </AwesomeButtoncartman>

        </View>
    )

}

Counter.propTypes = {
    bestCounter: Number,
    currentGoal: Number,
    newBestCounter:func
}

const CounterComp = connect(MapStateToProps,actions)(Counter)


const screen = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000035',
        alignItems: 'center',
        height: '100%',
        width: '100%'

    },
    header: {
        bottom: 50,
        fontSize: 20,
        color: 'orange',
        textAlign: 'center',
        padding: 1,
    },

    header2: {
        bottom: 50,
        fontSize: 35,
        color: 'orange',
        textAlign: 'center',
        padding: 1,
    },
      
    button: {

    }, 

    
    buttonContainer2:
    {
        bottom: 47,
        marginTop: 20,
    },
    backgroundImage2:{
        flex: 1,
        top: 10,
        marginLeft: 80,
        justifyContent: "center",
        alignItems: "center",
        width: '70%',
        height: '70%',
        opacity: 0.96
        //: 15,
      },

});




export default CounterComp
