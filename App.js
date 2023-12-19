import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Dimensions, TouchableHighlight, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { width } = Dimensions.get('window');
const originalImageWidth = 2360;
const originalImageHeight = 1640;
const aspectRatio = originalImageWidth / originalImageHeight;
const imageHeight = width / aspectRatio;

function StartScreen({ navigation }) {
  return (
    <View style={{flex:1, alignItems: 'center', backgroundColor:'pink', }}>
      <View style={{height:50}}></View>
      <Text style={styles.title_st}>꼰대 테스트</Text>

      <View style={{height:50}}></View>
      <Image style={{width: width, height: imageHeight}} 
        source={require('./assets/startpage-img.png')} />

      <View style={{height:50}}></View>
      <TouchableOpacity style={styles.button_st} 
        onPress={function(){ navigation.navigate('Test1') } } >
        <Text style={{ fontSize: 50, color: 'white', padding: 10 }}>
          Test Start !
        </Text>
      </TouchableOpacity>
      
    </View>
  );
}

function TestScreen1({ navigation }) {

  const [count, setCount] = useState(0);

  return (
    <View style={{flex:1, alignItems: 'center', backgroundColor:'lightgray', }}>
      <View style={{height:50}}></View>
      <Text style={styles.text_st}>1. 사생활 이야기도 인생 선배로서 답을 제시해 줄 수 있다고 생각한다.</Text>
      
      <View style={{height:50}}></View>
      <Image style={{width: width, height: imageHeight}} 
        source={require('./assets/Q1.png')} />

      <View style={{height:70}}></View>
      <View style={{margin:10, flexDirection:"row"}}>

      <TouchableOpacity
        style={[styles.buttonContainer, { backgroundColor: 'blue' }]}
        onPress={ function(){ 
          setCount((prevCount) => {
            const updatedCount = prevCount + 1;
            navigation.navigate('Test2', { count: updatedCount });
            return updatedCount;
          });
        } } >
          <Text style={{ color:'white', fontSize: 30 }}>네</Text>
      </TouchableOpacity>

      <View style={{width:10}}></View>

      <TouchableOpacity
        style={[styles.buttonContainer, {backgroundColor: 'blue'}]}
        onPress={() => {
          setCount((prevCount) => {
            const updatedCount = prevCount + 0.5;
            navigation.navigate('Test2', {count: updatedCount});
            return updatedCount;
          });
        }}>

        <Text style={{color: 'white', fontSize: 30}}>보통</Text>
      </TouchableOpacity>

      <View style={{width:10}}></View>

        <TouchableOpacity
          style={[styles.buttonContainer, { backgroundColor: 'blue' }]}
          onPress={ function(){ 
            navigation.navigate('Test2', { count }); 
          } } >
            <Text style={{ color: 'white', fontSize: 30  }}>아니요</Text>
        </TouchableOpacity>  

      

      </View>
    </View>
  );
}

