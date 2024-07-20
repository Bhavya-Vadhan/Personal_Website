const Contact = () => {
    return (
        <>
            <div className="bg-white rounded-2xl">
                <div className="px-10 pt-14 mb-7">
                    <h1 className="text-[40px] font-semibold relative after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-[180px] after:my-auto after:w-2/6 after:h-[3px] after:bg-main">Contact</h1>
                </div>
                <div className="bg-lightgrey mx-10 mb-7 py-14 px-11 rounded-2xl">
                    <div className="max-w-[450px] mb-10">
                        <h1 className="text-[22px] leading-9 text-[#44566c] font-[poppins]">I'm Always Open To Discussing Product <span className="text-black font-bold">design work or partnerships.</span></h1>
                    </div>
                </div>
                <div className="text-center p-5 bg-lightgrey rounded-b-2xl">
                    <p className="text-[15px]">© 2024 All Rights Reserved</p>
                </div>
            </div >
        </>
    )
}

export default Contact