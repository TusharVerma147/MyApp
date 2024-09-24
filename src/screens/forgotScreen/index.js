import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal, 
  Platform,
  KeyboardAvoidingView
} from 'react-native';
import styles from './styles';
import Icons from '../../assets';
import CustomTextInput from '../../components/CustomTextInput';
import PrimaryButton from '../../components/PrimaryButton';
import { Screen } from 'react-native-screens';

class ForgotScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailError: '',
      showErrorModal: false,
      showAttemptsModal: false,
      showLinkModal: false,
    };
  }

  validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  handleEmailChange = (email) => {
    if (this.validateEmail(email)) {
      this.setState({ email, emailError: '' });
    } else {
      this.setState({ email, emailError: 'Please enter a valid email address' });
    }
  };

  handleSendLink = () => {
    const { email, emailError } = this.state;
    if (!email) {
        this.setState({ emailError: 'Please fill in the email' });
        return; 
      }
    if (emailError) {
      this.setState({ showErrorModal: true });
      
      setTimeout(() => {
        this.setState({ showErrorModal: false });
      }, 3000);
    } else {

        this.setState({ showErrorModal: false, showLinkModal:true }); 
      
    }
  };

  handleBack = () => {
    this.props.navigation.navigate('Login');
  };

  handleModalClick=()=>{
    this.setState({showLinkModal:false});
    this.props.navigation.navigate('Reset')
  }

  render() {
    const { email, emailError, showErrorModal, showLinkModal } = this.state;

    return (
      <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.container}>
                   <Modal
          transparent
          visible={showLinkModal}
          animationType="slide"
          onRequestClose={() => this.setState({ showLinkModal: false })}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Image source={Icons.arrow}/>
              <Text style={styles.accountText}>Link Sent !</Text>
              <Text style={styles.modalText}>The link to reset your password has been sent on your email address.</Text>
              <TouchableOpacity style={styles.primaryCont} 
              onPress={() => this.handleModalClick()}
            //  
              >
                <Text style={styles.primary}>Back to Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {showErrorModal && (
          <View style={styles.errorModal}>
            <View style={styles.modalview}>
              <Image style={styles.exclaim} source={Icons.exclaim} />
              <Text style={styles.errorModalText}>Email not found. Contact admin.</Text>
            </View>
          </View>
        )}
        <View style={styles.header}>
          <TouchableOpacity onPress={this.handleBack}>
            <Image style={styles.back} source={Icons.back} />
          </TouchableOpacity>
          <Image style={styles.q2} source={Icons.q2} />
        </View>
        <Text style={styles.forgot}>Forgot Password</Text>
        <Text style={styles.reset}>Reset your password with just a few clicks</Text>
        <View style={emailError ? [styles.inputview, styles.errorInput] : styles.inputview}>
          <Image source={Icons.email} 
          style={{tintColor: emailError ?'red' :'#46A4BA'}}/>
          <CustomTextInput
            placeholder="Email Address"
            value={email}
            onChangeText={this.handleEmailChange}
          />
        </View>
        {emailError ?( 
           <View style={{flexDirection:'row'}}>
            <Image source={Icons.alert} style={styles.alert} />
          <Text style={styles.errorText}>{emailError}</Text> 
          </View>): null}
        <View style={styles.buttonView}>
          <PrimaryButton onPress={this.handleSendLink} text="Send Link" />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
export default ForgotScreen;