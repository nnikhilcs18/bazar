{/*import React from 'react';
import {useState} from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  Alert,
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
// import colors from '../constants/colors';
import styles from './styles/RegisterStyles'
const Register = ({navigation}) => {
  const [hidePass, setHidePass] = useState(true);

  console.log('test');
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Image
        accessibilityLabel="SabkaBazar Logo"
        style={styles.logo}
        source={require('../images/logo.png')}
      />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
           <Text style={styles.header}>SignUp</Text> 
          <TextInput
            accessibilityLabel="Please Enter your First Name"
            placeholder="First Name"
            style={styles.textInput}
          />
          <TextInput
            accessibilityLabel="Please Enter your Last Name"
            placeholder="Last Name"
            style={styles.textInput}
          />
          <TextInput
            accessibilityLabel="Please Enter your Email"
            placeholder="Email"
            style={styles.textInput}
          />

          <Input
            accessibilityLabel="Please Enter your Password"
            placeholder="Password"
            //style={styles.textInput}
            secureTextEntry={hidePass ? true : false}
            rightIcon={
              <Icon
                name={hidePass ? 'visibility-off' : 'visibility'}
                size={25}
                color="#bf2957"
                onPress={() => setHidePass(!hidePass)}
              />
            }
          />
          <TextInput
            accessibilityLabel="Please re-enter your password for confirmation"
            placeholder="Confirm Password"
            //inputStyle={styles.textInput}
            secureTextEntry={true}
          />
          <Button
            accessibilityLabel="Click to Register"
            buttonStyle={styles.registerBtn}
            title="Create New Account"
            onPress={()=>navigation.navigate('Login')}
          />
          <Text>
            Already a Member?
            <TextInput
              style={styles.signInText}
              onPressIn={()=>navigation.navigate('Login')}>
              SignIn
            </TextInput>
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};


export default Register;

*/ }
import React from 'react';
import {useState} from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  Alert,
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../constants/colors';
import styles from './styles/RegisterStyles'
const Register = (navigation) => {
  const [hidePass, setHidePass] = useState(true);

  console.log('test');
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Image
        accessibilityLabel="SabkaBazar Logo"
        style={styles.logo}
        source={require('../images/logo.png')}
      />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          {/* <Text style={styles.header}>SignUp</Text> */}
          <TextInput
            accessibilityLabel="Please Enter your First Name"
            placeholder="First Name"
            style={styles.textInput}
          />
          <TextInput
            accessibilityLabel="Please Enter your Last Name"
            placeholder="Last Name"
            style={styles.textInput}
          />
          <TextInput
            accessibilityLabel="Please Enter your Email"
            placeholder="Email"
            style={styles.textInput}
          />

          <Input
            accessibilityLabel="Please Enter your Password"
            placeholder="Password"
            //style={styles.textInput}
            secureTextEntry={hidePass ? true : false}
            rightIcon={
              <Icon
                name={hidePass ? 'visibility-off' : 'visibility'}
                size={25}
                color={colors.primary}
                onPress={() => setHidePass(!hidePass)}
              />
            }
          />
          <Input
            accessibilityLabel="Please re-enter your password for confirmation"
            placeholder="Confirm Password"
            //inputStyle={styles.textInput}
            secureTextEntry={true}
          />
          <Button
            accessibilityLabel="Click to Register"
            buttonStyle={styles.registerBtn}
            title="Create New Account"
            onPress={()=>navigation.navigate('Login')}
          />
          <Text>
            Already a Member?
            <TextInput
              style={styles.signInText}
              onPressIn={()=>navigation.navigate('Login')}>
              SignIn
            </TextInput>
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};


export default Register;
