import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

var title_st = {fontSize:50, margin:10};


function StartScreen({ navigation }) {
  return (
    <View>
      <Text style={title_st}>꼰대 테스트</Text>
      <Button title="테스트 시작하기"
        onPress={ function(){ navigation.navigate('Test') } } />
    </View>
  );
}

function TestScreen() {
  return (
    <View>

    </View>
  );
}

function ResultScreen() {
  return (
    <View>

    </View>
  );
}




const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
