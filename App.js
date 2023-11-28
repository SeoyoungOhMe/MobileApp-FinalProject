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
        onPress={ function(){ navigation.navigate('Test1') } } />
    </View>
  );
}

function TestScreen1({ navigation }) {

  const [count, setCount] = useState(0);

  return (
    <View>
      <Text style={styles.text_st}>1. "나 정도면 꼰대 아니지 않아?"라고 생각한 적이 있다.</Text>
      <View style={{margin:10, flexDirection:"row"}}>
        <Button title="네"
          onPress={ function(){ setCount(count + 1); navigation.navigate('Test2', { count }); } } />
        <Button title="아니요"
          onPress={ function(){ navigation.navigate('Test2', { count }); } } />  
      </View>
    </View>
  );
}

function TestScreen2({ navigation, route }) {

  const { count } = route.params;
  const [count2, setCount2] = useState(count);

  return (
    <View>
      <Text>{count}</Text>
      <Text>{count2}</Text>

      <Text style={styles.text_st}>2. 처음 만났지만 나보다 나이가 어리면 반말을 한다.</Text>
      <View style={{margin:10, flexDirection:"row"}}>
        <Button title="네"
          onPress={ function(){ 
            setCount2(count2 + 1); 
            alert(count2);
            navigation.navigate('Test3', { count2 }); 
            } } />
        <Button title="아니요"
          onPress={ function(){ 
            alert(count2);
            navigation.navigate('Test3', { count2 } ); 
          } } />  
      </View>
    </View>
  );
}

function TestScreen3({ navigation, route }) {

  const { count2 } = route.params;
  const [count3, setCount3] = useState(count2);

  return (
    <View>
      <Text>{count2}</Text>
      <Text>{count3}</Text>

      <Text style={styles.text_st}>3. 내 의견과 반대되는 의견을 내는 사람이 못마땅하다.</Text>
      <View style={{margin:10, flexDirection:"row"}}>
        <Button title="네"
          onPress={ function(){ 
            alert(count);alert(count3);
            setCount3(count3 + 1); 
            navigation.navigate('Test4', { count3 }); 
          } } />
        <Button title="아니요"
          onPress={ function(){ 
            navigation.navigate('Test4', { count3 } ); 
            } } />  
      </View>
    </View>
  );
}

function TestScreen4({ navigation, route }) {
  return (
    <View>
      
    </View>
  );
}

function TestScreen5({ navigation, route }) {
  return (
    <View>
      
    </View>
  );
}

function TestScreen6({ navigation, route }) {
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
        <Stack.Screen name="Test1" component={TestScreen1} />
        <Stack.Screen name="Test2" component={TestScreen2} />
        <Stack.Screen name="Test3" component={TestScreen3} />
        <Stack.Screen name="Test4" component={TestScreen4} />
        <Stack.Screen name="Test5" component={TestScreen5} />
        <Stack.Screen name="Test6" component={TestScreen6} />
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
