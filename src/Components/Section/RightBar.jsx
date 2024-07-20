import { Data } from '../Data'
import { NavLink } from 'react-router-dom';

const RightBar = () => {
    return (
        <>
            <div className='bg-white rounded-2xl space-y-5 p-[18px] sticky top-5'>
                {
                    Data.map(e => {
                        const { id, path, name } = e;
                        return (
                            <div key={id} className='bg-lightgrey w-[84px] h-[84px] flex justify-center items-center rounded-lg transition-all hover:bg-main group'>
                                <NavLink to={path} className="text-sm text-[#44566c] font-medium group-hover:text-white">{name}</NavLink>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default RightBar