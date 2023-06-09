// Importando as bibliotecas do React
import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import style from './style';

  // Inserção da tela de cálculo, onde irá armazenar o valor inserido pelo usuário e executar os cálculos devidos
const CalculateScreen = ({ route }) => {
  const navigation = useNavigation();
  // Definirá abaixo o estado inicial do valor do resultado, a partir do que o usuário inseriu anteriormente 
  const [resultValue, setResultValue] = React.useState(parseInt(route.params.number));
  const [operationMessage, setOperationMessage] = React.useState('');

  // Os dois consts seguintes são referentes aos botões, respectivamente, de adição (soma) e também o de subtração
  const handleAdditionPress = () => {
    const newValue = resultValue + 1;
    setResultValue(newValue);
    setOperationMessage('You added a number to the chosen number');
  };

  const handleSubtractionPress = () => {
    const newValue = resultValue - 1;
    setResultValue(newValue);
    setOperationMessage('You subtracted a number to the chosen number');
  };
  // Função para fazer a navegação para a tela de ResultantScreen a partir dos resultados obtidos
  const handleCalculatePress = () => {
    const result = resultValue;
    navigation.navigate('ResultantScreen', { finalResult: result });
  };

  return (
    <View style={style.container}>
      <Text style={[style.title, { textAlign: 'center' }]}>
        Screen to Calculate!
        {'\n'}
        On this screen, you add a number or delete a number, dear user
      </Text>

      <Text style={[style.text, { textAlign: 'center' }]}>
        The number you selected on the previous screen is:
        {'\n'}
        <Text style={{ fontWeight: 'bold' }}>{route.params.number}</Text>
      </Text>

      <View style={style.button}>
        <Button
          title="Sum +1 Number"
          onPress={handleAdditionPress}
          color="#107184"
        />
      </View>

      <View style={[style.button, { marginVertical: 20 }]}>
        <Button
          title="Subtract -1 Number"
          onPress={handleSubtractionPress}
          color="#107184"
        />
      </View>

      <View style={style.button}>
        <Button
          title="Next Screen"
          onPress={handleCalculatePress}
          color="#107184"
        />
      </View>

      {operationMessage ? (
        <Text style={{ textAlign: 'center', marginVertical: 10 }}>
          {operationMessage}
        </Text>
      ) : null}
    </View>
  );
};

export default CalculateScreen;