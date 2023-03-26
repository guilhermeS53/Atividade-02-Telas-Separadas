import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import style from './style';

const CalculateScreen = ({ route }) => {
  const { number } = route.params;
  const navigation = useNavigation();
  const [displayNumber, setDisplayNumber] = React.useState(number.toString());
  const [calculationResult, setCalculationResult] = React.useState(0);
  const [resultValue, setResultValue] = React.useState(parseInt(displayNumber));
  const [isAdding, setIsAdding] = React.useState(false);

  const handleAdditionPress = () => {
    setResultValue(parseInt(displayNumber) + parseInt(route.params.selectedValue));
    setIsAdding(true);
  };

  const handleSubtractionPress = () => {
    setResultValue(parseInt(displayNumber) - parseInt(route.params.selectedValue));
    setIsAdding(false);
  };

  const handleCalculatePress = () => {
    const result = parseInt(displayNumber) + parseInt(route.params.selectedValue);
    setCalculationResult(result);
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
        <Text style={{ fontWeight: 'bold' }}>{displayNumber}</Text>
        {'\n'}
        {isAdding ? 'You added' : 'You subtracted'}
        {route.params.selectedValue} a number to the chosen number
      </Text>

      <View style={style.button}>
        <Button
          title="Sum +1 Number"
          onPress={handleAdditionPress}
          disabled={!Number.isInteger(parseInt(displayNumber))}
          color="#107184"
        />
      </View>

      <View style={[style.button, { marginVertical: 20 }]}>
        <Button
          title="Subtract -1 Number"
          onPress={handleSubtractionPress}
          disabled={!Number.isInteger(parseInt(displayNumber))}
          color="#107184"
        />
      </View>

      <View style={style.button}>
        <Button
          title="Next Screen"
          onPress={handleCalculatePress}
          disabled={!Number.isInteger(parseInt(displayNumber))}
          color="#107184"
        />
      </View>
    </View>
  );
};

export default CalculateScreen;