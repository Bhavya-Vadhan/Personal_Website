import { LuSchool } from "react-icons/lu";
import { IoBriefcaseOutline } from "react-icons/io5";
import { education, experience, skills, knowledges } from "./Data";

const Resume = () => {
    return (
        <>
            <div className="bg-white rounded-2xl">
                <div className="px-10 pt-14">
                    <h1 className="text-[40px] font-semibold mb-7 relative after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-[180px] after:my-auto after:w-2/6 after:h-[3px] after:bg-main">Resume</h1>
                </div>
                <div className="className= px-10 pb-10">
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <div className="flex items-center space-x-3">
                                <LuSchool className="w-[32px] h-[32px] text-main" />
                                <h4 className="text-[22px] font-medium font-[poppins]">Education</h4>
                            </div>
                            <div className="space-y-4 mt-7">
                                {
                                    education.map(e => {
                                        const { id, date, heading, location } = e
                                        return (
                                            <div key={id} className="odd:bg-[#fff4f4] even:bg-[#eef5fa] p-5 rounded-xl">
                                                <span className="text-[#44566c] text-sm">{date}</span>
                                                <h2 className="font-[poppins] text-lg font-medium">{heading}</h2>
                                                <p className="text-[#44566c] text-sm">{location}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center space-x-3">
                                <IoBriefcaseOutline className="w-[32px] h-[32px] text-main" />
                                <h4 className="text-[22px] font-medium font-[poppins]">Experience</h4>
                            </div>
                            <div className="space-y-4 mt-7">
                                {
                                    experience.map(e => {
                                        const { id, date, designation, company, background } = e
                                        return (
                                            <div key={id} className="p-5 rounded-xl" style={{ backgroundColor: background }}>
                                                <span className="text-[#44566c] text-sm">{date}</span>
                                                <h2 className="font-[poppins] text-lg font-medium">{designation}</h2>
                                                <p className="text-[#44566c] text-sm">{company}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-lightgrey py-14 px-10">
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-[22px] font-medium font-[poppins] mb-6">Working Skills</h2>
                            <div className="space-y-5">
                                {
                                    skills.map(e => {
                                        const { id, skill, background, percentage } = e
                                        return (
                                            <div key={id}>
                                                <div className="flex justify-between mb-[10px]">
                                                    <h4 className="font-[poppins] text-sm text-[#44566c] font-medium">{skill}</h4>
                                                    <p className="font-[poppins] text-sm text-[#44566c] font-medium">{percentage}</p>
                                                </div>
                                                <div className="w-full h-[6px] bg-[#edf2f2] rounded-md">
                                                    <div className="h-full rounded-md" style={{ backgroundColor: background, width: percentage }}></div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div>
                            <div>
                                <h2 className="text-[22px] font-medium font-[poppins] mb-6">Skills</h2>
                                <div className="flex flex-wrap gap-4">
                                    {
                                        knowledges.map(e => {
                                            const { id, name } = e
                                            return (
                                                <span key={id} className="bg-[#edf2f2] inline-block text-[#44566c] text-[14px] font-medium px-5 py-[5px] rounded-md">{name}</span>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center p-5 rounded-b-2xl">
                    <p className="text-[15px]">© 2024 All Rights Reserved</p>
                </div>
            </div >
        </>
    )
}

export default Resume