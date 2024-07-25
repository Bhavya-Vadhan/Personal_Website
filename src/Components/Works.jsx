import { portfolio } from "./Data"
import { NavLink } from "react-router-dom";

const Works = () => {
    return (
        <>
            <div className="bg-white rounded-2xl dark:bg-black max-md:mx-4">
                <div className="px-10 pt-14 mb-7">
                    <h1 className="text-[40px] font-semibold relative after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-[190px] after:my-auto after:w-2/6 after:h-[3px] after:bg-main dark:text-white max-md:text-[35px] max-md:after:left-[160px]">Portfolio</h1>
                </div>
                <div className="px-10 mb-14 max-md:px-5">
                    <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
                        {portfolio.map(e => {
                            const { id, category, name, image, path, Technologies, background } = e;
                            return (
                                <div key={id}>
                                    <div className="rounded-xl p-4 relative overflow-hidden group dark:!bg-transparent dark:border-[1px] dark:border-[#212425]" style={{ backgroundColor: background }}>
                                        <div className="mb-4">
                                            <NavLink to={path}>
                                                <img src={image} alt="" className="rounded-xl" />
                                            </NavLink>
                                        </div>
                                        <div>
                                            <span className="text-[#44566c] text-sm font-medium inline-block dark:text-[#a6a6a6]">{category}</span>
                                            <h2 className="font-[poppins] text-black text-[16px] font-semibold dark:text-white">{name}</h2>
                                        </div>
                                        <div className="absolute w-full h-[100px] bg-main rounded-xl left-0 bottom-[-150px] flex flex-col justify-center group-hover:bottom-0 transition-all linear duration-700">
                                            <h2 className="text-center text-white font-semibold text-lg font-[poppins] mb-1">Technologies Used</h2>
                                            <div className="flex justify-center space-x-5">
                                                {
                                                    Technologies.map((el, index) => {
                                                        return (
                                                            <span key={index} className="text-white font-medium text-base">{el}</span>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="text-center p-5 rounded-b-2xl dark:bg-[#0d0d0d]">
                    <p className="text-[15px] text-[#44566c] dark:text-[#a6a6a6]">© 2024 All Rights Reserved</p>
                </div>
            </div >
        </>
    )
}

export default Works