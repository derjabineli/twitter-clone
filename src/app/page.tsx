
import Link from 'next/link'

import {BiHomeCircle, BiUser} from 'react-icons/bi'
import {BsBell, BsBookmark, BsTwitter, BsEnvelope, BsThreeDots} from 'react-icons/bs'
import {HiOutlineHashtag} from 'react-icons/hi'

const NAVIGATION_ITEMS = [
  {
    title: "Twitter",
    icon: BsTwitter
  },
  {
    title: "Home",
    icon: BiHomeCircle
  },
  {
    title: "Explore",
    icon: HiOutlineHashtag
  },
  {
    title: "Notifications",
    icon: BsBell
  },
  {
    title: "Messages",
    icon: BsEnvelope
  },
  {
    title: "Bookmarks",
    icon: BsBookmark
  },
  {
    title: "Profile",
    icon: BiUser
  }
]

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <section className="fixed w-[275px] flex flex-col items-stretch h-screen">
          <div className='flex flex-col items-stretch h-full space-y-4 mt-4'>
          {
            NAVIGATION_ITEMS.map((item) => (
              <Link key={item.title} className="hover:bg-white/10 text-2xl duration-200 flex items-center justify-start w-fit space-x-2 rounded-3xl py-2 px-6" href={`/${item.title.toLowerCase()}`}>
                <div>
                  <item.icon />
                </div>
                  {item.title !== "Twitter" && <div>{item.title}</div>}
              </Link>
            ))
          }
          <button className='rounded-full m-4 bg-primary p-4 text-2xl text-center hover:bg-opacity-70 transition:duration-200'>
            Tweet
          </button>
          </div>
          <button className='rounded-full flex items-center  space-x-2 m-4 bg-transparent p-4 text-2xl text-center hover:bg-white/20 transition:duration-200 w-full justify-between'>
            <div className='flex items-center space-x-2'>
            <div className='rounded-full bg-slate-400 w-10 h-10'></div>
            <div className='text-left text-sm'>
              <div className='font-semibold'>Eli Derjabin</div>
              <div className=''>@derjabineli</div>
            </div>
            <div></div>
            </div>
            <BsThreeDots />
          </button>
        </section>
        <main></main>
        <section></section>
      </div>
    </div>
  )
}

export default Home