import Head from "next/head";
import Header from "../components/Header"; 
import Footer from "@/components/Footer";
import CreateForm from "../components/CreateForm"; 

export default function Home() {
  return (
  <>
    <Head>
      <title>Cookie Stand</title>
      </Head>
      <Header/>
        <CreateForm/>
      <Footer/>
    
  </>
  )
}
