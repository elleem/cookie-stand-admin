import Head from "next/head";
import Header from "../components/Header"; 
import Footer from "@/components/Footer";
import Form from "../components/Form"; 

export default function Home() {
  return (
  <>
    <Head>
      <title>Cookie Stand</title>
      </Head>
      <Header/>
        <Form/>
      <Footer/>
    
  </>
  )
}
