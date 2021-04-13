import { StyleSheet } from "react-native";
// import {colors} from '../../constants/colors'
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    inner: {
      padding: 24,
      flex: 1,
      justifyContent: "space-around",
    },
    header: {
      fontSize: 36,
      marginBottom: 48,
    },
    logo: {
      alignSelf: "center",
    },
    textInput: {
      height: 40,
      borderColor: "#000000",
      borderBottomWidth: 1,
      marginBottom: 36,
    },
    btnContainer: {
      backgroundColor: "#bf2957",
      width: "90%",
      alignSelf: "center",
      borderRadius: 50,
      //backgroundColor: "white",
      marginTop: 12,
    },
    register: {
      marginTop: 10,
      backgroundColor: "#bf2957",
      width: "90%",
      alignSelf: "center",
      borderRadius: 100,
    },
    errorMsg:{
        marginLeft:"3%",
        color:"red",
    }, signInText: {
      fontWeight: 'bold',
      color: 'blue',
      textDecorationLine: 'underline',
      alignSelf: 'flex-end',
    },
  });
  export default styles;