import { Data } from '../Data'
import { NavLink } from 'react-router-dom'
import { FaLinkedinIn, FaInstagram } from "react-icons/fa"

const RightBar = () => {
    return (
        <>
            <div className='bg-white dark:bg-black rounded-2xl space-y-5 p-[18px] sticky top-5'>
                {
                    Data.map(e => {
                        const { id, path, icon, name } = e;
                        return (
                            <NavLink key={id} to={path} className={({ isActive }) => `w-[84px] h-[84px] bg-lightgrey text-[13px] font-medium text-[#44566c] dark:bg-[#212425] dark:hover:bg-main rounded-lg flex justify-center flex-col items-center gap-1 transition-all group dark:text-[#a6a6a6] dark:hover:text-white hover:bg-main hover:text-white ${isActive ? "bg-main text-white dark:bg-main dark:text-white" : null}`}>
                                <span>{icon}</span>{name}
                            </NavLink>
                        )
                    })
                }
            </div>
        </>
    )
}

export default RightBar