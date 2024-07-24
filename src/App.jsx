import { Outlet } from "react-router-dom"
import RightBar from "./Components/Section/RightBar"
import LeftBar from "./Components/Section/LeftBar"
import { IoMoonOutline } from "react-icons/io5"
import { GoSun } from "react-icons/go"
import { RxHamburgerMenu } from "react-icons/rx"
import { IoClose } from "react-icons/io5";
import { Data } from './Components/Data'
import { useState } from "react"
import { NavLink } from "react-router-dom"

const App = () => {

  const [night, setNight] = useState(true)
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setNight(!night)
  }

  const menu_toggle = () => {
    setOpen(!open)
  }

  if (!night) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }

  return (
    <div className="py-10 bg-[url('./assets/images/body-bg.jpg')] bg-no-repeat bg-cover bg-center bg-fixed dark:bg-[url('./assets/images/body-bg-dark.jpg')]">
      <div className="container mx-auto">
        <div className="w-full relative flex justify-end gap-2 mb-20 max-md:px-4 max-md:mb-10">
          <div className="w-12 h-12 rounded-full bg-white flex justify-center items-center cursor-pointer hover:bg-main transition-all ease-linear group dark:bg-black" onClick={toggle}>
            {
              night ? <IoMoonOutline className="text-main w-6 h-6 rotate-12 group-hover:text-white" /> : <GoSun className="text-main w-6 h-6 rotate-12 group-hover:text-white dark:text-white" />
            }
          </div>
          <div className="w-12 h-12 rounded-full bg-white justify-center items-center hidden cursor-pointer hover:bg-main transition-all ease-linear group dark:bg-black max-md:flex" onClick={menu_toggle}>
            {
              open ? <IoClose className="text-main w-6 h-6 group-hover:text-white dark:text-white" /> : <RxHamburgerMenu className="text-main w-6 h-6 group-hover:text-white dark:text-white" />
            }
          </div>
          <div className="overflow-hidden hidden w-11/12 h-0 mx-auto pl-8 bg-white rounded-2xl flex-col gap-y-5 transition-all ease-linear duration-500 absolute z-10 left-0 right-0 top-[70px] max-md:flex dark:bg-[#1d1d1d] dark:text-white" style={open ? { height: "195px" } : null}>
            {
              Data.map(e => {
                const { id, path, name } = e;
                return (
                  <div key={id} className="first:pt-5 ">
                    <NavLink to={path} className="text-[#44566c] font-medium text-base dark:text-white">{name}</NavLink>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="flex justify-center gap-7 max-md:flex-wrap">
          <div className="w-[30%] max-md:w-full">
            <LeftBar />
          </div>
          <div className="w-3/5 max-md:w-full">
            <Outlet />
          </div>
          <div className="w-[10%] max-md:w-full max-md:hidden">
            <RightBar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App