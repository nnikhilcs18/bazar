import { StyleSheet } from "react-native";
import {imageWidth,imageHeight,colors} from '../../../constants/colors'
const styles= StyleSheet.create({
    productContainer:{       
        flex: 1,   
        flexDirection:'column',   
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderStyle:'dotted',
        borderBottomWidth:1,
        padding:'3%',
        paddingBottom:'5%',
        marginBottom:'3%',
        backgroundColor:colors.white
       
    },
    productItem:{
        width:'100%',
        flex:1,
        alignContent:'flex-end',
        flexDirection:'row',
       
    },
    image:{
        height:imageHeight,
        width:imageWidth, 
        
    },
    contentContainer:{
        marginLeft:'4.5%',
        marginRight:'4.5%',
        justifyContent:'space-between',
       
    },
    label:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:'3%',
    },
    content:{
       width:'80%',
       marginBottom:'3%',
       height:'70%',
       backgroundColor:colors.contentBackground,
       padding:'4%'
      
       
    },
    description:{
        flexWrap:'wrap',
        
    }

})

export default styles