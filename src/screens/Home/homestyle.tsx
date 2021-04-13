
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    categories: { flex: 8 },
    header: {
        flex: 0.6,

        // borderBottomWidth: 1,
        // borderBottomColor: 'grey',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,


    },
    para: {
        fontWeight: 'normal'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15
    },
    categoriesList: {
        flex: 3,
        borderBottomColor: 'grey',
        flexDirection: 'row',
        // borderBottomWidth: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,


    },
    caterogiesimg: {
        flex: 2,
        flexDirection: 'row',
        margin: 20

    },
    explore: {
        backgroundColor: "#bf2957",
        width: "60%",
        marginTop: 0



    },
    categoriestxt: {
        flex: 4,
        flexDirection: 'column',

        justifyContent: 'center'
    },
    footer: {
        flex: 0.3,
        // borderBottomWidth: 1,
        // borderBottomColor: 'black',
        alignItems: 'center', justifyContent: 'center', backgroundColor: '#DEDEDE'
    },


});
export default styles;