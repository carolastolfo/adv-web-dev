import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });
const welcomeheader = <div><h1>Hey! Happy to have you here ╰(*°▽°*)╯</h1></div>

export default function Home() {
  return (
    <>
        <h2>
          Hello! Happy tuesday!
        </h2>
    {welcomeheader}  
    <RainyWeek/><Friday/>
    </>
  );
}

export function RainyWeek() {
  return (
    <div>
      <p>This rainy week is still a nice week!</p>
    </div>
  )
}

export function Friday() {
  return (
    <div><p>Anyway Friday is coming!</p></div>
  )
}