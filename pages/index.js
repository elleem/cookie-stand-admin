import Head from "next/head";
import CookieStandAdmin from "../components/CookieStandAdmin";
import Header from '../components/Header';
import useResource from "@/hooks/useResource";
import { useAuth } from "@/contexts/auth";
import LoginForm from '../components/LoginForm'

export default function Home() {
  const {user,login,logout} = useAuth()
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
        <LoginForm onLogin ={login}/>
      }
  </>
  )
}
