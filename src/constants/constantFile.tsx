import {Dimensions} from 'react-native';
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 0.25);
const imageWidth = imageHeight;
import styled from 'styled-components/native';
export const Url = 'http://10.0.2.2:3000/categories';



export const ItemsSubscript = styled.Text`
font-size:20px;`
export const ImageCart = styled.Image`
width: ${imageHeight}; 
height: ${imageWidth};
margin-left:7%;
padding-bottom:10px;
`
export const OutputText = styled.Text`
font-weight:bold;
font-size:18px`
export const ContainerCart = styled.View`
width:60%;
margin-left:5%;`

export const TopBar = styled.Text`
font-weight: bold;
font-size: 30px;
background-color: white;
`
export const OutputView = styled.View`
padding-left:10%;
padding-right:10%;
`
export const Main = styled.View`
  flex: 1;
  width: 100%;
  height: 0;
  background-color: #eee;
`;
export const TextView = styled.View`
  font-weight: bold;
  font-size: 20px;
  background-color: white;
`;
export const Increments = styled.View`
flex:1;
flexDirection: row;
justifyContent: flex-start;
padding-bottom:5%;
padding-top:5%;
padding-left:10%;
`
export const ItemsBar = styled.View`
  margin-vertical: 10px;
  background-color: white;
  flex-direction: row;
`;
export const ItemHeading =  styled.Text`
    fontWeight: bold;
    flex: 1;
    font-size:20px;
    `;
export const CheckOutButton = styled.TouchableOpacity`
  flex:1;
  width:100%;
  height:5%;
  position:absolute;
  padding-top:2%;
  bottom:0;
  align-items:center;
  background-color:#bf2957;
  `;
  export const TotalText = styled.Text`
  font-weight:bold;
  font-size:30px;
  color:red;
  `


 