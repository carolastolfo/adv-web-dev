import { Inter } from "next/font/google";
import Alert from 'react-bootstrap/Alert';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header>Home</header>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
  );
}
