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
import styles from './RegisterStyles';
import {useDispatch, useSelector, Provider} from 'react-redux';
//import {ApplicationState, onLogin} from '../../redux';
import {registerUser} from '../../redux/reducer/register';
const Register = ({navigation}) => {
  const [hidePass, setHidePass] = useState(true);
  const [data, setData] = React.useState({
    showEmailErrorMsg: false,
    showFNameErrorMsg: false,
    showLNameErrorMsg: false,
    showPassowordErrorMsg: false,
    showConfirmPasswordErrorMsg: false,
    isValidEmail: false,
    isValidPassword: false,
    isValidConfirmPassowrd: false,
    isValidFName: false,
    isValidLName: false,
    emailErrorMessage: '',
    passwordErrorMessage: '',
    confirmPasswordErrorMsg: '',
    FnameErrorMsg: '',
    LNameErrorMsg: '',
    isDuplicateUser:false,
    duplicateUserErrorMsg:''
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');

  const handleValidEmail = (val: string) => {
    if (val.length == 0) {
      console.log('empty email');
      setData({
        ...data,
        showEmailErrorMsg: true,
        isValidEmail: false,
        emailErrorMessage: 'Email Cannot be Empty',
      });
    } else if (!val.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      setData({
        ...data,
        showEmailErrorMsg: true,
        isValidEmail: false,
        emailErrorMessage: 'Invalid Email Format',
      });
    } else {
      setData({
        ...data,
        showEmailErrorMsg: false,
        isValidEmail: true,
        emailErrorMessage: '',
      });
    }
  };
  const handelFName = val => {
    if (val.length == 0) {
      setData({
        ...data,
        isValidFName: false,
        showFNameErrorMsg:true,
        FnameErrorMsg: 'First Name cannot be Empty',
      });
    }
    else{
      setData({
        ...data,
        isValidFName: true,
        showFNameErrorMsg:false,
        FnameErrorMsg: '',
      });
    }
  }
    const handelLName = val => {
      if (val.length == 0) {
        setData({
          ...data,
          isValidLName: false,
          LNameErrorMsg: 'Last Name cannot be Empty',
        });
      }
        else
        {
          setData({
            ...data,
            isValidLName: true,
            LNameErrorMsg: 'Last Name cannot be Empty',
        });
      }
    }
  
      const handelConfirmPassowrd = val => {
        if (val.length == 0) {
          setData({
            ...data,
            isValidConfirmPassowrd: false,
            confirmPasswordErrorMsg: 'Password cannot be Empty',
          });
        } else if (val != password) {
          setData({
            ...data,
            isValidConfirmPassowrd: false,
            confirmPasswordErrorMsg: 'Password Dont Match',
          });
        }
        else{
          setData({
            ...data,
            isValidConfirmPassowrd: true,
            confirmPasswordErrorMsg: '',
        });
      };
    }
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

    //redux saga 
    const dispatch=useDispatch();
    
  
      const user = useSelector(state => state.reguser.reguser);
   // console.log("registerpage chack----------",user)
      


      async function handelRegisterButton(){
        dispatch(registerUser(email,password));
        if(!user)
        {
          data.isDuplicateUser=true;
          data.duplicateUserErrorMsg="User Already Exist";
        }
        else
        {
          data.isDuplicateUser=false;
          


        }
      }
    
  
    

      return (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <Image
            style={styles.logo}
            source={require('../../images/logo.png')}
          />
          {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
          <View style={styles.inner}>
            <View>
              <Input
                accessibilityLabel="Please Enter your First Name"
                placeholder="Enter Your First Name"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={setFName}
                onChange={e => handelFName(e.nativeEvent.text)}
                onFocus={() => {
                  data.isValidFName = true;
                }}
              />
              {data.isValidFName ? null : (
                <Text style={styles.errorMsg}>{data.FnameErrorMsg}</Text>
              )}
              <Input
                accessibilityLabel="Please Enter your last name"
                placeholder="Enter Your Last Name"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={'email-address'}
                onChangeText={setLName}
                onChange={e => handelLName(e.nativeEvent.text)}
                onFocus={() => {
                  data.isValidLName = true;
                }}
              />
              {data.isValidLName ? null : (
                <Text style={styles.errorMsg}>{data.LNameErrorMsg}</Text>
              )}
              <Input
                accessibilityLabel="Please Enter your Email"
                placeholder="Enter Your Email"
                // leftIcon={<Icon name="mail" size={24} color="#bf2957" />}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={'email-address'}
                onChangeText={setEmail}
                onChange={e => handleValidEmail(e.nativeEvent.text)}
                onFocus={() => {
                  data.isValidEmail = true;
                }}
              />
              {data.isValidEmail ? null : (
                <Text style={styles.errorMsg}>{data.emailErrorMessage}</Text>
              )}
              <Input
                accessibilityLabel="Please Enter your password"
                placeholder="Password"
                secureTextEntry={hidePass ? true : false}
                // leftIcon={<Icon name="lock" size={24} color="#bf2957" />}
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
              {data.isValidPassword ? null : (
                <Text style={styles.errorMsg}>
                  {data.passwordErrorMessage}
                </Text>
              )}
              <Input
                accessibilityLabel="Please Re Enter your password"
                placeholder="Confirm Password"
                secureTextEntry={hidePass ? true : false}
                // leftIcon={<Icon name="lock" size={24} color="#bf2957" />}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={setConfirmPassword}
                onChange={e => handelConfirmPassowrd(e.nativeEvent.text)}
                onFocus={() => {
                  data.isValidConfirmPassowrd = true;
                }}
              />
              {data.isValidConfirmPassowrd ? null : (
                <Text style={styles.errorMsg}>
                  {data.confirmPasswordErrorMsg}
                </Text>
              )}
              {data.isDuplicateUser ?  (
                <Text style={styles.errorMsg}>
                  {data.duplicateUserErrorMsg}
                </Text>
              ):null}


              <Button
              disabled={(data.isValidEmail && data.isValidPassword && data.isValidConfirmPassowrd && data.isValidFName && data.isValidLName)?false:true}
                buttonStyle={styles.registerBtn}
                title="Create New Account"
                onPress={handelRegisterButton}
              />
            </View>

            <Text>
              Already a Member?
              <TextInput
                style={styles.signInText}
                onPressIn={() => navigation.navigate('Login')}>
                SignIn
              </TextInput>
            </Text>
          </View>

          {/* </TouchableWithoutFeedback>*/}
        </KeyboardAvoidingView>
      );
    }
export default Register;
