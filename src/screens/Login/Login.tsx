import React from 'react';
import {useState, useEffect} from 'react';
import {
  Image,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import colors from '../constants/colors';
import styles from './LoginStyles';
import {useDispatch, useSelector, Provider} from 'react-redux';
import { getUser } from '../../redux/reducer/user';
import store from '../../redux/store';
import * as Keychain from 'react-native-keychain';
import { NavigateNextTwoTone } from '@material-ui/icons';

const Login = ({navigation}) => {
  const [hidePass, setHidePass] = useState(true);
  const [data, setData] = React.useState({
    showEmailErrorMsg:false,
    showPasswordErrorMsg:false,
    isValidEmail: false,
    isValidPassword: false,
    emailErrorMessage: '',
    passwordErrorMessage: '',
    showValidCredentialsMsg:false,
    isLoading:false
    });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleValidEmail = (val: string) => {
    if (val.length == 0) {
      console.log('empty email');
      setData({
        ...data,
        showEmailErrorMsg:true,
        isValidEmail: false,
        emailErrorMessage: 'Email Cannot be Empty',
      });
    } else if (!val.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      setData({
        ...data,
        showEmailErrorMsg:true,
        isValidEmail: false,
        emailErrorMessage: 'Invalid Email Format',
      });
    } else {
      setData({
        ...data,
        showEmailErrorMsg:false,
        isValidEmail: true,
        emailErrorMessage: '',
      });
    }
  };

  //validating password front end
  const handleValidPassword = (val: string) => {
    if (val.length == 0) {
      console.log('Password cannot be Empty');
      setData({
        ...data,
        showPasswordErrorMsg:true,
        isValidPassword: false,
        passwordErrorMessage: 'Password cannot be Empty',
      });
    } else if (
      !val.match(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      )
    ) {
      setData({
        ...data,
        showPasswordErrorMsg:true,
        isValidPassword: false,
        passwordErrorMessage:
          'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:',
      });
    } else {
      setData({
        ...data,
        showPasswordErrorMsg:false,
        isValidPassword: true,
        passwordErrorMessage: '',
      });
    }
  };
//saga implementation
const dispatch = useDispatch();

const user=useSelector((state)=>state.user.user);



   function  checkValidUser(){ 
       data.isLoading=true;
       const temp= dispatch(getUser(email,password));
       setTimeout(function(){
      console.log("---------login-page-------");
       console.log("-----return dispatch----",user);
       const credentials= Keychain.getGenericPassword();
       console.log("-----this is credentials-----",credentials)
       console.log(credentials);
       if(!user)
       {
        data.isLoading=false;
        data.showValidCredentialsMsg=true
         
       }
       else
       {
        navigation.navigate('Homescreen');
       }

       }, 500); 
}
async function logOut(){
  await Keychain.resetGenericPassword();
 }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Image style={styles.logo} source={require('../../images/logo.png')} />
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
      <View style={styles.inner}>
        <View>
          <Input
            accessibilityLabel="Please Enter your Email"
            placeholder="Enter Your Email"
            leftIcon={<Icon name="mail" size={24} color="#bf2957" />}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType={'email-address'}
            onChangeText={setEmail}
            onChange={e => handleValidEmail(e.nativeEvent.text)}
            onFocus={() => {
              data.isValidEmail = true;
            }}
          />
          {data.showEmailErrorMsg ? (
            <Text style={styles.errorMsg}>{data.emailErrorMessage}</Text>
          ) : null }
          <Input
            accessibilityLabel="Please Enter your password"
            placeholder="Password"
            secureTextEntry={hidePass ? true : false}
            leftIcon={<Icon name="lock" size={24} color="#bf2957" />}
            rightIcon={
              <Icon
                name={hidePass ? 'visibility-off' : 'visibility'}
                size={25}
                color="#bf2957"
                onPress={() => setHidePass(!hidePass)}
              />
            }
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={setPassword}
            onChange={e => handleValidPassword(e.nativeEvent.text)}
            onFocus={() => {  
              data.isValidPassword = true;
            }}
          />
          {data.showPasswordErrorMsg ? (
            <Text style={styles.errorMsg}>{data.passwordErrorMessage} </Text>
          ) : null }
          {data.showValidCredentialsMsg ? (
            <Text style={styles.errorMsg}>Invalid UserName or Passowrd</Text>
          ) : null }
          <Button
            disabled={(data.isValidEmail && data.isValidPassword)?false:true}

            buttonStyle={styles.register}
            title="Login"
            loading={data.isLoading}
            onPress={checkValidUser }
           //onPress={()=>navigation.navigate('Homescreen')}
          />
           <Button
            buttonStyle={styles.register}
            title="Logout"
            onPress={logOut}
           //onPress={()=>navigation.navigate('Homescreen')}
          />
        </View>

        <Text>
            Dont have an Account?
            <TextInput
              style={styles.signInText}
              onPressIn={()=>navigation.navigate('Register')}>
              Create Account
            </TextInput>
          </Text>
      </View>

      {/* </TouchableWithoutFeedback>*/}
    </KeyboardAvoidingView>
  );
};

export default Login;