function TestScreen2({ navigation, route }) {

  const { count } = route.params;
  const [count2, setCount2] = useState(count);

  return (
    <View style={{flex:1, alignItems: 'center', backgroundColor:'pink', }}>
      <View style={{height:50}}></View>
      <Text style={styles.text_st}>2. 처음 만났지만 나보다 나이가 어리면 반말을 한다.</Text>
      
      <View style={{height:50}}></View>
      <Image style={{width: width, height: imageHeight}} 
        source={require('./assets/Q2.png')} />
      
      <View style={{height:70}}></View>
      <View style={{margin:10, flexDirection:"row"}}>

      <TouchableOpacity
        style={[styles.buttonContainer, { backgroundColor: 'blue' }]}
            onPress={ function(){ 
              setCount2((prevCount) => {
                const updatedCount = prevCount + 1;
                navigation.navigate('Test3', { count2: updatedCount });
                return updatedCount;
              });
            } } >
        <Text style={{ color:'white', fontSize: 30 }}>네</Text>
      </TouchableOpacity>

      <View style={{width:10}}></View>

      <TouchableOpacity
    style={[styles.buttonContainer, {backgroundColor: 'blue'}]}
    onPress={() => {
      setCount2((prevCount) => {
        const updatedCount = prevCount + 0.5;
        navigation.navigate('Test3', {count2: updatedCount});
        return updatedCount;
      });
    }}>
    <Text style={{color: 'white', fontSize: 30}}>보통</Text>
  </TouchableOpacity>

  <View style={{width: 10}}></View>

      <TouchableOpacity
          style={[styles.buttonContainer, { backgroundColor: 'blue' }]}
          onPress={ function(){ 
            navigation.navigate('Test3', { count2 } ); 
          } } > 
          <Text style={{ color: 'white', fontSize: 30  }}>아니요</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function TestScreen3({ navigation, route }) {

  const { count2 } = route.params;
  const [count3, setCount3] = useState(count2);

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor:'pink',  }}>
      <View style={{ height: 50 }}></View>
      <Text style={styles.text_st}>3. 나보다 늦게 출근하는 후배가 거슬린다.</Text>

      <View style={{ height: 50 }}></View>
      <Image style={{width: width, height: imageHeight}} 
        source={require('./assets/Q3.png')} />

      <View style={{ height: 70 }}></View>
      <View style={{margin:10, flexDirection:"row"}}>

      <TouchableOpacity
          style={[styles.buttonContainer, { backgroundColor: 'blue' }]}
          onPress={ function(){ 
            setCount3((prevCount) => {
              const updatedCount = prevCount + 1;
              navigation.navigate('Test4', { count3: updatedCount });
              return updatedCount;
            });
          } } >
          <Text style={{ color: 'white', fontSize: 30 }}>네</Text>
        </TouchableOpacity>

        <View style={{ width: 10 }}></View>

        <TouchableOpacity
          style={[styles.buttonContainer, { backgroundColor: 'blue' }]}
          onPress={() => {
            setCount3((prevCount) => {
              const updatedCount = prevCount + 0.5;
              navigation.navigate('Test4', { count3: updatedCount });
              return updatedCount;
            });
          }}>
          <Text style={{ color: 'white', fontSize: 30 }}>보통</Text>
        </TouchableOpacity>

        <View style={{ width: 10 }}></View>

        <TouchableOpacity
          style={[styles.buttonContainer, { backgroundColor: 'blue' }]}
          onPress={ function(){ 
            navigation.navigate('Test4', { count3 } ); 
            } } >
            <Text style={{ color: 'white', fontSize: 30 }}>아니요</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

function TestScreen4({ navigation, route }) {

  const { count3 } = route.params;
  const [count4, setCount4] = useState(count3);

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor:'skyblue', }}>
      <View style={{ height: 50 }}></View>
      <Text style={styles.text_st}>4. "우리 때는 안 그랬는데..." 싶을 때가 있다.</Text>
      
      <View style={{ height: 50 }}></View>
      <Image style={{width: width, height: imageHeight}} 
        source={require('./assets/Q4.png')} />
      
      <View style={{ height: 70 }}></View>
      <View style={{margin:10, flexDirection:"row"}}>

        <TouchableOpacity
          style={[styles.buttonContainer, { backgroundColor: 'blue' }]}
          onPress={ function(){ 
            setCount4((prevCount) => {
              const updatedCount = prevCount + 1;
              navigation.navigate('Test5', { count4: updatedCount });
              return updatedCount;
            });
          } } >
          <Text style={{ color: 'white', fontSize: 30 }}>네</Text>
        </TouchableOpacity>

        <View style={{ width: 10 }}></View>

        <TouchableOpacity
          style={[styles.buttonContainer, { backgroundColor: 'blue' }]}
          onPress={() => {
            setCount4((prevCount) => {
              const updatedCount = prevCount + 0.5;
              navigation.navigate('Test5', { count4: updatedCount });
              return updatedCount;
            });
          }}>
          <Text style={{ color: 'white', fontSize: 30 }}>보통</Text>
        </TouchableOpacity>

        <View style={{ width: 10 }}></View>

        <TouchableOpacity
          style={[styles.buttonContainer, { backgroundColor: 'blue' }]}
          onPress={ function(){ 
            navigation.navigate('Test5', { count4 } ); 
            } } >
            <Text style={{ color: 'white', fontSize: 30 }}>아니요</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

