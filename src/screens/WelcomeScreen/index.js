import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import style from './style';

const WelcomeScreen = ({ route }) => {
  const { username } = route.params;
  const navigation = useNavigation();
  const [number, setNumber] = React.useState('');

  const handleContinuePress = () => {
    navigation.navigate('Result', { number });
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Bem-vindo(a)</Text>
      <Text style={style.text}>Bem-vindo(a) {username} ao seu workspace</Text>
      <Text style={style.text}>Escolha um número de 1 a 10:</Text>
      <TextInput
        style={style.input}
        keyboardType="numeric"
        onChangeText={setNumber}
        value={number}
      />
      <View style={style.button}>
        <Button
          title="Continue"
          onPress={handleContinuePress}
          disabled={!Number.isInteger(Number(number)) || number < 1 || number > 10}
          color="#107184"
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;