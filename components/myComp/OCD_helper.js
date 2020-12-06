
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Dimensions, TouchableOpacity } from 'react-native';
//import {func,arrayOf} from 'prop-types'
import * as actions from '../redux/actions/actions'
import { connect } from 'react-redux'
//import TimerComp from './TimerComp'
import Settings from '../myComp/Settings'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Statistics from '../myComp/Statistics'
import AwesomeButton from "react-native-really-awesome-button";

const Stack = createStackNavigator();


const screen = Dimensions.get('window');

const OCD_helper_main = ({Navigation}) => {
    return (
        <View style={styles.container}>
            <Text>welcome to OCD helper</Text>
            <AwesomeButton type="secondary"
          onPress={()=>{navigation.navigate("Timer")}}
          >
          <Text> Timer </Text>
          </AwesomeButton>
          <AwesomeButton type="secondary"
          onPress={()=>{navigation.navigate("Counter")}}
          >
          <Text> Counter </Text>
          </AwesomeButton>
          <AwesomeButton type="secondary"
          onPress={() => navigation.navigate("Settings")}
          >
          <Text> Settings </Text>
          </AwesomeButton>
          <AwesomeButton type="secondary"
          onPress={() => navigation.navigate("Statistics")}
          >
          <Text> Statistics </Text>
          </AwesomeButton>
        </View>
    )
}

const SettingsPage=()=>{
    return(
        <View>
            <Settings/>
        </View>
    )
}

const TimerPage=()=>{
    return(
        <View>
            <Timer/>
        </View>
    )
}

const StatsPage=()=>{
    return(
        <View>
            <Statistics/>
        </View>
    )
}

const OCD_helper=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={OCD_helper_main}/>
                <Stack.Screen name="Settings" component={SettingsPage}/>
                <Stack.Screen name="Timer" component={TimerPage}/>
                <Stack.Screen name="Statistics" component={StatsPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00e9ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginTop: 10,
        width: screen.width / 8,
        height: screen.width / 10,
        borderRadius: screen.width / 2

    }
});

export default OCD_helper




/*const MyApp = ({ mode }) => {
    if (mode == 'timer') {//timer mode
        return (
            <View>
                <Text>{mode}</Text>

                <Button title='switch to other mode' onPress={() => { actions.changeMode('counter') }} />
            </View>
        )
    }
    else {//counter mode
        return (
            <View>
                <TextInput style={{ backgroundColor: "blue", flex: 1, width: 50 }} onChangeText={(text) => { mySong = text }} />

                <Button title="switch to other mode" onPress={() => { (mode) => actions.changeMode('timer') }} />
            </View>
        )
    }
}*/


/*MyApp.propTypes = {
    mode: String
}

const OCD_helper = connect(mapStateToProps, actions)(MyApp)
*/