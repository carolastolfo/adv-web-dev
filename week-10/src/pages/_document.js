import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div>
          <Link href="/">Home</Link>
          <br />
          <Link href="/project">Projects</Link>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
