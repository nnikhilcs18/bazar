import React, { Component } from 'react';
import { Button } from 'react-native';
import openMap from 'react-native-open-maps';
import { Text, StyleSheet } from 'react-native';

  const  Store= ()=>{
     const goToDelhi=() =>{
        openMap({ latitude: 28.7041, longitude: 77.1025 });
    }
    const goToFaridabad=() =>{
        openMap({ latitude: 28.4595, longitude: 77.0266 });
    }
    const goToGurgaon=()   =>{
        openMap({ latitude: 28.4089, longitude: 77.3178 });
    }
    const goToNoida=() => {
        openMap({ latitude: 28.5355, longitude: 77.3910 });
    }

   
        return (
            <>
                <Text>Select Your Nearest Location</Text>
                <Button
                    color={'#bf2957'}
                    onPress={goToDelhi}
                    title="Delhi 🗺" />
                <Button
                    color={'#bf2957'}
                    onPress={goToFaridabad}
                    title="Faridabad 🗺" />
                <Button
                    color={'#bf2957'}
                    onPress={goToGurgaon}
                    title="Gurgaon 🗺" />
                <Button
                    color={'#bf2957'}
                    onPress={goToNoida}
                    title="Noida 🗺" />
            </>
        );
}
export default Store;
