import React, { useState, useEffect } from 'react';
import { View,  StyleSheet,TouchableOpacity } from 'react-native';
import { List } from 'react-native-paper';
import { ScrollView } from 'react-native';
import Header from '../screens/Home/header';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useSelector, useDispatch } from 'react-redux';
import { selectedCategory } from '../redux/reducer/category';
import LeftHeader from './Home/leftheader';
import RightHeader from './Home/rightheader';
export const Categories = ({ navigation }) => {
    const dispatch = useDispatch();
    const categorySelected = useSelector(state => state.categoryReducer)

    const [data, setData] = useState([]);
    const [dataProd, setProd] = useState([])
    let arrayCat = []

    useEffect(() => {

        fetch(`http://10.0.2.2:4000/categories`).then(response => response.json())

            .then(json => {
                setData(json)
            })
            .catch((error) => { console.error(error); })
        fetch(`http://10.0.2.2:4000/products`).then(response => response.json())

            .then(json => {
                setProd(json)
            })
            .catch((error) => { console.error(error); })

    }, [])
    const onPressFunction = (obj) => {
        arrayCat = (dataProd.filter(item => item.category == obj));

        dispatch(selectedCategory(arrayCat));
        navigation.navigate('Products',{catName:obj});
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Homescreen')} ><LeftHeader /></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}><RightHeader /></TouchableOpacity>
            </View>
            <View style={styles.category}>
                <List.Section title="Categories">
                    <ScrollView>
                        {data.map((obj) => <List.Accordion
                            title={obj.name} left={() => <List.Icon icon={obj.icon} />}>
                            <List.Item title={obj.name} id={obj.id} onPress={() => { onPressFunction(obj.id) }} />
                        </List.Accordion>)}
                    </ScrollView>
                </List.Section>
            </View>
        </View>



    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    logo: {
        alignSelf: "center",
    },
    header: {
        flex: 0.8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        margin: 5

    },
    category: {
        flex: 8,
        flexDirection: 'column'
    },
})