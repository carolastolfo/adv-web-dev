import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  var isValid = true;
  const [name, setName] = useState("");
  const [nameValidation, setNameValidation] = useState("");
  const [lname, setlNAme] = useState("");
  const [lnameValidation, setlNameValidation] = useState("");
  const onFirstNameChange = (e)=>{
    setName( e.target.value );
  }
  const onLastNameChange = (e) => {
    setlNAme(e.target.value);
  }
  const onSubmitHandler = (e) =>{
    e.preventDefault();
    if(name.length < 1){
      setNameValidation("Name is required");
      isValid = false;
    }else{
      setNameValidation("");
    }
    if(lname.length < 1){
      setlNameValidation("Last Name is required");
      isValid = false;
    }else{
      setlNameValidation("")
    }
    if(isValid){
      alert("Thank you for submitting!" + {name})
    }
  }
  return (
    <>

      <form onSubmit={onSubmitHandler}>
        <h1>Hello {name} {lname}!</h1>
        <label for="txt_name">Name:</label><input id="txt_name" onChange={onFirstNameChange}/>
        <div style={{color:"red", fontWeight:"bold"}}>{nameValidation}</div>
        <label for="txt_lname">Last Name:</label><input id="txt_lname" onChange={onLastNameChange}/>  
        <div style={{color:"red", fontWeight:"bold"}}>{lnameValidation}</div>

        <input type="submit" value="Register"/>
      </form>
    </>
  );
}

function UncontrolledVersion() {
    var name = "";
    var lname = "";
    const onFirstNameChange = (e)=>{
      name = e.target.value;
    }
    const onLastNameChange = (e) => {
      lname = e.target.value;
    }
    return (
      <>
  
        <form>
          <h1>Hello {name} {lname}!</h1>
          <label for="txt_name">Name:</label><input id="txt_name" onChange={onFirstNameChange}/>
          <label for="txt_lname">Last Name:</label><input id="txt_lname" onChange={onLastNameChange}/>
          <input type="submit" value="Register"/>
        </form>
      </>
    );
  }
