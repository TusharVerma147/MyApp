import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, Image, TouchableHighlight, TouchableOpacity, Alert, Modal } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import Icons from '../../assets';
import PrimaryButton from '../../components/PrimaryButton';
import styles from './styles';
import { Screen } from 'react-native-screens';
class PhoneNumberScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      countryCode: 'IN', 
      callingCode: '91',
      showErrorModal: false,
      faModal:false
    };
  }
  // componentDidMount() {
  //   const { route } = this.props;
  //   const faModal = route.params?.faModal || false; // Use optional chaining
  //   if (faModal) {
  //     this.setState({ faModal: true });
  //   }
  // }

  handlePhoneNumberChange = (phoneNumber) => {
    const digitsOnly = phoneNumber.replace(/[^0-9]/g, ''); 
    if (digitsOnly.length <= 10) {
      this.setState({ phoneNumber: digitsOnly });
    }
  };
  handleBack=()=>{
    // this.props.navigation.navigate('Home')
    this.setState({faModal:true})
  }

  handleCountrySelect = (country) => {
    this.setState({
      countryCode: country.cca2,
      callingCode: country.callingCode[0],
    });
  };

  handleSendCode = () => {
    const { phoneNumber, callingCode } = this.state;
    if (phoneNumber === '7088976440') {
      this.setState({ showErrorModal: true });
      
      setTimeout(() => {
        this.setState({ showErrorModal: false });
      }, 3000);
    }if(phoneNumber.length===10) {
      this.props.navigation.navigate('Verify')
    }
  };
  handleModalClick=()=>{
    this.setState({faModal:false});
    this.props.navigation.navigate('BottomTab')
  }
  // handleModalClick1=()=>{
  //   this.setState({verifiedModal:false});
  //   this.props.navigation.navigate('phonenumberScreen', { faModal: true })
  // }

  render() {
    const{showErrorModal,faModal}=this.state
    return (
      <View style={styles.container}>
        <Modal
          transparent
          visible={faModal}
          animationType="slide"
          onRequestClose={() => this.setState({faModal: false })}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Image source={Icons.fa}/>
              <Text style={styles.accountText}>Exit 2FA?</Text>
              <Text style={styles.modalText}>Are you sure you want to exit 2FA, You will need to redo it again.</Text>
              <View style={{flexDirection:'row'}}>
              <TouchableOpacity style={styles.primaryCont} onPress={() => this.setState({ faModal: false })}>
                <Text style={styles.primary}>No,Continue</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.primaryCont} onPress={() => this.handleModalClick()}>
                <Text style={styles.primary}>Yes, Exit</Text>
              </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        {showErrorModal && (
          <View style={styles.errorModal}>
            <View style={styles.modalview}>
              <Image style={styles.exclaim} source={Icons.exclaim} />
              <Text style={styles.errorModalText}>User exists. Try a different number</Text>
            </View>
          </View>
        )}
        <View style={styles.header}>
          <TouchableOpacity onPress={this.handleBack}>
            <Image style={styles.back} source={Icons.back} />
          </TouchableOpacity>
          <Image style={styles.q2} source={Icons.q2} />
        </View>
        <View style={{paddingRight:80}}>
        <Text style={styles.forgot}>Add Phone Number</Text>
        <Text style={styles.reset}>To initiate the two-factor authentication,provide your phone number below</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={styles.countrypick}>  
          <CountryPicker
            countryCode={this.state.countryCode}
            withFlag
            withCallingCode
            withFilter
            onSelect={this.handleCountrySelect}
            containerButtonStyle={styles.countryPicker}
          />
          </View>
         <View style={styles.inputContainer}>
          <Text style={styles.countryCode}>+{this.state.callingCode}</Text>
          <TextInput
            style={styles.phoneInput}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            value={this.state.phoneNumber}
            onChangeText={this.handlePhoneNumberChange}
          />
          </View>
          
        </View>
        <View style={styles.buttonView}>
          <PrimaryButton onPress={this.handleSendCode} text="Send Code" />
        </View>
      </View>
    );
  }
}



export default PhoneNumberScreen;
