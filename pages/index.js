import Head from "next/head";
import Login from "../components/login";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  // const isAuthenticated =false;
  if (!isAuthenticated) return <Login />;
  return (
    <div className="h-screen">
      <Head>
        <title>DAPP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>wellcome to app</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
