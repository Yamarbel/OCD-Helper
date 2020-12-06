  
import 'react-native-gesture-handler';
import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity,Dimensions, ImageBackground } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import rootReducer from './components/redux/reducers/rootReducer'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import Settings from './components/myComp/Settings'
import Statistics from './components/myComp/Statistics'
import CounterComp from './components/myComp/CounterComp'
import AwesomeButton from "react-native-really-awesome-button";
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import AwesomeButtonProgress from 'react-awesome-button/src/components/AwesomeButtonProgress';
import AwesomeButtonSocial from 'react-awesome-button/src/components/AwesomeButtonSocial';
import { createStackNavigator } from '@react-navigation/stack';
import TimerComp from './components/myComp/TimerComp';


const Stack = createStackNavigator();

const store = createStore(rootReducer)

const screen = Dimensions.get('window');

const App = ({ navigation }) => {

  return (
    <Provider store={store}>

      <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage2} 
        source ={require("./assets/Logo.png")}
        resizeMode = 'contain'>
      </ImageBackground>
        <AwesomeButtonRick 
        style={styles.buttonContainer}  
          type="primary"
          onPress={()=>{navigation.navigate("Timer")}}
          >
          Timer
          </AwesomeButtonRick>
          <AwesomeButtonRick
          style={styles.buttonContainer}   
          type="primary"
          onPress={()=>{navigation.navigate("Counter")}}
          >
          Counter
          </AwesomeButtonRick>
          <AwesomeButtonRick
          style={styles.buttonContainer}  
          type="primary"
          onPress={() => navigation.navigate("Settings")}
          >
          Settings
          </AwesomeButtonRick>
          <AwesomeButtonRick 
          style={styles.buttonContainer}  
          type="primary"
          onPress={() => navigation.navigate("Statistics")}>
          Statistics
          </AwesomeButtonRick>
      </View>

    </Provider>
  );
}

const SettingsPage = ({ navigation }) => {
  return (
    <View>
      <Settings />
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

const Counter=()=>{
  return(
    <View>
      <CounterComp/>
    </View>
  )
}

const Timer=()=>{
  return(
    <View>
      <TimerComp/>
    </View>
  )
}

const MyApp = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={App} />
          <Stack.Screen name="Settings" component={SettingsPage} />
          <Stack.Screen name="Statistics" component={StatsPage} />
          <Stack.Screen name="Counter" component={Counter} />
          <Stack.Screen name="Timer" component={Timer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000035',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Logo:{
  },
  Buttons: {
    borderRadius: 100,
    height: 50,
    width: 50,
    backgroundColor: "#aad3ea",
  },
  buttonContainer:
  {
    bottom: 150,
    marginTop: 20,
  },
  backgroundImage2:{
    flex: 1,
    marginLeft: 80,
    justifyContent: "center",
    alignItems: "center",
    width: '70%',
    height: '70%',
    opacity: 0.96
  },
});

export default MyApp