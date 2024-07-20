import { portfolio } from "./Data"

const Works = () => {
    return (
        <>
            <div className="bg-white rounded-2xl">
                <div className="px-10 pt-14 mb-7">
                    <h1 className="text-[40px] font-semibold relative after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-[190px] after:my-auto after:w-2/6 after:h-[3px] after:bg-main">Portfolio</h1>
                </div>
                <div className="px-10 mb-14">
                    <div className="grid grid-cols-2 gap-6">
                        {portfolio.map(e => {
                            const { id, category, name, image, path, Technologies, background } = e;
                            return (
                                <div key={id}>
                                    <div className="rounded-xl p-4 relative overflow-hidden group" style={{ backgroundColor: background }}>
                                        <div className="mb-4">
                                            <img src={image} alt="" className="rounded-xl" />
                                        </div>
                                        <div>
                                            <span className="text-[#44566c] text-sm font-medium inline-block">{category}</span>
                                            <h2 className="font-[poppins] text-[16px] font-semibold">{name}</h2>
                                        </div>
                                        <div className="absolute w-full h-[100px] bg-[#6ab5b9] rounded-xl left-0 bottom-[-150px] flex flex-col justify-center group-hover:bottom-0 transition-all linear duration-700">
                                            <h1 className="text-center text-white font-semibold text-lg font-[poppins] mb-1">Technologies Used</h1>
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
                <div className="text-center p-5 bg-lightgrey rounded-b-2xl">
                    <p className="text-[15px]">© 2024 All Rights Reserved</p>
                </div>
            </div >
        </>
    )
}

export default Works