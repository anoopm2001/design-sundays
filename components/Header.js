import React, { useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

function Header() {
  const { data: session } = useSession()

  return (
    <div className="top-0 z-50 flex items-center justify-between bg-transparent p-2 lg:p-10">
      <div className="flex items-center gap-2">
        <img
          src="/logofinal.png"
          alt=""
          className="h-14 rounded-full p-1 lg:h-14"
        />
        <h1 className="text-white  lg:text-lg">Design Sundays</h1>
      </div>
      {session ? (
        <div className="flex items-center gap-2">
          <img
            src={session?.user?.image}
            className="ml-2 h-10 w-10 cursor-pointer rounded-full md:h-12 md:w-12"
            onClick={signOut}
          />
          <h1 className="hidden text-white lg:inline-flex">
            {session?.user?.name}
          </h1>
        </div>
      ) : (
        <div className="items-center" onClick={signIn}>
          <a
            href="#_"
            class="group font-sm relative inline-flex items-center justify-center overflow-hidden  rounded-full px-10 py-1 text-indigo-600 shadow-xl transition duration-300 ease-out hover:ring-1 hover:ring-purple-500"
          >
            <span class="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
            <span class="ease absolute bottom-0 right-0 mb-32 mr-4 block h-64 w-64 origin-bottom-left translate-x-24 rotate-45 transform rounded-full bg-pink-500 opacity-30 transition duration-500 group-hover:rotate-90"></span>
            <span class="relative text-white">Login</span>
          </a>
        </div>
      )}
      {console.log(session)}
    </div>
  )
}

export default Header
export async function getServerSideProps(context) {
  const session = await getSession(context)
  return {
    props: {
      session,
    },
  }
}
