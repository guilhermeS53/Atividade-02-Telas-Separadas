import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import style from './style';

const ResultantScreen = () => {
  const route = useRoute();
  const { finalResult } = route.params;
  const operationMessage = finalResult >= 0 ? 'added' : 'subtracted';
  const message = `You ${operationMessage} 1 to the chosen number. The result is:`;

  return (
    <View style={style.container}>
      <Text style={[style.title, { textAlign: 'center' }]}>Result Screen!</Text>
      <Text style={[style.text, { textAlign: 'center' }]}>
        {message}
        {'\n'}
        <Text style={{ fontWeight: 'bold' }}>{finalResult}</Text>
      </Text>
    </View>
  );
};

export default ResultantScreen;