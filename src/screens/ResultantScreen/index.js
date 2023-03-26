import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import style from './style';

const ResultantScreen = () => {
  const route = useRoute();
  const { finalResult } = route.params;
  const navigation = useNavigation();

  const handleGoBackPress = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'InitialScreen' }],
    });
  };

  return (
    <View style={style.container}>
      <Text style={[style.title, { textAlign: 'center' }]}>Result Screen!</Text>
      <Text style={[style.text, { textAlign: 'center' }]}>The value result from the previous actions is:</Text>
      <Text style={[style.text, { textAlign: 'center' }]}>
        <Text style={{ fontWeight: 'bold' }}>{finalResult}</Text>
      </Text>
      <View style={style.button}>
        <Button title="Go To Initial Screen" onPress={handleGoBackPress} color="#107184" />
      </View>
    </View>
  );
};

export default ResultantScreen;