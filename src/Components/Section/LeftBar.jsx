import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { info } from "../Data"
import { NavLink } from "react-router-dom";
import Profile from "../../assets/images/profile.png"

const LeftBar = () => {
    return (
        <>
            <div className='bg-white rounded-2xl p-8 sticky top-[145px] text-center'>
                <div className="mb-5 mt-[-150px]">
                    <img src={Profile} alt="Profile Image" className="rounded-2xl block mx-auto" />
                </div>
                <h1 className='font-medium text-[28px] mb-2'>Bhavya Vadhan</h1>
                <span className='bg-lightgrey inline-block text-[13px] font-medium px-5 py-[5px] rounded-md '>Front-End Developer</span>
                <div className="flex justify-center mt-[15px] space-x-3">
                    <NavLink to="https://www.instagram.com/bhavyavadhan10/" className="w-10 h-10 bg-lightgrey rounded-lg flex justify-center items-center transition-all group hover:bg-[#e12a72]">
                        <FaInstagram className="w-[18px] h-[18px] text-[#e12a72] group-hover:text-white" />
                    </NavLink>
                    <NavLink to="https://www.linkedin.com/in/bhavya-vadhan-4a2bb5175/" className="w-10 h-10 bg-lightgrey rounded-lg flex justify-center items-center transition-all group hover:bg-[#144679]">
                        <FaLinkedinIn className="w-[18px] h-[18px] text-[#144679] group-hover:text-white" />
                    </NavLink>
                </div>
                <div className="bg-lightgrey rounded-xl my-5 p-5 space-y-[10px]">
                    {
                        info.map(e => {
                            const { id, name, icon, detail } = e
                            return (
                                <div key={id} className="flex space-x-5 border-b-[1px] border-[#e3e3e3] pb-[10px] last:border-b-0 last:pb-0">
                                    <div className="w-11 h-11 rounded-xl bg-white flex justify-center items-center">
                                        {icon}
                                    </div>
                                    <div className="text-left">
                                        <span className="inline-block text-[#44566c] text-sm">{name}</span>
                                        <h3 className="text-[15px] font-[poppins] font-medium">{detail}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex justify-center">
                    <a href="bhavya-resume.pdf" download className="bg-main w-56 flex justify-center items-center gap-2 rounded-xl py-[10px] text-white font-medium text-base border-[1px] border-main transition-all hover:bg-transparent hover:text-black"><span><MdOutlineFileDownload className="w-7 h-7" /></span> Download CV</a>
                </div>
            </div>
        </>
    )
}

export default LeftBar