function TestScreen5({ navigation, route }) {

  const { count4 } = route.params;
  const [count5, setCount5] = useState(count4);

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor:'skyblue',  }}>
      <View style={{ height: 50 }}></View>
      <Text style={styles.text_st}>5. 후배들을 위한 충고도 그 후배가 잘 되길 바라는 마음으로 하는 말이다.</Text>
      
      <View style={{ height: 50 }}></View>
      <Image style={{width: width, height: imageHeight}} 
        source={require('./assets/Q5.png')} />
      
      <View style={{ height: 70 }}></View>
      <View style={{margin:10, flexDirection:"row"}}>

         <TouchableOpacity
          style={[styles.buttonContainer, { backgroundColor: 'blue' }]}
          onPress={ function(){ 
            setCount5((prevCount) => {
              const updatedCount = prevCount + 1;
              navigation.navigate('Test6', { count5: updatedCount });
              return updatedCount;
            });
          } } >
          <Text style={{ color: 'white', fontSize: 30 }}>네</Text>
        </TouchableOpacity>

        <View style={{ width: 10 }}></View>

        <TouchableOpacity
          style={[styles.buttonContainer, { backgroundColor: 'blue' }]}
          onPress={() => {
            setCount5((prevCount) => {
              const updatedCount = prevCount + 0.5;
              navigation.navigate('Test6', { count5: updatedCount });
              return updatedCount;
            });
          }}>
          <Text style={{ color: 'white', fontSize: 30 }}>보통</Text>
        </TouchableOpacity>

        <View style={{ width: 10 }}></View>

        <TouchableOpacity
          style={[styles.buttonContainer, { backgroundColor: 'blue' }]}
          onPress={ function(){ 
            navigation.navigate('Test6', { count5 } ); 
            } } >
            <Text style={{ color: 'white', fontSize: 30 }}>아니요</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

