import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });
var counter = 0
const happygoluckyheader = <div><h1>Ooooooi tudo bem? {counter}</h1></div>

export default function Home() {
  return (
    <>
    <div>
      <p>
        Good luck today!
      </p>
    </div>
  {happygoluckyheader}
    <Xolo/>

    </>


    // old form -> they dont accept hooks (or extensions) completly deprecated

    // class Dog extends Component
  );
}

export function Xolo() {
  return (
    <div>
      <p>
        This is a cachorrinho callled Totó
      </p>
    </div>
  )
}

// export function Xolo(props) {
//   return (
//     <div>
//       <p>
//         This is a cachorrinho chamado {props.name}
//       </p>
//     </div>
//   )
// }
