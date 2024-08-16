import { useRouter } from 'next/router';

export default function Greeting() {
  const router = useRouter();
  const { name } = router.query;
  return <h1>Greeting {name}</h1>;
};
