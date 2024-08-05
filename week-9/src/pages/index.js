
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";


function Car(props){
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Price: ${props.price}</p>
    </div>
  )
}

function ButtonsContainer(props){
  return (
    <div>
      <Button sharedMethod = {props.sharedMethod}/>
      <Button sharedMethod = {props.sharedMethod}/>
      <Button sharedMethod = {props.sharedMethod}/>
      <Button sharedMethod = {props.sharedMethod}/>
    </div>
  )
}

function Button(props){
  return (
    <div>
      <button onClick={props.sharedMethod}>Click me</button>
    </div>
  )
}

function Pets(props){
  return (
    <div>
      <p>The total number of pets is: {props.petsList.length}</p>
      {
        props.petsList.map(
          function (item) {
            return (
              <p>{item.name} is {item.age} years old</p>
            )
          }
        )
      }
    </div>
  )
}

function RegisterPets(props){
  const [petName, setPetName] = useState("");
  const [petAge, setPetAge] = useState("");

  function addPet(){
    //create a new object with the entered pet name and age
    const newPet = {
      name: petName,
      age: petAge
    }
    //create a new array with existing pets and the new pet object
    const newPetsArray = [
      ...props.petsArray, 
      newPet
    ];

    // call the serPetsFunction and pass the new array into it
    props.setPetsFunction(newPetsArray);
  }

  return (
    <div>
      <label>Name:</label>
      <input value={petName} onChange={(event => { setPetName(event.target.value)})}/>

      <label>Age:</label>
      <input value={petAge} onChange={(event => {setPetAge(event.target.value)})}/>

      <button onClick={addPet}>Submit</button>
    </div>
  )
}


export default function App(){
  const cars = [
    {name: "Honda", price: 20000},
    {name: "WW", price: 30000},
    {name: "Acura", price: 35000}
  ];
  const mySharedMethod = () => {
    alert("shake it shake it")
  };

  const [pets, setPets] = useState([
    {name: "Sky", age: 2}
  ]);

  return (
    <div>
      <ButtonsContainer sharedMethod = {mySharedMethod}/>
      <Pets petsList = {pets}/>
      <RegisterPets petsArray = {pets} setPetsFunction = {setPets}/>

      {
        cars.map(
          function(item){
            return (
              <div>
              <Car {...item}/> 
              </div>
            )
          }
        )
      }
    </div>
  )
}