function TestScreen6({ navigation, route }) {

  const { count5 } = route.params;
  const [count6, setCount6] = useState(count5);

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor:'lightyellow',  }}>
      <View style={{ height: 50 }}></View>
      <Text style={styles.text_st}>6. 일은 열심히 하다 보면 야근은 당연히 할 수 있다.</Text>
      
      <View style={{ height: 50 }}></View>
      <Image style={{width: width, height: imageHeight}} 
        source={require('./assets/Q6.png')} />
      
      <View style={{ height: 70 }}></View>
      <View style={{margin:10, flexDirection:"row"}}>
        
      <TouchableOpacity
          style={[styles.buttonContainer, { backgroundColor: 'blue' }]}
          onPress={ function(){ 
            setCount6((prevCount) => {
              const updatedCount = prevCount + 1;
              navigation.navigate('Test7', { count6: updatedCount });
              return updatedCount;
            });
          } } >
          <Text style={{ color: 'white', fontSize: 30 }}>네</Text>
        </TouchableOpacity>

        <View style={{ width: 10 }}></View>

        <TouchableOpacity
          style={[styles.buttonContainer, { backgroundColor: 'blue' }]}
          onPress={() => {
            setCount6((prevCount) => {
              const updatedCount = prevCount + 0.5;
              navigation.navigate('Test7', { count6: updatedCount });
              return updatedCount;
            });
          }}>
          <Text style={{ color: 'white', fontSize: 30 }}>보통</Text>
        </TouchableOpacity>

        <View style={{ width: 10 }}></View>

        <TouchableOpacity
          style={[styles.buttonContainer, { backgroundColor: 'blue' }]}
          onPress={ function(){ 
            navigation.navigate('Test7', { count6 } ); 
            } } >
            <Text style={{ color: 'white', fontSize: 30 }}>아니요</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function TestScreen7({ navigation, route }) {

  const { count6 } = route.params;
  const [count7, setCount7] = useState(count6);

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor:'pink',  }}>
      <View style={{ height: 50 }}></View>
      <Text style={styles.text_st}>7. 휴가는 가더라도 카톡 답은 해야 한다.</Text>
      
      <View style={{ height: 50 }}></View>
      <Image style={{width: width, height: imageHeight}} 
        source={require('./assets/Q7.png')} />
      
      <View style={{ height: 70 }}></View>
      <View style={{margin:10, flexDirection:"row"}}>
        
      <TouchableOpacity
          style={[styles.buttonContainer, { backgroundColor: 'blue' }]}
          onPress={ function(){ 
            setCount7((prevCount) => {
              const updatedCount = prevCount + 1;
              navigation.navigate('Test8', { count7: updatedCount });
              return updatedCount;
            });
          } } >
          <Text style={{ color: 'white', fontSize: 30 }}>네</Text>
        </TouchableOpacity>

        <View style={{ width: 10 }}></View>

        <TouchableOpacity
          style={[styles.buttonContainer, { backgroundColor: 'blue' }]}
          onPress={() => {
            setCount7((prevCount) => {
              const updatedCount = prevCount + 0.5;
              navigation.navigate('Test8', { count7: updatedCount });
              return updatedCount;
            });
          }}>
          <Text style={{ color: 'white', fontSize: 30 }}>보통</Text>
        </TouchableOpacity>

        <View style={{ width: 10 }}></View>

        <TouchableOpacity
          style={[styles.buttonContainer, { backgroundColor: 'blue' }]}
          onPress={ function(){ 
            navigation.navigate('Test8', { count7 } ); 
            } } >
            <Text style={{ color: 'white', fontSize: 30 }}>아니요</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function TestScreen8({ navigation, route }) {

  const { count7 } = route.params;
  const [count8, setCount8] = useState(count7);

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor:'lightyellow',  }}>
      <View style={{ height: 50 }}></View>
      <Text style={styles.text_st}>8. 후배들에게 “나도 쿨하다”라고 어필한다.</Text>
      
      <View style={{ height: 50 }}></View>
      <Image style={{width: width, height: imageHeight}} 
        source={require('./assets/Q8.png')} />
      
      <View style={{ height: 70 }}></View>
      <View style={{margin:10, flexDirection:"row"}}>
        
      <TouchableOpacity
          style={[styles.buttonContainer, { backgroundColor: 'blue' }]}
          onPress={ function(){ 
            setCount8((prevCount) => {
              const updatedCount = prevCount + 1;
              navigation.navigate('Test9', { count8: updatedCount });
              return updatedCount;
            });
          } } >
          <Text style={{ color: 'white', fontSize: 30 }}>네</Text>
        </TouchableOpacity>

        <View style={{ width: 10 }}></View>

        <TouchableOpacity
          style={[styles.buttonContainer, { backgroundColor: 'blue' }]}
          onPress={() => {
            setCount8((prevCount) => {
              const updatedCount = prevCount + 0.5;
              navigation.navigate('Test9', { count8: updatedCount });
              return updatedCount;
            });
          }}>
          <Text style={{ color: 'white', fontSize: 30 }}>보통</Text>
        </TouchableOpacity>

        <View style={{ width: 10 }}></View>

        <TouchableOpacity
          style={[styles.buttonContainer, { backgroundColor: 'blue' }]}
          onPress={ function(){ 
            navigation.navigate('Test9', { count8 } ); 
            } } >
            <Text style={{ color: 'white', fontSize: 30 }}>아니요</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function TestScreen9({ navigation, route }) {

  const { count8 } = route.params;
  const [count9, setCount9] = useState(count8);

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor:'pink',  }}>
      <View style={{ height: 50 }}></View>
      <Text style={styles.text_st}>9. 더 나은 방법이 있더라도 기존의 방식을 고수하는 편이다.</Text>
      
      <View style={{ height: 50 }}></View>
      <Image style={{width: width, height: imageHeight}} 
        source={require('./assets/Q9.png')} />
      
      <View style={{ height: 70 }}></View>
      <View style={{margin:10, flexDirection:"row"}}>
        
      <TouchableOpacity
          style={[styles.buttonContainer, { backgroundColor: 'blue' }]}
          onPress={ function(){ 
            setCount9((prevCount) => {
              const updatedCount = prevCount + 1;
              navigation.navigate('Test10', { count9: updatedCount });
              return updatedCount;
            });
          } } >
          <Text style={{ color: 'white', fontSize: 30 }}>네</Text>
        </TouchableOpacity>

        <View style={{ width: 10 }}></View>

        <TouchableOpacity
          style={[styles.buttonContainer, { backgroundColor: 'blue' }]}
          onPress={() => {
            setCount9((prevCount) => {
              const updatedCount = prevCount + 0.5;
              navigation.navigate('Test10', { count9: updatedCount });
              return updatedCount;
            });
          }}>
          <Text style={{ color: 'white', fontSize: 30 }}>보통</Text>
        </TouchableOpacity>

        <View style={{ width: 10 }}></View>

        <TouchableOpacity
          style={[styles.buttonContainer, { backgroundColor: 'blue' }]}
          onPress={ function(){ 
            navigation.navigate('Test10', { count9 } ); 
            } } >
            <Text style={{ color: 'white', fontSize: 30 }}>아니요</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function TestScreen10({ navigation, route }) {

  const { count9 } = route.params;
  const [count10, setCount10] = useState(count9);

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor:'lightgray',  }}>
      <View style={{ height: 50 }}></View>
      <Text style={styles.text_st}>10. 예전에는 더 심했으니 참고 이겨내라는 말을 한 적이 있다.</Text>
      
      <View style={{ height: 50 }}></View>
      <Image style={{width: width, height: imageHeight}} 
        source={require('./assets/Q10.png')} />
      
      <View style={{ height: 70 }}></View>
      <View style={{margin:10, flexDirection:"row"}}>
        
      <TouchableOpacity
          style={[styles.buttonContainer, { backgroundColor: 'blue' }]}
          onPress={ function(){ 
            setCount10((prevCount) => {
              const updatedCount = prevCount + 1;
              navigation.navigate('Result', { count10: updatedCount });
              return updatedCount;
            });
          } } >
          <Text style={{ color: 'white', fontSize: 30 }}>네</Text>
        </TouchableOpacity>

        <View style={{ width: 10 }}></View>

        <TouchableOpacity
          style={[styles.buttonContainer, { backgroundColor: 'blue' }]}
          onPress={() => {
            setCount10((prevCount) => {
              const updatedCount = prevCount + 0.5;
              navigation.navigate('Result', { count10: updatedCount });
              return updatedCount;
            });
          }}>
          <Text style={{ color: 'white', fontSize: 30 }}>보통</Text>
        </TouchableOpacity>

        <View style={{ width: 10 }}></View>

        <TouchableOpacity
          style={[styles.buttonContainer, { backgroundColor: 'blue' }]}
          onPress={ function(){ 
            navigation.navigate('Result', { count10 } ); 
            } } >
            <Text style={{ color: 'white', fontSize: 30 }}>아니요</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


