import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div style={{textAlign: "center"}}>
          <Link href="/login">Login |</Link>
          <Link href="/register"> Register</Link>          
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
