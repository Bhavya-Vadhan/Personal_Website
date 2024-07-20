import { service } from "./Data"

const About = () => {
    return (
        <>
            <div className="bg-white rounded-2xl">
                <div className="px-10 pt-14">
                    <h1 className="text-[40px] font-semibold mb-7 relative after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-[140px] after:my-auto after:w-2/6 after:h-[3px] after:bg-main">About</h1>
                    <p className="text-[15px] mb-3">I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
                    <p className="text-[15px] leading-[26px]">My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
                </div>
                <div className="px-10 py-9">
                    <h1 className="text-[25px] font-[poppins] font-medium mb-7">What I Do!</h1>
                    <div className="grid grid-cols-2 gap-7">
                        {
                            service.map(e => {
                                const { id, name, icon, background, para } = e
                                return (
                                    <div key={id} className="p-5 rounded-xl flex gap-5" style={{ backgroundColor: background }}>
                                        <div>
                                            {icon}
                                        </div>
                                        <div>
                                            <h4 className="font-[poppins] font-medium text-lg mb-2">{name}</h4>
                                            <p className="text-[15px] leading-6">{para}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="text-center p-5 bg-lightgrey rounded-b-2xl">
                    <p className="text-[15px]">© 2024 All Rights Reserved</p>
                </div>
            </div >
        </>
    )
}

export default About