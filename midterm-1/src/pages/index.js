import { Inter } from "next/font/google";
import { useState } from "react"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  var myCustomStyle = {padding:"10rem", lineHeight:"1.8"};   //just some simple style changes
  var isValid = true; //boolean check to trigger some things
    const [submitConfirmation, setSubmitConfirmation] = useState("") //this is a list of all the state variables used
    const [fname, setFName] = useState("");
    const [fnameValidation, setFNameValidation] = useState("");
    const [lname, setlNAme] = useState("");
    const [lnameValidation, setlNameValidation] = useState("");
    const [age, setAge] = useState("");
    const [ageValidation, setAgeValidation] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [zipCodeValidation, setZipCodeValidation] = useState("");
    const onFirstNameChange = (e)=>{ //this onChange functions update the state variables as user inputs new values
      setFName( e.target.value );
    }
    const onLastNameChange = (e) => {
      setlNAme(e.target.value);
    }
    const onAgeChange = (e) => {
      setAge(e.target.value);
    }
    const onZipCodeChange = (e) => {
      setZipCode(e.target.value);
    }
    const onSubmitHandler = (e) =>{  //this function checks some validations for each variable before the form is submitted
      //the boolean is used here to determine if we should go forward with the submission or not based on the criteria for each variable
      // the event handler of this function is the Register button onClick
      e.preventDefault();
      if(fname.length < 1){
        setFNameValidation("We need to know your first name!");
        isValid = false;
      }else{
        setFNameValidation("");
      }
      if(lname.length < 1){
        setlNameValidation("We need to know your last name!");
        isValid = false;
      }else{
        setlNameValidation("")
      }
      if(age < 18){
        setAgeValidation("You must be 18 or older to join!")
        isValid = false;
      }else{
        setAgeValidation("")
      }
      if(zipCode.length != 6){
        setZipCodeValidation("Your postal code is not valid :(")
        isValid = false;
      }
      if(isValid){
        alertAndConfirm(); //calling another function if the form is okay to be submitted
      }
    }
    const alertAndConfirm = () =>{ //this function confirms user submission
      setSubmitConfirmation("Hello " + {fname} + " " + {lname} + "! We're so happy to have you here!")
        alert("Welcome " + {fname} + " " + {lname} + "You are " + {age} + "years old! We are going to group you with people in this area: " + {zipCode})
    }
    const onClickReset = () =>{ //here the reset function sets all the state variables back to empty strings, clearing the form
      // the event handler of this function is the reset button onClick
      setFName("");
      setlNAme("");
      setAge("");
      setZipCode("");
      setFNameValidation("");
      setlNameValidation("");
      setAgeValidation("");
      setZipCodeValidation("");
      setSubmitConfirmation("");
    }
  return (
    <>
      <main style={myCustomStyle}>
      <h1>Join our newsletter and be always up to date on the latest slow fashion discussions!</h1>
      <p>What is our newsletter?</p>
      <p>Here you can be part of a community engaged in the slow fashion world. Share your tips on how to avoid overconsumption here!</p>
      <form onSubmit={onSubmitHandler}>
        <h1>What should we call you?</h1>
        <label for="fname">First Name:</label><input id="fname" onChange={onFirstNameChange}/>
        <div style={{color:"red", fontWeight:"bold"}}>{fnameValidation}</div>
        <label for="lname">Last Name:</label><input id="lname" onChange={onLastNameChange}/>  
        <div style={{color:"red", fontWeight:"bold"}}>{lnameValidation}</div>
        <h1>Let us know how to best direct amazing content your way!</h1>
        <label for="age">Age:</label><input id="age" onChange={onAgeChange}/>
        <div style={{color:"red", fontWeight:"bold"}}>{ageValidation}</div>
        <h1>Where are you at! Let's connect you with our close by members!</h1>
        <label for="zip_code">Postal code:</label><input id="zip_code" onChange={onZipCodeChange}/>
        <div style={{color:"red", fontWeight:"bold"}}>{zipCodeValidation}</div>
        <input type="submit" value="Register"/>
      </form>
      <h1>{submitConfirmation}</h1>
      <button onClick={onClickReset}>Something went wrong? Click here to reset!</button>
      </main>
    </>
  );
}
