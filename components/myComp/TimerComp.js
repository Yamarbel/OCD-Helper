import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import * as actions from '../redux/actions/actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {

    return {
        bestTimer:state.stats.bestTimer
    }
}

const screen = Dimensions.get('window');

const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time - mins * 60;
    return { mins: formatNumber(mins), secs: formatNumber(secs) };
}

const MyApp = ({newBestTimer,bestTimer}) => {
    const [remainingSecs, setRemainingSecs] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const { mins, secs } = getRemaining(remainingSecs);
  
    toggle = () => {
      setIsActive(!isActive);
    }
  
    reset = () => {
      setRemainingSecs(0);
      setIsActive(false);
    }
  
    useEffect(() => {
      let interval = null;
      if (isActive) {
        interval = setInterval(() => {
          setRemainingSecs(remainingSecs => remainingSecs + 1);
        }, 1000);
      } else if (!isActive && remainingSecs !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isActive, remainingSecs]);
  
  
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.timerText}>{`${mins}:${secs}`}</Text>
        <TouchableOpacity onPress={this.toggle} style={styles.button}>
            <Text style={styles.buttonText}>{isActive ? 'Pause' : 'Start'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.reset} style={[styles.button, styles.buttonReset]}>
            <Text style={[styles.buttonText, styles.buttonTextReset]}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          totTime=(secs+(mins*60))/10
          newBestTimer(totTime)}} style={[styles.button, styles.buttonSave]}>
            <Text style={[styles.buttonText, styles.buttonTextSave]}>Save</Text>
        </TouchableOpacity>
        <Text 
            style={styles.header2}>
            Your best time is
        </Text>
        <Text 
            style={styles.header2}>
            {bestTimer}
        </Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        //flex: 1,
        backgroundColor: '#000035',
        alignItems: 'center',
        //justifyContent: 'center'
        height: '100%',
        width: '100%'

    },

    button: {
        marginLeft: 7,
        borderWidth: 10,
        borderColor: '#B9AAFF',
        width: screen.width / 2,
        height: screen.width / 3,
        borderRadius: screen.width / 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 45,
        color: '#B9AAFF'
    },
    timerText: {
        color: '#fff',
        fontSize: 90,
        marginBottom: 20,
        textAlign: 'center'
    },
    buttonReset: {
        marginLeft: 7,
        marginTop: 20,
        borderColor: "#FF851B"
    },
    buttonSave: {
      marginLeft: 7,
      marginTop: 20,
      borderColor: "#FF001B"
  },
    buttonTextReset: {
      color: "#FF851B"
    },
    buttonTextSave: {
        color: "#FF001B"
      },
      header2: {
        top: 10,
        fontSize: 30,
        color: '#00BB00',
        textAlign: 'center',
        padding: 1,
    },
  });

MyApp.propTypes = {
    bestTimer:Number
}

const TimerComp = connect(mapStateToProps, actions)(MyApp)

export default TimerComp