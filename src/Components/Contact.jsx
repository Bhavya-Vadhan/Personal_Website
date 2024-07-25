const Contact = () => {
    return (
        <>
            <div className="bg-white rounded-2xl dark:bg-black max-md:mx-4">
                <div className="px-10 pt-14 mb-7 max-md:px-5">
                    <h1 className="text-[40px] text-black font-semibold relative after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-[175px] after:my-auto after:w-2/6 after:h-[3px] after:bg-main dark:text-white max-md:text-[35px] max-md:after:left-[160px]">Contact</h1>
                </div>
                <div className="bg-lightgrey mx-10 mb-10 py-14 px-11 rounded-2xl dark:bg-[#0d0d0d] max-md:mx-5 max-md:px-6">
                    <div className="max-w-[450px] mb-10">
                        <h1 className="text-[22px] leading-9 text-[#44566c] font-[poppins] dark:text-[#a6a6a6] max-md:text-lg max-md:leading-[30px]">I'm Always Open To Discussing Product <span className="text-black font-bold dark:text-white">design work or partnerships.</span></h1>
                    </div>
                    <form>
                        <div className="mb-10">
                            <input type="text" placeholder="Name *" className="w-full pb-3 text-[15px] text-[#44566c] placeholder:text-[#44566c] placeholder:font-medium outline-none bg-transparent border-b-[1px] border-[#b5b5b5] transition-all dark:placeholder:text-[#a6a6a6]" />
                        </div>
                        <div className="mb-10">
                            <input type="email" placeholder="Email *" className="w-full pb-3 text-[15px] text-[#44566c] placeholder:text-[#44566c] placeholder:font-medium outline-none bg-transparent border-b-[1px] border-[#b5b5b5] transition-all dark:placeholder:text-[#a6a6a6]" />
                        </div>
                        <div className="mb-9">
                            <textarea placeholder="Message *" className="w-full h-20 text-[15px] text-[#44566c] placeholder:text-[#44566c] placeholder:font-medium outline-none bg-transparent border-b-[1px] border-[#b5b5b5] dark:placeholder:text-[#a6a6a6]"></textarea>
                        </div>
                        <div>
                            <input type="submit" value="Submit" className="inline-block text-[15px] font-medium text-[#1a1a1a] border-[1px] border-[#44566c] rounded-lg w-32 h-11 transition-all hover:bg-main hover:text-white dark:border-main dark:text-white" />
                        </div>
                    </form>
                </div>
                <div className="text-center p-5 bg-lightgrey rounded-b-2xl dark:bg-[#0d0d0d]">
                    <p className="text-[15px] text-[#44566c] dark:text-[#a6a6a6]">© 2024 All Rights Reserved</p>
                </div>
            </div >
        </>
    )
}

export default Contact