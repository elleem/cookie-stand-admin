import Link from 'next/link';

export default function Header({user, logout}) {
  return (
  <>
      <header className="flex items-center justify-between h-12 text-4xl pt-8 pb-8 pl-4 font-semibold bg-green-500">
      <h1>Cookie Stand Admin</h1>
      <div className='flex'>
        {user && (
          <>
            <button className=' text-base px-2 mx-4 rounded-md bg-white hover:bg-blue-300'>{user.username}</button>
            <button className=' text-base px-2 mx-4 rounded-md bg-green-800 text-white hover:bg-blue-300' onClick={logout}>Sign Out</button>
            <Link href='/overview' className='px-2 mx-4 rounded-md bg-white text-base hover:bg-blue-300'>Overview</Link>
          </>
        )}
      </div>
      </header>
  </>
  )
}