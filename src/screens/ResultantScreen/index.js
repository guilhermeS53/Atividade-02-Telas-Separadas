// Importando as bibliotecas do React
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import style from './style';

  // Definição da constante ResultantScreen da tela de resultados
const ResultantScreen = () => {
  // Esse useRoute é um hook que permitirá acesso à parâmetros que foram passados de outra tela, no caso CalculateScreen 
  const route = useRoute();
  // Coleta valores importantes da tela anterior para aí sim realizar a apresentação dos valores com base nas alterações feitas anteriormente (soma +1 ou subtrai -1)
  const { finalResult } = route.params;
  const navigation = useNavigation();
  // Definição de uma constante GoBack para redefinir a tela final, ou seja, voltar para a tela InitialScreen
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