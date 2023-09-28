import { Inter } from "next/font/google";
import Head from "next/head";
import Home from "../pages/home/index"
import Header from "../components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header/>
      
    </div>
  );
}
