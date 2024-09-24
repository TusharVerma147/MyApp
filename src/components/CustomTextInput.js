import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

class CustomTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleChangeText = (text) => {
    this.setState({ text });
    const { onChangeText } = this.props;
    if (onChangeText) {
      onChangeText(text);
    }
  };

  render() {
    const { placeholder, secureTextEntry, value, style } = this.props;
    return (
      <View >
        <TextInput
          style={[styles.input, style]}
          placeholder={placeholder}
          placeholderTextColor={'#60707D'}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={this.handleChangeText}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    input:{
        fontSize:15,
        fontWeight:'500',
        paddingHorizontal:20
    },
   
  });

export default CustomTextInput;

