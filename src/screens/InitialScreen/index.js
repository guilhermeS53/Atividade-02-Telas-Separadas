// Importação das bibliotecas do React
import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style'

export default function InitialScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState('');

  const handleContinuePress = () => {
    console.log('username:', username);
    navigation.navigate('Welcome', { username });
  };

  return (
    <View>
      <Text>Bem-vindo(a) de volta!</Text>
      <TouchableOpacity onPress={handleContinuePress}>
        <Text>Avançar</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Insira seu nome de usuário"
        onChangeText={text => setUsername(text)}
        value={username}
      />
    </View>
  );
}
