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
export const CheckOutButton = styled.Button`
  flex:1;
  position:absolute;
  bottom:0;
  align-self:center;
  `;
  export const TotalText = styled.Text`
  font-weight:bold;
  font-size:30px;
  color:red;
  `


  // export const data = [
  //   {
  //     "ProductId": "5b6c71a101a7c38429530891",
  //     "ImageURL": "https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/products/beauty-hygiene/shampoo.jpg",
  //     "ProductQuantity": 1,
  //     "ProductName": "TRESemme Shampoo - Keratin Smooth With Argan Oil, 580 ml ",
  //     "ProductPrice": 410
  //   },
  //   {
  //     "ProductId": "5b6c71e601a7c38429530892",
  //     "ImageURL": "https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/products/beauty-hygiene/dove.jpg",
  //     "ProductQuantity": 1,
  //     "ProductName": "Dove Intense Repair Shampoo 650ml + Bathing Bar Soap Cream Beauty 100G Pack of 3",
  //     "ProductPrice": 622
  //   },
  //   {
  //     "ProductId": "5b6c727801a7c38429530894",
  //     "ImageURL": "https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/products/beauty-hygiene/closeup.jpg",
  //     "ProductQuantity": 1,
  //     "ProductName": "Close Up Ever Fresh Red Hot Gel Toothpaste, 150 gm",
  //     "ProductPrice": 82
  //   }
  // ]