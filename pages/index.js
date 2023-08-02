import Head from "next/head";
import CookieStandAdmin from "../components/CookieStandAdmin";
import Header from '../components/Header';
import useResource from "@/hooks/useResource";
import { useAuth } from "@/contexts/auth";
import LoginForm from '../components/LoginForm'
import Footer from "@/components/Footer";
import CreateNewUser from "@/components/CreateNewUser";

export default function Home() {
  const {user,login,logout, register} = useAuth()
  const {resources} = useResource()

  return (
  <>
    <Head>
      <title>Cookie Stand</title>
      </Head>
      <Header user ={user} logout={logout}/>
      {user ?
        <CookieStandAdmin/>
        :
        <>
        <LoginForm onLogin ={login}/>
        <CreateNewUser onRegister = {register}/>
        </>
      }
      <Footer locations={resources || []}/>
  </>
  )
};
