import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, Image, TouchableOpacity,Modal } from 'react-native';
import Icons from '../../assets';
import PrimaryButton from '../../components/PrimaryButton';
import styles from './styles';
import { Screen } from 'react-native-screens';

class VerifyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: Array(6).fill(''), 
      attempts: 3, 
      errorMessage: '', 
      isModalVisible: false,
      verifiedModal:false,
      errorModal:false
    };
    this.inputRefs = Array(6).fill(0).map(() => React.createRef()); 
  }

  handleBack = () => {
    this.props.navigation.navigate('Phone');
  }

  handleForgot = () => {
   
  }

 
  handleSendLink = () => {
    const enteredCode = this.state.inputs.join('');
    const defaultCode = '111111'; 

    
    if (this.state.inputs.some(input => input === '')) {
      this.setState({ errorModal: true });
  
      setTimeout(() => {
        this.setState({ errorModal: false });
      }, 2000);
      return;
    }

    if (enteredCode !== defaultCode) {
      this.setState({ verifiedModal: true });
    } else {
      this.updateAttempts();
    }
  }

  updateAttempts = () => {
    this.setState((prevState) => {
      const remainingAttempts = prevState.attempts - 1;

      if (remainingAttempts === 0) {
       
        return { 
          attempts: remainingAttempts,
          isModalVisible: true,
          errorMessage: '' 
        };
      } else {
        
        return {
          attempts: remainingAttempts,
          errorMessage: `The code you entered is incorrect, you have ${remainingAttempts} attempts remaining.`
        };
      }
    });
  }
  handleModalClick=()=>{
    this.setState({isModalVisible:false});
    this.props.navigation.navigate('Login')
  }
  handleModalClick1=()=>{
    this.setState({verifiedModal:false});
    this.props.navigation.navigate('Phone', { faModal: true })
  }

  handleInputChange = (text, index) => {
    if (/^[0-9]$/.test(text) || text === '') { 
      const newInputs = [...this.state.inputs];
      newInputs[index] = text; 
      this.setState({ inputs: newInputs }, () => {
        if (text) {
        
          if (index < this.inputRefs.length - 1) {
            this.inputRefs[index + 1].current.focus();
          }
        } else if (index > 0 && !newInputs[index]) {
         
          this.inputRefs[index - 1].current.focus();
        }
      });
    }
  }

  render() {
    const inputCount = 6; 
    const{isModalVisible,verifiedModal,errorModal}=this.state

    return (
      <View style={styles.container}>
         <Modal
          transparent
          visible={isModalVisible}
          animationType="slide"
          onRequestClose={() => this.setState({ isModalVisible: false })}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Image source={Icons.locked}/>
              <Text style={styles.accountText}>Too many failed attempts</Text>
              <Text style={styles.modalText}>Your account has been locked, please try again in one hour.</Text>
              <TouchableOpacity style={styles.primaryCont} onPress={() => this.handleModalClick()}>
                <Text style={styles.primary}>Back to Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal
          transparent
          visible={verifiedModal}
          animationType="slide"
          onRequestClose={() => this.setState({ verifiedModal: false })}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Image source={Icons.verified}/>
              <Text style={styles.accountText}>Account Verified!</Text>
              <Text style={styles.modalText}>Your account has been verified successfully.</Text>
              <TouchableOpacity style={styles.primaryCont} onPress={() => this.handleModalClick1()}>
                <Text style={styles.primary}>Back to Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {errorModal && (
          <View style={styles.errorModal}>
            <View style={styles.modalview}>
              <Image style={styles.exclaim} source={Icons.exclaim} />
              <Text style={styles.errorModalText}>
                Invalid credentials. Please try again
              </Text>
            </View>
          </View>
        )}
        <View style={styles.header}>
          <TouchableOpacity onPress={this.handleBack}>
            <Image style={styles.back} source={Icons.back} />
          </TouchableOpacity>
          <Image style={styles.q2} source={Icons.q2} />
        </View>
        <View style={{ paddingRight: 80 }}>
          <Text style={styles.forgot}>Verify Account Access</Text>
          <Text style={styles.reset}>Enter the verification code sent to</Text>
        </View>

        <View style={
              this.state.errorMessage
                ? [styles.inputview, styles.errorInput]
                : styles.inputview
            }>
          {Array.from({ length: inputCount }).map((_, index) => (
            <TextInput
              key={index}
              ref={this.inputRefs[index]} 
              style={[
                styles.textinput,
                index === inputCount - 1 && { borderRightWidth: 0 }, 
              ]}
              keyboardType="numeric" 
              maxLength={1} 
              value={this.state.inputs[index]} 
              onChangeText={(text) => this.handleInputChange(text, index)} 
            />
          ))}
        </View>
        {this.state.errorMessage  ? (
            <View style={{flexDirection:'row'}}>
            <Image source={Icons.alert} style={styles.alert} />
            <Text style={styles.errorText}>{this.state.errorMessage }</Text>
            </View>
          ) : null}

        <TouchableOpacity onPress={this.handleForgot}>
          <Text style={styles.forgottext}>Resend</Text>
        </TouchableOpacity>
        <View style={styles.buttonView}>
          <PrimaryButton onPress={this.handleSendLink} text="Confirm Code" />
        </View>
      </View>
    );
  }
}

export default VerifyAccount;
