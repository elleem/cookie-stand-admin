import Head from "next/head";

export default function Home() {
  return (
  <>
    <Head>
      <title>Cookie Stand</title>
      </Head>
      <div className="w-full bg-black h-12"></div>
      <header className="flex items-center justify-between h-12 text-4xl pt-8 pb-8 font-semibold bg-green-500">
      <h1>Cookie Stand Admin</h1>
      </header>
        <main className="flex flex-col items-center py-4 space-y-8">
        <p>Cookie Stand sample text</p>
        </main>
     
      <footer>

      </footer>
    
  </>
  )
}
