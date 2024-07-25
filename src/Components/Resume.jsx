import { LuSchool } from "react-icons/lu";
import { IoBriefcaseOutline } from "react-icons/io5";
import { education, experience, skills, knowledges } from "./Data";
import Progress_bar from "./Section/Progress_bar"

const Resume = () => {
    return (
        <>
            <div className="bg-white dark:bg-black rounded-2xl max-md:mx-4">
                <div className="px-10 pt-14 max-md:px-5">
                    <h1 className="text-[40px] text-black font-semibold mb-7 relative after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-[180px] after:my-auto after:w-2/6 after:h-[3px] after:bg-main dark:text-white max-md:text-[35px] max-md:after:left-[160px]">Resume</h1>
                </div>
                <div className="className= px-10 pb-10 max-md:px-5">
                    <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1 max-md:gap-8">
                        <div>
                            <div className="flex items-center space-x-3">
                                <LuSchool className="w-[32px] h-[32px] text-main" />
                                <h4 className="text-[22px] text-black font-medium font-[poppins] dark:text-white">Education</h4>
                            </div>
                            <div className="space-y-4 mt-7">
                                {
                                    education.map(e => {
                                        const { id, date, heading, location } = e
                                        return (
                                            <div key={id} className="odd:bg-[#fff4f4] even:bg-[#eef5fa] p-5 rounded-xl dark:!bg-transparent dark:border-[1px] dark:border-[#212425]">
                                                <span className="text-[#44566c] text-sm dark:text-[#a6a6a6]">{date}</span>
                                                <h2 className="font-[poppins] text-black text-lg font-medium dark:text-white max-md:text-base">{heading}</h2>
                                                <p className="text-[#44566c] text-sm dark:text-[#a6a6a6]">{location}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center space-x-3">
                                <IoBriefcaseOutline className="w-[32px] h-[32px] text-main" />
                                <h4 className="text-[22px] text-black font-medium font-[poppins] dark:text-white">Experience</h4>
                            </div>
                            <div className="space-y-4 mt-7">
                                {
                                    experience.map(e => {
                                        const { id, date, designation, company, background } = e
                                        return (
                                            <div key={id} className="p-5 rounded-xl dark:!bg-transparent dark:border-[1px] dark:border-[#212425]" style={{ backgroundColor: background }}>
                                                <span className="text-[#44566c] text-sm dark:text-[#a6a6a6]">{date}</span>
                                                <h2 className="font-[poppins] text-black text-lg font-medium dark:text-white max-md:text-base">{designation}</h2>
                                                <p className="text-[#44566c] text-sm dark:text-[#a6a6a6]">{company}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-lightgrey dark:bg-[#0d0d0d] py-14 px-10 max-md:px-5">
                    <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
                        <div>
                            <h2 className="text-[22px] text-black font-medium font-[poppins] mb-6 dark:text-white">Working Skills</h2>
                            <div className="space-y-5">
                                {
                                    skills.map(e => {
                                        const { id, skill, percentage } = e
                                        return (
                                            <div key={id}>
                                                <div className="flex justify-between mb-[10px]">
                                                    <h4 className="font-[poppins] text-sm text-[#44566c] font-medium dark:text-[#a6a6a6]">{skill}</h4>
                                                    <p className="font-[poppins] text-sm text-[#44566c] font-medium dark:text-[#a6a6a6]">{percentage}</p>
                                                </div>
                                                <Progress_bar width={percentage} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div>
                            <div>
                                <h2 className="text-[22px] text-black font-medium font-[poppins] mb-6 dark:text-white">Skills</h2>
                                <div className="flex flex-wrap gap-4 max-md:gap-2 max-md:gap-y-3">
                                    {
                                        knowledges.map(e => {
                                            const { id, name } = e
                                            return (
                                                <span key={id} className="bg-[#edf2f2] inline-block text-[#44566c] text-[14px] font-medium px-5 py-[5px] rounded-md dark:bg-[#1c1c1c] dark:text-[#a6a6a6]">{name}</span>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center p-5 rounded-b-2xl">
                    <p className="text-[15px] text-[#44566c] dark:text-[#a6a6a6]">© 2024 All Rights Reserved</p>
                </div>
            </div >
        </>
    )
}

export default Resume