import { StyleSheet } from "react-native";



export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor:'#2A7BBB'
      },
      tinyLogo: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
        // marginBottom: 20,
      },
      tinyLogo1: {
        height: 250,
        width: 250,
        resizeMode: 'contain', 
        marginBottom:-70
      
      },
      title: {
        fontSize: 24,
        color:'#ffffff',
        marginBottom:50
      },
      content: {
        fontSize: 16,
        marginBottom: 40,
        textAlign: 'center',
        
      },
      primaryCont: {
        backgroundColor: 'white',
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal:15,
        borderRadius: 8,
        // marginTop:{marginTop}
      },
      primary: {
        color: '#2A7BBB',
        fontWeight: '600',
        fontSize: 20,
      },
      
});