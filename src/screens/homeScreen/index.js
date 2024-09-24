import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
  StatusBar,
  Modal,
} from 'react-native';
import React, {Component} from 'react';
import Icons from '../../assets';
import { Screen } from 'react-native-screens';

const windowWidth = Dimensions.get('window').width;

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      benefits: [
        {id: '1', title: 'Create Campaign', img: Icons.loud},
        {id: '2', title: 'One Time Trigger', img: Icons.clock2},
        {id: '3', title: 'Create Campaign', img: Icons.loud},
        {id: '4', title: 'One Time Trigger', img: Icons.clock2},
      ],
      products: [
        {
          id: '1',
          title: 'Successfully configured POS for sites',
          text: 'Jun 3, 2023 | 12:30 PM',
        },
        {
          id: '2',
          title: 'You ended the campaign Holiday Special',
          text: 'Jun 3, 2023 | 12:30 PM',
        },
        {
          id: '3',
          title: 'Created a campaign Holiday Special',
          text: 'Jun 3, 2023 | 12:30 PM',
        },
        {
          id: '4',
          title: 'Activated the user access group named Site manager',
          text: 'Jun 3, 2023 | 12:30 PM',
        },
        {
          id: '5',
          title: 'Added a discount code to a campaign named Holiday Special',
          text: 'Jun 3, 2023 | 12:30 PM',
        },
        {
          id: '6',
          title: 'Added a new customer C02039',
          text: 'Jun 3, 2023 | 12:30 PM',
        },
        {
          id: '7',
          title: 'Activated the user access group named Site Managers',
          text: 'Jun 3, 2023 | 12:30 PM',
        },
        {
          id: '8',
          title: 'Added a new customer C02039',
          text: 'Jun 3, 2023 | 12:30 PM',
        },
      ],

      showstartedModal: true,
    };
  }

  renderItem = ({item}) => (
    <View style={styles.unload}>
      <View style={styles.iage}>
        <Image source={item.img} />
      </View>
      {/* <Image source={Icons.white} style={styles.unloadImage} /> */}
      <View style={styles.titleview}>
        <Text style={styles.flattext}>{item.title}</Text>
      </View>
    </View>
  );
  renderItem1 = ({item}) => (
    <View style={styles.unload1}>
      <View>
        <Image source={Icons.person} />
      </View>
      {/* <Image source={Icons.white} style={styles.unloadImage} /> */}
      <View>
        <Text style={styles.flattext1}>{item.title}</Text>
        <Text style={styles.date}>{item.text}</Text>
      </View>
    </View>
  );
  separate = () => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          marginHorizontal: 16,
          borderColor: 'lightgrey',
        }}
      />
    );
  };

  handleRebuild = () => {
    this.props.navigation.reset({
      index: 0,
      routes: [{name: 'Splash'}],
    });
  };

  handleLogout = () => {
    //     this.props.navigation.reset({
    //         index: 0,
    //         routes: [{ name: 'Login' }]
    //    })
    this.props.navigation.navigate('Login');
  };
  handleModalClick = () => {
    this.setState({showstartModal: false});
    this.props.navigation.navigate('Phone');
  };

  render() {
    const {navigation} = this.props;
    const {showstartModal} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"  />
        <Modal
          transparent
          visible={showstartModal}
          animationType="slide"
          onRequestClose={() => this.setState({showstartModal: false})}
          >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Image source={Icons.phone} style={styles.img} />
              <View style={styles.cont}>
                <Text style={styles.accountText}>Secure your Account ?</Text>
                <Text style={styles.modalText}>
                  Setup two factor authentication to secure your account in just
                  two steps.
                </Text>
                <View style={styles.row}>
                  <Image source={Icons.call} />
                  <Text>Link your account with your phone number</Text>
                </View>
                <View style={styles.row}>
                  <Image source={Icons.keyboard} />
                  <Text>Enter the one-time passcode</Text>
                </View>
                <View style={styles.row}>
                  <Image source={Icons.secure} />
                  <Text>Secure your account</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.primaryCont}
                onPress={() => this.handleModalClick()}>
                <Text style={styles.primary}>Get Started</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <StatusBar barStyle="dark-content" />
        <View style={styles.upper}>
          <View>
            <Text style={styles.location}>Welcome</Text>
            <View style={styles.sub}>
              <TouchableOpacity style={{flexDirection: 'row'}}>
                <Text style={styles.sub2}>Kevin</Text>
                {/* <Image source={Icons.modalicon2} /> */}
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.topimgbox1, {marginLeft: 200}]}>
            <Image source={Icons.msg} style={styles.img4} />
          </View>
          <TouchableOpacity>
            <View style={[styles.topimgbox, {marginLeft: 11}]}>
              <Image source={Icons.bell} style={styles.img3} />
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <View style={styles.setup}>
            <View style={{flexDirection: 'row'}}>
              <Image source={Icons.setting}></Image>
              <View style={styles.subsetup}>
                <Text style={styles.completetext}>
                  Complete your account setup
                </Text>
                <Text style={styles.taptext}>Tap to continue</Text>
              </View>
            </View>
          </View>
          <Text style={styles.frequenttext}>FREQUENTY USED</Text>
          <FlatList
            bounces={false}
            horizontal
            data={this.state.benefits}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
          />
          <View style={styles.subview}>
            <Text style={styles.frequenttext}>RECENT ACTIVITIES</Text>
            <Text style={styles.producttext}>All Products ▼</Text>
          </View>
          <View style={styles.flatview2}>
            <FlatList
              bounces={false}
              data={this.state.products}
              renderItem={this.renderItem1}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={this.separate}
            />
          </View>
        </ScrollView>
        {/* <View style={styles.navBottom}>
          <TouchableOpacity>
            <Image source={Icons.lock} style={styles.bottomIcon} />
            <Text style={[styles.navText, {color: 'black'}]}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleRebuild}>
            <Image source={Icons.lock} style={styles.bottomIcon} />
            <Text style={styles.navText}>Rebuild</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleLogout}>
            <Image source={Icons.lock} style={styles.bottomIcon} />
            <Text style={styles.navText}>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Icons.lock} style={styles.bottomIcon} />
            <Text style={styles.navText}>ACCOUNT</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7EDf3',
  },
  upper: {
    backgroundColor: '#2A7BBB',
    height: windowWidth > 400 ? 123 : 100,
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderRadius: 1,
  },
  sub: {
    flexDirection: 'row',
  },
  sub2: {
    fontWeight: '500',
    color: 'white',
    fontSize: 22,
    marginBottom: 20,
    paddingLeft: 24,
  },
  img1: {
    width: 24,
    height: 24,
  },
  img2: {
    width: 40,
    height: 40,
    marginBottom: 22,
    marginLeft: 240,
  },
  img4: {
    width: 24,
    height: 24,
    marginBottom: 22,
    marginLeft: 240,
    position: 'absolute',
  },
  img3: {
    width: 24,
    height: 24,
    
  },
  location: {
    fontWeight: '300',
    fontSize: 18,
    color: 'white',
    paddingLeft: 24,
    // paddingBottom: 8,
  },
  setup: {
    height: windowWidth > 400 ? 75 : 85,
    backgroundColor: '#D9E2EE',
    borderWidth: 1,
    borderColor: '#e6edf3',
    justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 8,
    margin: 16,
    padding: 20,
  },
  subsetup: {
    marginLeft: 16,
  },
  completetext: {
    color: '#164061',
    fontWeight: '700',
    fontSize: 15,
  },
  taptext: {
    color: '#60707D',
    fontSize: 13,
    fontWeight: '500',
    marginTop: 7,
  },
  unload: {
    height: windowWidth > 400 ? 64 : 70,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    width: windowWidth > 400 ? 156 : 170,
    marginLeft: 16,
    marginTop: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  unload1: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    padding: 18,
  },
  subview: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  frequenttext: {
    marginLeft: 16,
    color: '#525454',
    fontSize: 13,
    fontWeight: '600',
  },
  producttext: {
    color: '#23679D',
    fontSize: 13,
    fontWeight: '600',
    paddingRight: 16,
  },
  iage: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#46A4BA',
    borderRadius: 50,
    margin: 12,
    padding: 8,
  },
  unloadImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  titleview: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flattext1: {
    color: '#0E1F2C',
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 12,
    width: 286,
    height: 40,
  },
  date: {
    color: '#85929C',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 1,
    marginLeft: 12,
  },
  flattext: {
    color: '#0E1F2C',
    fontWeight: '600',
    fontSize: 13,
    width: 72,
    height: 36,
  },
  flatview2: {
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
    backgroundColor: 'white',
  },

  navBottom: {
    height: windowWidth > 400 ? 94 : 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor: '#ffffff',
  },
  navText: {
    fontWeight: '500',
    color: '#8A91A5',
    marginBottom: 12,
  },
  bottomIcon: {
    height: 22,
    width: 22,
    alignSelf: 'center',
    marginBottom: 10,
  },



  topimgbox: {
    backgroundColor: 'rgba(217, 217, 217, 0.1)',
    height: windowWidth > 400 ? 45 : 40,
    width: windowWidth > 400 ? 45 : 40,
    borderRadius: 8,
    marginLeft: 20,
    marginBottom: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topimgbox1: {
    backgroundColor: 'rgba(217, 217, 217, 0.1)',
    height: windowWidth > 400 ? 45 : 40,
    width: windowWidth > 400 ? 45 : 40,
    borderRadius: 8,
    marginLeft: 20,
    marginBottom: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  

  
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  img: {
    alignSelf: 'center',
  },
  modalContainer: {
    height: '75%',
    backgroundColor: '#E6EDF3',
    borderRadius: 20,
    paddingVertical: 20,
  },
  accountText: {
    marginTop: 24,
    fontSize: 24,
    fontWeight: '700',
    color: '#0B1721',
  },
  modalText: {
    color: '#60707D',
    fontSize: 15,
    fontWeight: '400',
    marginTop: 6,
    marginBottom: 28,
  },
  primaryCont: {
    backgroundColor: 'rgba(42, 123, 187, 1)',
    alignItems: 'center',
    paddingVertical: 15,
    marginHorizontal: 24,
    marginTop: 36,
    borderRadius: 8,
  },
  primary: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  cont: {
    paddingHorizontal: 32,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Home;
