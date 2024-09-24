// components/PrimaryButton.js

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const PrimaryButton = ({ onPress, text }) => {
  // const {marginTop}=this.props
  return (
    <TouchableOpacity onPress={onPress} style={styles.primaryCont}>
      <Text style={styles.primary}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primaryCont: {
    backgroundColor: 'rgba(42, 123, 187, 1)',
    marginHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 8,
    // marginTop:{marginTop}
  },
  primary: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default PrimaryButton;
