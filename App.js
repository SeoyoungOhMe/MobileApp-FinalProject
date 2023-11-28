import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function StartScreen({ navigation }) {
  return (
    <View>
      <Text style={styles.title_st}>꼰대 테스트</Text>
      <View style={{height:50}}></View>
      <Button title="테스트 시작하기"
        onPress={ function(){ navigation.navigate('Test') } } />
    </View>
  );
}

function Question(props) {

  const [ count, setCount ] = useState(0);

  return (
    <View>
      <Text style={styles.text_st}>{props.content}</Text>
      <View style={{margin:10, flexDirection:"row"}}>
        <Button title="네"
          onPress={ function(){ setCount(count+1); } } />
        <Button title="아니요"
          onPress={ function(){  } } />  
      </View>
    </View>
  )
}

function TestScreen() {
  return (
    <View>
      <Question content="1. '나 정도면 꼰대 아니지 않나?'라는 생각을 한 적이 있다." />
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
  title_st: {
    fontSize:50, margin:10
  },
  text_st: {
    fontSize:30, margin:10
  },
});
