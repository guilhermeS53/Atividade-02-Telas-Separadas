import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

export default function InitialScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState('');

  const handleContinuePress = () => {
    console.log('username:', username);
    navigation.navigate('WelcomeScreen', { username });
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { textAlign: 'center' }]}>
        Hello, User :)
        {'\n'}
        Welcome back!
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TouchableOpacity style={styles.button} onPress={handleContinuePress}>
        <Text style={styles.buttonText}>Access</Text>
      </TouchableOpacity>
    </View>
  );
}