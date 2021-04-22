
import { StyleSheet } from "react-native";
import {colors} from '../constants/colors'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',

    },
    pick: {
        backgroundColor: colors.primary,
        paddingLeft:0,
        height: '100%',
        width:'100%'
    },
    picker: {
        height: '50%',
        width: '100%',
        color: colors.white,
        fontSize: 85,
    }
});
export default styles