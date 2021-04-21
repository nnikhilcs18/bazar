
import { StyleSheet } from "react-native";
import {colors} from '../constants/colors'
const styles=StyleSheet.create({
    btn:{
        backgroundColor:colors.primary,
        height:'30%',        
        padding:'3%',
        width:'80%'

    },
    btnText:{
        color:colors.white,
        alignSelf:'center',
        fontSize:16,
    },
})
export default styles