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
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import colors from '../constants/colors';
import styles from './LoginStyles';
import {useDispatch, useSelector, Provider} from 'react-redux';
import {ApplicationState, onLogin} from '../../redux';
import { getUser } from '../../redux/reducer/user';
import store from '../../redux/store';

const Login = ({navigation}) => {
  const [hidePass, setHidePass] = useState(true);
  const [data, setData] = React.useState({
    isValidUser: true,
    isValidPassword: true,
    emailErrorMessage: '',
    passwordErrorMessage: '',
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleValidEmail = (val: string) => {
    if (val.length == 0) {
      console.log('empty email');
      setData({
        ...data,
        isValidUser: false,
        emailErrorMessage: 'Email Cannot be Empty',
      });
    } else if (!val.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      setData({
        ...data,
        isValidUser: false,
        emailErrorMessage: 'Invalid Email Format',
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
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
        isValidPassword: false,
        passwordErrorMessage:
          'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:',
      });
    } else {
      setData({
        ...data,
        isValidPassword: true,
        passwordErrorMessage: '',
      });
    }
  };
//saga implementation
const dispatch = useDispatch();




const user=useSelector((state)=>state.user.user);
console.log(typeof 'user')

const checkValidUser= async() =>{
  console.log("----------Login Page Console----------");
      dispatch(getUser(email,password));
}




  console.log('test');
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
            onEndEditing={e => handleValidEmail(e.nativeEvent.text)}
            onFocus={() => {
              data.isValidUser = true;
            }}
          />
          {data.isValidUser ? null : (
            <Text style={styles.errorMsg}>{data.emailErrorMessage}</Text>
          )}
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
            onEndEditing={e => handleValidPassword(e.nativeEvent.text)}
            onFocus={() => {
              data.isValidPassword = true;
            }}
          />
          {data.isValidPassword ? null : (
            <Text style={styles.errorMsg}>{data.passwordErrorMessage} </Text>
          )}

          <Button
            buttonStyle={styles.register}
            title="Login"
            onPress={checkValidUser }
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
