import { Outlet } from "react-router-dom"
import RightBar from "./Components/Section/RightBar"
import LeftBar from "./Components/Section/LeftBar"

const App = () => {
  return (
    <div className="py-40">
      <div className="container mx-auto">
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