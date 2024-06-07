import { Inter } from "next/font/google";
import { Component, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Car name="March" price={5000}/>
    <Car name="Versa" price={2500}/>
    <Car name="Kicks" price={6500}/>
    <Cars name="March" price={5000}/>
    <Cars name="Versa" price={2500}/>
    <Cars name="Kicks" price={6500}/>
    <CarsX name="March" price={5000}/>
    <CarsX name="Versa" price={2500}/>
    <CarsX name="Kicks" price={6500}/>
    <Pet age={15}/>
    </>
  );
}

function Car(props){
  var myCustomStyle = {color:"purple"};
  var myCustomStyle2 = {backgroundColor:"white", fontSize:20}
  var myCustomStyle3 = {borderWidth: 1, borderColor: "black", borderRadius: 10, borderStyle: "solid", padding: 10}
  return <div style={{...myCustomStyle, ...myCustomStyle2, ...myCustomStyle3}}>    
    This car brand is {props.name} and its priced at ${Math.round(props.price*1.13)} <button>+</button>.
  </div> 
}

// function priceChange(){
//   price = 43;
//   alert(price);
// }

function Cars(props){
  var price = props.price;
  price = price * 1.13;

  const priceChange = () => {    //there is where state management comes in -- this does not change the call bellow because this are static once initialized
    price = 43;
    alert(price);
  }  // alert goes through with the new value but uid does not update

  var myCustomStyle = {color:"purple"};
  var myCustomStyle2 = {backgroundColor:"white", fontSize:20}
  var myCustomStyle3 = {borderWidth: 1, borderColor: "black", borderRadius: "1rem", borderStyle: "solid", padding: "1rem"}
  return <div style={{...myCustomStyle, ...myCustomStyle2, ...myCustomStyle3}}>    
    This car brand is {props.name} and its priced at ${Math.round(price)} <button onClick = {priceChange} >+</button>. 
  </div> 
}

function CarsX(props){

  const [price, setPrice] = useState(props.price)
  const priceChange = () => {  
    setPrice(price + 100)
  }
  var myCustomStyle = {color:"purple"};
  var myCustomStyle2 = {backgroundColor:"white", fontSize:20}
  var myCustomStyle3 = {borderWidth: 1, borderColor: "black", borderRadius: "1rem", borderStyle: "solid", padding: "1rem"}
  return <div style={{...myCustomStyle, ...myCustomStyle2, ...myCustomStyle3}}>    
    This car brand is {props.name} and its priced at CAD{price} <button onClick = {priceChange} >+</button>. 
  </div> 
}

class Pet extends Component{
  constructor(props){ //super is needed for some reason
    super(props)
    this.state = {age : props.age}
    this.increaseAge = this.increaseAge.bind(this) //binding the function to itself
  }
  componentDidMount(){   //useful for api calls. not in the render
    alert("I am HERE! muahahah")
  }
  increaseAge(){
    this.setState({age: this.state.age+ 1})
  }
  render(){
    return <h1>My cat name is Kiki and she is {this.state.age} years old <button onClick={this.increaseAge}>+ age</button></h1>
  }
}