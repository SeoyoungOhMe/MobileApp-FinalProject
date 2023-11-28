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
      <Text style={styles.text_st}>1. 사생활 이야기도 인생 선배로서 답을 제시해 줄 수 있다.</Text>
      <View style={{margin:10, flexDirection:"row"}}>
        <Button title="네"
          onPress={ function(){ 
            setCount((prevCount) => {
              const updatedCount = prevCount + 1;
              navigation.navigate('Test2', { count: updatedCount });
              return updatedCount;
            });
          } } />
        <Button title="아니요"
          onPress={ function(){ 
            navigation.navigate('Test2', { count }); 
            } } />  
      </View>
    </View>
  );
}

function TestScreen2({ navigation, route }) {

  const { count } = route.params;
  const [count2, setCount2] = useState(count);

  return (
    <View>
      <Text style={styles.text_st}>2. 처음 만났지만 나보다 나이가 어리면 반말을 한다.</Text>
      <View style={{margin:10, flexDirection:"row"}}>
        <Button title="네"
          onPress={ function(){ 
            setCount2((prevCount) => {
              const updatedCount = prevCount + 1;
              navigation.navigate('Test3', { count2: updatedCount });
              return updatedCount;
            });
          } } />
        <Button title="아니요"
          onPress={ function(){ 
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
      <Text style={styles.text_st}>3. 나보다 늦게 출근하는 후배가 거슬린다.</Text>
      <View style={{margin:10, flexDirection:"row"}}>
        <Button title="네"
          onPress={ function(){ 
            setCount3((prevCount) => {
              const updatedCount = prevCount + 1;
              navigation.navigate('Test4', { count3: updatedCount });
              return updatedCount;
            });
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

  const { count3 } = route.params;
  const [count4, setCount4] = useState(count3);

  return (
    <View>
      <Text style={styles.text_st}>4. "우리 때는 안 그랬는데..." 싶을 때가 있다.</Text>
      <View style={{margin:10, flexDirection:"row"}}>
        <Button title="네"
          onPress={ function(){ 
            setCount4((prevCount) => {
              const updatedCount = prevCount + 1;
              navigation.navigate('Test5', { count4: updatedCount });
              return updatedCount;
            });
          } } />
        <Button title="아니요"
          onPress={ function(){ 
            navigation.navigate('Test5', { count4 } ); 
            } } />  
      </View>
    </View>
  );
}

function TestScreen5({ navigation, route }) {

  const { count4 } = route.params;
  const [count5, setCount5] = useState(count4);

  return (
    <View>
      <Text style={styles.text_st}>5. 후배들을 위한 충고도 그 후배가 잘 되길 바라는 마음으로 하는 말이다.</Text>
      <View style={{margin:10, flexDirection:"row"}}>
        <Button title="네"
          onPress={ function(){ 
            setCount5((prevCount) => {
              const updatedCount = prevCount + 1;
              navigation.navigate('Test6', { count5: updatedCount });
              return updatedCount;
            });
          } } />
        <Button title="아니요"
          onPress={ function(){ 
            navigation.navigate('Test6', { count5 } ); 
            } } />  
      </View>
    </View>
  );
}

function TestScreen6({ navigation, route }) {

  const { count5 } = route.params;
  const [count6, setCount6] = useState(count5);

  return (
    <View>
      <Text style={styles.text_st}>6. 일은 열심히 하다 보면 야근은 당연히 할 수 있다.</Text>
      <View style={{margin:10, flexDirection:"row"}}>
        <Button title="네"
          onPress={ function(){ 
            setCount6((prevCount) => {
              const updatedCount = prevCount + 1;
              navigation.navigate('Result', { count6: updatedCount });
              return updatedCount;
            });
          } } />
        <Button title="아니요"
          onPress={ function(){ 
            navigation.navigate('Result', { count6 } ); 
            } } />  
      </View>
    </View>
  );
}

function ResultScreen({ navigation, route }) {

  const { count6 } = route.params;

  if (count6 == 0) {
    navigation.navigate('MZ');
  } else if ( count6>0 && count6<=3) {
    navigation.navigate('Middle');
  } else {
    navigation.navigate('Absolute');
  }
}

function MZScreen(){
  return(
    <Text>당신은 MZ입니다</Text>
  )
}

function MiddleScreen(){
  return(
    <Text>당신은 잠재적 꼰대입니다</Text>
  )
}

function AbsoluteScreen(){
  return(
    <Text>당신은 완전 꼰대입니다</Text>
  )
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
        <Stack.Screen name="MZ" component={MZScreen} />
        <Stack.Screen name="Middle" component={MiddleScreen} />
        <Stack.Screen name="Absolute" component={AbsoluteScreen} />
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
