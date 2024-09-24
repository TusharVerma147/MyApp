import { StyleSheet } from "react-native";



export default StyleSheet.create({
    container: {
      flex: 1,
    },

    header:{
        flex:3,
        // backgroundColor:'red'
    },
    footer:{
        flex:4,
        backgroundColor:'#e7edf3'

    },
    landingpage1:{
       width:'100%',
       height:'100%'
    },
    white1:{
        width:82,
        height:55,
        position:'absolute',
        marginTop:93,
        marginLeft:30
    },
    quiv:{
        resizeMode:'contain',
        width:290,
        height:64,
        position:'absolute',
        marginTop:176,
        marginLeft:30
    },
    line:{
        resizeMode:'contain',
        marginTop:270,
        marginLeft:30,
        width:71,
        height:3,
        position:'absolute'
    },
    flat:{
     position:'absolute'
    },
    sub:{
        // resizeMode:'contain',
        width:393,
        height:34,
        position:'absolute',
        marginTop:320,
        marginLeft:15
    },
    sign:{
       marginLeft:30,
       marginTop:32,
    },
    inputContainer: {
        marginTop: 27,
        marginHorizontal: 24,
      },
    inputview: {
        marginTop:27,
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 8,
        marginHorizontal:24,
        backgroundColor:'#ffffff',
        flexDirection:'row',
        padding:15,
        alignItems:'center'
      },
    inputview1: {
      marginTop:27,
      borderColor: '#ffffff',
      borderWidth: 1,
      borderRadius: 8,
      marginHorizontal:24,
      justifyContent:'space-between',
      backgroundColor:'#ffffff',
      flexDirection:'row',
      alignItems:'center',
      padding:15,
    },
    // input:{
    //     flex:12,
    //     fontSize:15,
    //     fontWeight:'500',
    //     paddingHorizontal:20
    // },
    viewlock:{
    flex: 2, flexDirection: 'row', alignItems: 'center'
    },
    // image:{
    //     flex:1,
    //     resizeMode:'contain',
    //     backgroundColor:'red'
    // },
    forgottext:{
     marginTop:28,
     marginLeft:282,
     fontSize:14,
     fontWeight:'600',
     color:'#081017'
    },
    buttonView:{
        marginTop:38
    },
    errorInput: {
        borderColor: 'red',
        borderWidth:1,
      },
    errorText: {
        // color: 'red',
        fontSize: 12,
        marginTop:5,
        marginLeft:4
      },
      alert:{
       marginTop:5,
       marginLeft:32
      },
      errorModal: {
        position: 'absolute',   
        marginTop: 93,             
        left: 0,
        right: 0,
        backgroundColor: '#F04438',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        zIndex: 999,            
      },
      modalview:{
        flexDirection:'row',
        alignItems: 'center',
      },
      exclaim:{
        marginLeft:-55,
        marginRight:10
      },
      errorModalText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
      },
      modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContainer: {
        width: 346,
        height: 300,
        backgroundColor: 'white',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal:60
      },
      accountText:{
        marginTop:16,
        textAlign: 'center',
        fontSize:20,
        fontWeight:'700',
        color:'#0B1721'
      },
      modalText: {
        color:'#60707D',
        textAlign: 'center',
        fontSize:13,
        fontWeight:'400',
        marginTop:6,
        marginBottom: 28,
      },
      primaryCont: {
        backgroundColor: 'rgba(42, 123, 187, 1)',
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal:20,
        borderRadius: 8,
        // marginTop:{marginTop}
      },
      primary: {
        color: 'white',
        fontWeight: '600',
        fontSize: 14,
      },
});