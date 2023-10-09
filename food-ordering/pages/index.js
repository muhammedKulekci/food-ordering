import { Inter } from "next/font/google";
import Head from "next/head";
import Home from "../pages/home/index"

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <div>
      <Head>
        <title>Feane</title>
      </Head>
      
      <Home/>
      
      
    </div>
  );
}
