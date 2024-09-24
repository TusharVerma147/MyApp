import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal
} from 'react-native';
import styles from './styles';
import Icons from '../../assets';
import CustomTextInput from '../../components/CustomTextInput';
import PrimaryButton from '../../components/PrimaryButton';
import { Screen } from 'react-native-screens';
class ResetScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordVisible1: false,
      password1: '',
      isTyping1: false,
      passwordVisible2: false,
      password2: '',
      passwordsMatch: true,
      showMatchModal:false,
      showUpdateModal:false
    };
  }

  handleBack = () => {
    this.props.navigation.navigate('Forget');
  };

  validatePassword = password => {
    const PasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return PasswordPattern.test(password);
  };

  handlePassChange1 = password => {
    this.setState({ password1: password, isTyping1: true }, () => {
      this.checkPasswordsMatch();
    });
  };

  handlePassChange2 = password => {
    this.setState({ password2: password }, () => {
      this.checkPasswordsMatch();
    });
  };

  passwordVisibility1 = () => {
    this.setState(prevState => ({
      passwordVisible1: !prevState.passwordVisible1,
    }));
  };

  passwordVisibility2 = () => {
    this.setState(prevState => ({
      passwordVisible2: !prevState.passwordVisible2,
    }));
  };

  checkPasswordsMatch = () => {
    const { password1, password2 } = this.state;
    this.setState({ passwordsMatch: password1 === password2 });
  };

  handleSubmit = () => {
    const { password1, password2, passwordsMatch } = this.state;

    // Check if both passwords are filled
    if (!password1 || !password2) {
      // Optionally, you can show an alert or a message to inform the user
      return;
    }
    if (!passwordsMatch) {
      this.setState({ showMatchModal: true });
      setTimeout(() => {
        this.setState({ showMatchModal: false });
      }, 3000);
    } else {
        this.setState({ showMatchModal: false, showUpdateModal:true });
    }
  };

  renderValidationIcons = () => {
    const { password1 } = this.state;
    const errors = {
      length: password1.length < 8,
      upperAndLower: !/[a-z]/.test(password1) || !/[A-Z]/.test(password1),
      number: !/\d/.test(password1),
      specialChar: !/[@$!%*?&]/.test(password1),
    };

    return (
      <View>
        <View style={styles.iconview}>
          <Image
            source={errors.length ? Icons.cross : Icons.check}
            style={styles.icon}
          />
          <Text style={styles.errorText}>8 characters or above</Text>
        </View>
        <View style={styles.iconview}>
          <Image
            source={errors.specialChar ? Icons.cross : Icons.check}
            style={styles.icon}
          />
          <Text style={styles.errorText}>1 or more special characters</Text>
        </View>
        <View style={styles.iconview}>
          <Image
            source={errors.number ? Icons.cross : Icons.check}
            style={styles.icon}
          />
          <Text style={styles.errorText}>1 or more numbers</Text>
        </View>
        <View style={styles.iconview}>
          <Image
            source={errors.upperAndLower ? Icons.cross : Icons.check}
            style={styles.icon}
          />
          <Text style={styles.errorText}>Upper and lowercase</Text>
        </View>
      </View>
    );
  };
  handleModalClick=()=>{
    this.setState({showLinkModal:false});
    this.props.navigation.navigate('Login')
  }

  render() {
    const {
      password1,
      passwordVisible1,
      isTyping1,
      password2,
      passwordVisible2,
      passwordsMatch,
      showMatchModal,
      showUpdateModal
    } = this.state;

    return (
      <View style={styles.container}>
        <Modal
          transparent
          visible={showUpdateModal}
          animationType="slide"
          onRequestClose={() => this.setState({ showUpdateModal: false })}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Image source={Icons.key}/>
              <Text style={styles.accountText}>Password Updated!</Text>
              <Text style={styles.modalText}>Your new password has been updated successfully.</Text>
              <TouchableOpacity style={styles.primaryCont} 
              onPress={() => this.handleModalClick()}
            //  
              >
                <Text style={styles.primary}>Back to Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
         {showMatchModal && (
          <View style={styles.errorModal}>
            <View style={styles.modalview}>
              <Image style={styles.exclaim} source={Icons.exclaim} />
              <Text style={styles.errorModalText}>Your password doesn't match</Text>
            </View>
          </View>
        )}
        <View style={styles.header}>
          <TouchableOpacity onPress={this.handleBack}>
            <Image style={styles.back} source={Icons.qblue} />
          </TouchableOpacity>
          <Image style={styles.q2} source={Icons.q2} />
        </View>
        <Text style={styles.forgot}>Reset Password</Text>
        <Text style={styles.reset}>Enter in your new password.</Text>
        <View style={styles.inputContainer}>
          <View style={!isTyping1 &&!passwordsMatch ?[styles.inputview1, styles.errorInput]:styles.inputview1}>
            <View style={styles.viewlock}>
            <Image source={Icons.lock} style={{ tintColor: !isTyping1 &&!passwordsMatch ? 'red' : '#46A4BA' }}   />
              <CustomTextInput
                placeholder="New Password"
                autoCapitalize="none"
                secureTextEntry={!passwordVisible1}
                value={password1}
                onChangeText={this.handlePassChange1}
                onFocus={() => this.setState({ isTyping1: true })}
                onBlur={() => this.setState({ isTyping1: false })}
              />
            </View>
            <TouchableOpacity onPress={this.passwordVisibility1}>
              <Image source={passwordVisible1 ? Icons.hide : Icons.eye} 
              style={{height:20,width:20}}/>
            </TouchableOpacity>
          </View>

          {isTyping1 && !passwordsMatch && this.renderValidationIcons()}

          <View style={!isTyping1 && !passwordsMatch ?[styles.inputview1, styles.errorInput]:styles.inputview1}>
            <View style={styles.viewlock}>
              <Image source={Icons.lock} style={{ tintColor: !isTyping1 && !passwordsMatch ? 'red' : '#46A4BA' }}   />
              <CustomTextInput
                placeholder="Confirm Password"
                autoCapitalize="none"
                secureTextEntry={!passwordVisible2}
                value={password2}
                onChangeText={this.handlePassChange2}
              />
            </View>
            <TouchableOpacity onPress={this.passwordVisibility2}>
              <Image source={passwordVisible2 ? Icons.hide : Icons.eye}
              style={{height:20,width:20}} />
            </TouchableOpacity>
          </View>

{/*          
          {password1 && (
            <View style={styles.iconview}>
              <Image
                source={passwordsMatch ? Icons.check : Icons.cross}
                style={styles.icon}
              />
              <Text style={styles.errorText}>
                {passwordsMatch ? "Passwords match" : "Passwords do not match"}
              </Text>
            </View>
          )} */}
        </View>
        <View style={styles.buttonView}>
          <PrimaryButton onPress={this.handleSubmit} text="Submit" />
        </View>
      </View>
    );
  }
}

export default ResetScreen;
