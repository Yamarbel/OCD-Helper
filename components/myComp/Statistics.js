import React from 'react'
import { View, StyleSheet,Text,Dimensions, ImageBackground } from 'react-native'
import * as actions from '../redux/actions/actions'
import { connect } from 'react-redux'
import { func, arrayOf } from 'prop-types'
import AwesomeButton from "react-native-really-awesome-button";
import AwesomeButtoncartman from 'react-native-really-awesome-button/src/themes/cartman';
import StyledText from 'react-native-styled-text';


const screen = Dimensions.get('window');

const mapStateToProps = (state) => {
    return {
        bestTimer: state.stats.bestTimer,
        bestCounter: state.stats.bestCounter
    }

}

const StatsPage = ({ bestCounter, bestTimer,resetBest }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
               style={styles.backgroundImage2} 
               source ={require('../../assets/Logo.png')}
               resizeMode = 'contain'>
            </ImageBackground> 
            <StyledText
                style={styles.header}
            >
                {"<b>Best score of repeats</b>"}
            </StyledText> 
            <Text 
                style={styles.header2}>
                {bestCounter}
            </Text>
            <StyledText
                style={styles.header}
            >
                {"<b>Best score of Seconds</b>"}
            </StyledText> 
            <Text 
                style={styles.header2}>
                {bestTimer}
            </Text>
            <AwesomeButtoncartman
                 style={styles.buttonContainer2}
                 type="disabled"
                 size="large"
                 onPress={() => {
                 resetBest()
                 }}
                 >
                Reset your scores
            </AwesomeButtoncartman>
        </View>
    )
}

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
    myText: {
        marginTop: 10,
        width: screen.width / 8,
        height: screen.width / 10,

    },

    header: {
        bottom: 300,
        fontSize: 30,
        color: 'orange',
        textAlign: 'center',
        padding: 1,
    },

    buttonContainer2:
    {
        bottom: 247,
        marginTop: 20,
    },

    header2: {
        bottom: 300,
        fontSize: 45,
        color: 'orange',
        textAlign: 'center',
        padding: 1,
    },
});

StatsPage.propTypes = {
    bestTimer:Number,
    bestCounter:Number,
    resetBest:func
}


const Statistics = connect(mapStateToProps, actions)(StatsPage)

export default Statistics