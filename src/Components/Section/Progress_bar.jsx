import { useState, useEffect } from "react"

const Progress_bar = ({ width }) => {

    let [progress, setProgress] = useState(0)

    useEffect(() => {
        setInterval(() => {
            progress <= width ? setProgress(progress++) : null
        }, 50)
    }, [])

    return (
        <div className="w-full h-[6px] bg-[#edf2f2] rounded-md">
            <div className="h-full rounded-md bg-main transition-all ease-linear" style={{ width: `${progress}%` }}></div>
        </div>
    )
}

export default Progress_bar