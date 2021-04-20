import * as Keychain from 'react-native-keychain';

export async function  storeInKeychain(email,pass,){
    const username=email;
    const password=pass;
    await Keychain.setGenericPassword(username,password);

    try{
        const credentials=await Keychain.getGenericPassword();
        if(credentials){
            console.log('credentials Successfully loaded for user ' + credentials.username +' '+credentials.password);
            console.log("---keychain page------",credentials);
        }
        else{
            console.log('no Credentials stored');
        }
    }
    catch(error){
        console.log("keychain couldnt be accessed",error);
    }
    //await Keychain.resetGenericPassword();


}
