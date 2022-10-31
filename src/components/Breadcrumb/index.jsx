
import React from 'react'
import { RiArrowDropRightLine } from 'react-icons/ri';

const Breadcrumb = ({ params = [] }) => {
    const length = params?.length
    console.log(`params`, params);
    return (
        <div className='capitalize my-2 w-full flex gap-1.5 items-center'>
            {
                params.map((e, i) => (
                    <div
                        key={e.slug}
                        className='inline-block '>
                        <a
                            href={e.slug}
                        >
                            <span
                                className='text-slate-800 mr-2'
                            >
                                {e.name}
                            </span>
                        </a>
                        {
                            i < length - 1 &&
                            <span className='mr-2'><RiArrowDropRightLine className={'inline-block filter-[#626262]'} /></span>
                        }
                    </div>
                ))
            }
        </div>
    )
}
export default Breadcrumb