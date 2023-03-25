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
          title="Access Screen"
          onPress={handleContinuePress}
          disabled={!Number.isInteger(Number(number)) || number < 1 || number > 10}
          color="#107184"
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;