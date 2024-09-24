import { StyleSheet } from "react-native";


export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#e7edf3',
      },
      header: {
        flexDirection: 'row',
        // backgroundColor:'red',
        justifyContent:'space-between'
      },
      back: {
        height: 48,
        width: 48,
        marginLeft: 25,
        marginTop: 66,
      },
     
      forgot: {
        marginLeft: 24,
        fontSize: 24,
        fontWeight: '700',
        // marginTop: -20,
        color: '#0b1721',
      },
      reset: {
        marginLeft: 24,
        marginTop: 8,
        color: '#4f5f72',
        fontSize: 15,
        fontWeight: '400',
      },
      inputview: {
        marginTop:35,
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 8,
        marginHorizontal:24,
        backgroundColor:'#ffffff',
        flexDirection:'row',
        paddingHorizontal:20,
        paddingVertical:15,
        alignItems:'center',
        // backgroundColor:'red'
      },
      textinput:{
       borderRightWidth:1,
       borderColor:'#E5E8EA',
    //    backgroundColor:'yellow',
       width:57,
       height:40,
       padding:5,
       justifyContent:'center',
       alignItems:'center',
       textAlign:'center',
       fontSize:16,
       fontWeight:'500'
      },
      errorInput: {
        borderColor: 'red',
        borderWidth:1,
      },
    errorText: {
         color: '#122636',
         fontWeight:'400',
        fontSize: 13,
        marginTop:5,
        marginLeft:4,
        marginRight:60
      },
      alert:{
       marginTop:6,
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
      forgottext:{
        marginTop:28,
        marginLeft:340,
        fontSize:14,
        fontWeight:'600',
        color:'#081017'
       },
       buttonView:{
        marginTop:38
    },



})