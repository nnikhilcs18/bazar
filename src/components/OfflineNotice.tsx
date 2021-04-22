import React from 'react';
import {View,StyleSheet,Text,StatusBar} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import { showMessage, hideMessage } from "react-native-flash-message";

function OfflineNotice(){
    const netInfo = useNetInfo();

    if(netInfo.type !== "unknown" && netInfo.isInternetReachable === false){
        showMessage({
            message: "Internet not available, please connect to internet to continue shopping",
            type: "danger",
            autoHide:false,
        });
    }
    else{ 
        showMessage({
            message: "Back Online, continue shopping :)",
            type: "success",
        });
    }
    return null;
}

export default OfflineNotice;