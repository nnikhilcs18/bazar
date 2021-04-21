import { StyleSheet } from "react-native";
const styles= StyleSheet.create({
    productContainer:{       
        flex: 1,   
        flexDirection:'column',   
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderStyle:'dotted',
        borderBottomWidth:1,
        padding:10,
        marginBottom:10,
       
    },
    productItem:{
        width:'100%',
        flex:1,
        alignContent:'flex-end',
        flexDirection:'row',
       
    },
    image:{
        height:170,
        width:170, 
        
    },
    contentContainer:{
        marginLeft:15,
        marginRight:15,
        justifyContent:'space-between',
       
    },
    label:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,
    },
    content:{
       width:200,
       marginBottom:10,
       height:110,
       backgroundColor:'lightgrey',
       padding:5
      
       
    },
    description:{
        flexWrap:'wrap',
        
    }

})

export default styles