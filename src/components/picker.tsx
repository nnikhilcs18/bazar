import React, { useState, useEffect } from 'react';
import { Image, View, Text, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useSelector, useDispatch } from 'react-redux';
import { selectedCategory } from '../redux/reducer/category';
// import colors from '../constants/colors';

const picker = (props) => {

    const [selectedLanguage, setSelectedLanguage] = useState();
    const dispatch = useDispatch();
    const categorySelected = useSelector(state => state.categoryReducer)

    let arrayCat = [];
    const [data, setData] = useState([]);
    const [dataProd, setProd] = useState([])

    useEffect(() => {

        fetch(`http://10.0.2.2:4000/categories`).then(response => response.json())

            .then(json => {
                setData(json)
                console.log(json)
            })
            .catch((error) => { console.error(error); })
        fetch(`http://10.0.2.2:4000/products`).then(response => response.json())

            .then(json => {
                setProd(json)
            })
            .catch((error) => { console.error(error); })

    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.pick}>
                <Picker
                    style={styles.picker}
                    selectedValue={props.name}
                    onValueChange={(value) => {
                        arrayCat = (dataProd.filter(item => item.category == value));
                        // console.log(arrayCat);
                        dispatch(selectedCategory(arrayCat));
                    }}
                // {(itemValue, itemIndex) =>
                //      setSelectedLanguage(itemValue)
                // }
                >
                    <Picker.Item value="5b6899953d1a866534f516e2" label="Fruits & Vegetables" />
                    <Picker.Item value="5b6899123d1a866534f516de" label="Bakery, Cakes and Dairy" />
                    <Picker.Item value="5b675e5e5936635728f9fc30" label="Beverages" />
                    <Picker.Item value="5b68994e3d1a866534f516df" label="Beauty and Hygiene" />
                    <Picker.Item value="5b6899683d1a866534f516e0" label="Baby Care" />

                </Picker>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',

    },
    pick: {
        backgroundColor: "#bf2957",
        paddingLeft: 25,
        height: 55,


    },
    picker: {
        height: 45,
        width: 380,
        padding: 20,
        color: "white",
        fontSize: 85,
    }
});

export default picker