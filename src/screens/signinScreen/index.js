import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  ImageBackground,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Modal,
} from 'react-native';
import styles from './styles';
import Icons from '../../assets';
import CustomTextInput from '../../components/CustomTextInput';
import PrimaryButton from '../../components/PrimaryButton';
import BottomTab from '../../navigator/Bottomtab';
import { Screen } from 'react-native-screens';
import { ScreenNames } from '../../navigator/screenNames';

class SigninScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordVisible: false,
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
      showErrorModal: false,
      showAttemptsModal: false,
      failedAttempts: 0,
      benefits: [
        {id: '1', title: 'Explore Lounge Benefits'},
        {id: '2', title: 'Explore Lounge Benefits'},
        {id: '3', title: 'Explore Lounge Benefits'},
      ],
    };
  }
  // handleSignIn = () => {
  //   const {email, password} = this.state;
  //   console.log('Email:', email);
  //   console.log('Password:', password);
  // };

  handleInputChange = (field, value) => {
    if (field === 'email') {
      this.setState({email: value}, () => {
        this.validateEmail(value);
        // this.checkFormFilled();
      });
    } else if (field === 'password') {
      this.setState({password: value}, () => {
        this.validatePassword(value);
        // this.checkFormFilled();
      });
    }
  };

  validateEmail = email => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.setState({
      emailError: emailPattern.test(email)
        ? ''
        : 'Invalid email address entered',
    });
  };
  // <Image source={Icons.exclaim1} />
  validatePassword = password => {
    this.setState({
      passwordError:
        password.length >= 6 ? '' : 'Password must be at least 6 characters',
    });
  };
  handleSendLink = () => {
    const {emailError, passwordError, email, password, failedAttempts} =
      this.state;

    this.validateEmail(email);
    this.validatePassword(password);

    if (emailError || passwordError || !email || !password) {
      this.setState({failedAttempts: failedAttempts + 1});

      if (failedAttempts >= 3) {
        this.setState({showAttemptsModal: true});
      } else {
        this.setState({showErrorModal: true});
        setTimeout(() => {
          this.setState({showErrorModal: false});
        }, 3000);
      }
    } else {
      this.setState({showErrorModal: false, failedAttempts: 0});
      this.props.navigation.navigate('BottomTab');
    }
  };


  handleModalClick = () => {
    this.setState({showAttemptsModal: false});
    this.props.navigation.navigate('BottomTab');
  };
  handleForgot = () => {
    this.props.navigation.navigate('Forget');
  };

  passwordVisibility = () => {
    this.setState(prevState => ({
      passwordVisible: !prevState.passwordVisible,
    }));
  };
  renderItem = ({item}) => (
    // <View style={styles.exploreview}>
    //   <Text>{item.title}</Text>
    // </View>
    <Image style={styles.sub} source={Icons.sub} />
  );

  render() {
    const {navigation} = this.props;
    const {
      email,
      password,
      passwordVisible,
      emailError,
      passwordError,
      showErrorModal,
      showAttemptsModal,
    } = this.state;
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <Modal
          transparent
          visible={showAttemptsModal}
          animationType="slide"
          onRequestClose={() => this.setState({showAttemptsModal: false})}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Image source={Icons.modalock} />
              <Text style={styles.accountText}>Account Locked</Text>
              <Text style={styles.modalText}>
                Your account has been locked due to too many failed attempts.
                Please try again after some time.
              </Text>
              <TouchableOpacity
                style={styles.primaryCont}
                onPress={() => this.setState({showAttemptsModal: false})}>
                <Text style={styles.primary}>Okay</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {showErrorModal && (
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
          <ImageBackground
            style={styles.landingpage1}
            source={Icons.landingpage1}
          />
          <Image style={styles.white1} source={Icons.white1} />

          <Image style={styles.quiv} source={Icons.quiv} />
          <Image style={styles.line} source={Icons.line} />
          <FlatList
            horizontal
            data={this.state.benefits}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
          <Image style={styles.sub} source={Icons.sub} />
        </View>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.footer}>
            <Image style={styles.sign} source={Icons.sign} />
            <View
              style={
                emailError
                  ? [styles.inputview, styles.errorInput]
                  : styles.inputview
              }>
              <Image
                source={Icons.email}
                style={{tintColor: emailError ? 'red' : '#46A4BA'}}
              />
              <CustomTextInput
                placeholder="Email Address"
                autoCapitalize="none"
                value={email}
                onChangeText={value => this.handleInputChange('email', value)}
              />
            </View>
            {emailError ? (
              <View style={{flexDirection: 'row'}}>
                <Image source={Icons.alert} style={styles.alert} />
                <Text style={styles.errorText}>{emailError}</Text>
              </View>
            ) : null}

            <View
              style={
                passwordError
                  ? [styles.inputview1, styles.errorInput]
                  : styles.inputview1
              }>
              <View style={styles.viewlock}>
                <Image
                  source={Icons.lock}
                  style={{tintColor: passwordError ? 'red' : '#46A4BA'}}
                />
                <CustomTextInput
                  placeholder="Password"
                  autoCapitalize="none"
                  secureTextEntry={!passwordVisible}
                  value={password}
                  onChangeText={value =>
                    this.handleInputChange('password', value)
                  }
                />
              </View>
              <TouchableOpacity onPress={this.passwordVisibility}>
                <Image
                  source={passwordVisible ? Icons.hide : Icons.eye}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            </View>
            {passwordError ? (
              <View style={{flexDirection: 'row'}}>
                <Image source={Icons.alert} style={styles.alert} />
                <Text style={styles.errorText}>{passwordError}</Text>
              </View>
            ) : null}
            <TouchableOpacity onPress={this.handleForgot}>
              <Text style={styles.forgottext}>Forgot Password</Text>
            </TouchableOpacity>


            <View style={styles.buttonView}>
              <PrimaryButton onPress={this.handleSendLink} text="Primary" />
            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default SigninScreen;
