// Importando as bibliotecas do React
import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import style from './style';

const WelcomeScreen = ({ route }) => {
  // Utilização do username para obtenção do que foi preenchido no InitialScreen
  const { username } = route.params;
  // useNavigation navega entre as telas normalmente
  const navigation = useNavigation();
  // Number é uma const que inicia vazia, pois será onde posteriormente contabilizará o valor inserido pelo usuário
  const [number, setNumber] = React.useState('');

  const handleContinuePress = () => {
    navigation.navigate('CalculateScreen', { number });
  };

  // No próprio código React Native, foi pensado que a condição de estar entre 1 a 10 deveria ser atendida, e então somente nesses parâmetros haverá liberação para prosseguir para a "Next Screen"
  return (
    <View style={style.container}>
      <Text style={[style.title, { textAlign: 'center' }]}>
        Hello again, User!
        {'\n'}
        It's a pleasure to see you :)
      </Text>
      <Text style={[style.text, { textAlign: 'center' }]}>
        Welcome to your WorkSpace, {username}
      </Text>
      <Text style={[style.text, { textAlign: 'center' }]}>
        Please, choose a number from 1 to 10
      </Text>

      <TextInput
        style={style.input}
        keyboardType="numeric"
        onChangeText={setNumber}
        value={number}
      />

      <View style={style.button}>
        <Button
          title="Access Next Screen"
          onPress={handleContinuePress}
          disabled={!Number.isInteger(Number(number)) || number < 1 || number > 10}
          color="#107184"
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;