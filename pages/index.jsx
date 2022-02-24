import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
export default function Home({ data }) {
  return (
    <div className="">
      <Head>
        <title>Design Sundays</title>
        <link rel="icon" href="/logods.ico" />
      </Head>

      <main>
        <div className="h-screen bg-[url('https://images.pexels.com/photos/6069075/pexels-photo-6069075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')] bg-cover bg-fixed">
          <Header />

          <div className="mt-52 flex flex-col gap-y-7 font-sans">
            <h1 className="text-center  text-7xl font-bold tracking-wider  text-white">
              Merch Store
            </h1>
            <h1 className="whitespace-normal p-2 text-center text-5xl font-thin  text-white">
              Wear your passion!
            </h1>
          </div>
        </div>

        <div className="m-5 mx-auto grid max-w-7xl grid-cols-2 items-center gap-4 px-3 lg:grid-cols-3">
          {data.map((item) => (
            <div className="flex flex-col items-center rounded-lg  border p-5">
              <img className="h-40 lg:h-56" src={item.Image} alt="" />
              <h1 className="p-2 font-semibold">{item.Name}</h1>

              <h1>{item.Description}</h1>
              <h1 className="p-2">{item.Price}</h1>
              <a
                href="#_"
                className="group relative mt-2 inline-block overflow-hidden rounded bg-purple-50 px-5 py-2.5 font-medium text-purple-600"
              >
                <span className="absolute top-0 left-0 mb-0 flex h-0 w-full translate-y-0 transform bg-purple-600 opacity-90 transition-all duration-200 ease-out group-hover:h-full"></span>
                <span className="relative group-hover:text-white">
                  Add to Cart
                </span>
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const data = await fetch(
    'https://sheet.best/api/sheets/43a8aacb-4f98-4325-9fc7-3d5d363c4f21'
  ).then((response) => response.json())

  return {
    props: {
      data,
    },
  }
}
