import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  var car = "Toyota";
  const updateCar = () =>{ //here is a function to update variable car
    car = "Volvo";
  }
  const [cat, setCat] = useState("Calico"); // here the function updates the state variable cat
  const updateCat = () =>
    setCat("Ragdoll")



  return (
    <>
      <h1>Here is a non-state variable Car -- {car}</h1>
      <button onClick={updateCar}>Here is a button to update our Toyota to a Volvo!</button> 
      {/* because this a non state variable, the button is not able to update the UI */}
      <h1>Here is a state variable Cat -- {cat} </h1>
      <button onClick={updateCat}>Here is a button to update our Calico to a Ragdoll!</button>
      {/* here the button is able to update the ui because the function triggered updates the state of the variable */}
    </>
  );
}

