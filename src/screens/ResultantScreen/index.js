// Importando as bibliotecas do React
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from './style';

const ResultantScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { finalResult } = route.params;

  const resultantFinal = finalResult;

  const handleRestartPress = () => {
    navigation.popToTop();
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { textAlign: 'center' }]}>
        Resultant Screen
        {'\n'}
      </Text>

      <Text style={[styles.text, { textAlign: 'center' }]}>
        The result is:
        {'\n'}
        <Text style={{ fontWeight: 'bold' }}>{resultantFinal}</Text>
      </Text>

      <View style={styles.button}>
        <Button title="Go To InitialScreen" onPress={handleRestartPress} color="#107184" />
      </View>
    </View>
  );
};

export default ResultantScreen;
