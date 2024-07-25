import { service } from "./Data"

const About = () => {
    return (
        <>
            <div className="bg-white rounded-2xl dark:bg-black max-md:mx-4">
                <div className="px-10 pt-14 max-md:px-5">
                    <h1 className="text-[40px] text-black dark:text-white font-semibold mb-7 relative after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-[140px] after:my-auto after:w-2/6 after:h-[3px] after:bg-main max-md:text-[35px] max-md:after:left-[130px]">About</h1>
                    <p className="text-[15px] text-black dark:text-white leading-[26px] mb-3">We are a team of passionate front-end developers dedicated to crafting exceptional digital experiences. Our expertise lies in transforming creative designs into responsive, user-friendly websites and applications using cutting-edge technologies.</p>
                    <p className="text-[15px] text-black dark:text-white leading-[26px]">We focus on delivering high-quality code, seamless performance, and engaging interfaces that meet our clients' unique needs and exceed their expectations. With a commitment to innovation and excellence, we strive to bring every project to life with precision and creativity.</p>
                </div>
                <div className="px-10 py-10 max-md:px-5">
                    <h1 className="text-[25px] text-black dark:text-white font-[poppins] font-medium mb-7">What I Do!</h1>
                    <div className="grid grid-cols-2 gap-7 max-md:grid-cols-1">
                        {
                            service.map(e => {
                                const { id, name, icon, background, para } = e
                                return (
                                    <div key={id} className="p-5 rounded-xl dark:!bg-transparent dark:border-[1px] dark:border-[#212425]" style={{ backgroundColor: background }}>
                                        <div className="flex items-center gap-3 mb-3">
                                            {icon}
                                            <h4 className="font-[poppins] text-black font-medium text-lg dark:text-white">{name}</h4>
                                        </div>
                                        <div>
                                            <p className="text-[15px] text-[#44566c] leading-6 dark:text-white">{para}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="text-center p-5 bg-lightgrey dark:bg-[#0d0d0d] rounded-b-2xl">
                    <p className="text-[15px] text-[#44566c] dark:text-[#a6a6a6]">© 2024 All Rights Reserved</p>
                </div>
            </div >
        </>
    )
}

export default About