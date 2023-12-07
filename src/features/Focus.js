import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../utils/colors';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundButton';
import { spacing } from '../utils/sizes';

const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="What do you like to focus on?"
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => {
              addSubject(subject);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  text: {
    color: colors.white,
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  button: {
    justifyContent: 'center',
  },
  inputContainer: {
    padding: spacing.lg,
    flexDirection: 'row',
  },
});

export default Focus;