function ResultScreen({ navigation, route }) {

  const { count10 } = route.params;

  if ( count10>=0 && count10<=3 ) {
    navigation.navigate('MZ');
  } else if ( count10>3 && count10<=7) {
    navigation.navigate('Middle');
  } else {
    navigation.navigate('Absolute');
  }
}

function MZScreen(){
  return(
    <View style={{ flex: 1, alignItems: 'center', backgroundColor:'yellow', }}>
      <View style={{ height: 10 }}></View>
      <Text style={styles.title2_st}>당신은 MZ입니다.</Text>

      <View style={{ height: 10 }}></View>
      <Image style={{width: width, height: imageHeight}} 
        source={require('./assets/MZ.png')} />

      <View style={{ height: 20 }}></View>
      <Text style={styles.text_st}>
        당신은 격변하는 사회 속에서 적응하고 자신만의 영역을 확장해나가는 삶을 추구하는 사람입니다. 
        집단보다는 개인의 행복을, 소유보다는 공유를, 계획보다는 경험을 중시하죠.  
        변화를 추구하고 자유로움을 추구하며, 최신 트렌드를 주도하고 확산시키는 특징이 있습니다.
        또한 SNS를 기반으로 자신의 생각과 주장을 타인과 공유하고 강력한 영향력을 발휘합니다.
      </Text>
    </View>
  )
}

function MiddleScreen(){
  return(
    <View style={{ flex: 1, alignItems: 'center', backgroundColor:'pink',  }}>
      <View style={{ height: 10 }}></View>
      <Text style={styles.title2_st}>당신은 잠재적 꼰대입니다.</Text>

      <View style={{ height: 10 }}></View>
      <Image style={{width: width, height: imageHeight}} 
        source={require('./assets/Middle.png')} />

      <View style={{ height: 20 }}></View>
      <Text style={styles.text_st}>
        당신은 꼰대의 기질을 다분히 가지고 있는 사람입니다.
        새로운 아이디어와 트렌드에 따라가기는 하나, 적응하기 어려워하는 특징이 있습니다.
        또한 다른 사람들의 경험과 가치관을 이해하는 한편, 본인의 가치관을 강요하기도 합니다.
      </Text>
    </View>
  )
}

function AbsoluteScreen(){
  return(
    <View style={{ flex: 1, alignItems: 'center', backgroundColor:'orange', }}>
      <View style={{ height: 10 }}></View>
      <Text style={styles.title2_st}>당신은 완전 꼰대입니다.</Text>

      <View style={{ height: 10 }}></View>
      <Image style={{width: width, height: imageHeight}} 
        source={require('./assets/Absol.png')} />

      <View style={{ height: 20 }}></View>
      <Text style={styles.text_st}>
        당신은 꼰대일 가능성이 농후합니다.
        자신의 의견이나 가치관을 고집스럽게 지키고, 보수적인 태도를 유지하는 경향이 높을 수 있습니다.
        또는 새로운 아이디어나 문화적 트렌드에 대해 열린 태도를 가지지 않고 SNS 등에 거부감을 드러낼 수 있습니다.
        타인의 의견을 존중하고, 다른 세대와 소통하는 것이 필요합니다.
      </Text>
    </View>
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
        <Stack.Screen name="Test7" component={TestScreen7} />
        <Stack.Screen name="Test8" component={TestScreen8} />
        <Stack.Screen name="Test9" component={TestScreen9} />
        <Stack.Screen name="Test10" component={TestScreen10} />
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
    fontSize:50,
    margin:10,
    fontWeight: 'bold',
  },
  text_st: {
    fontSize:30, 
    margin:10,
    fontWeight: 'bold',
  },
  title2_st: {
    fontSize: 40,
    margin: 10,
  },
  button_st: {
    margin:10,
    fontSize:50,
    padding:10,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '80%', 
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height:40,
  },
});
