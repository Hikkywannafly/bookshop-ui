
import React, { useMemo } from 'react'
import { RiArrowDropRightLine } from 'react-icons/ri';
import LoadingSkeleton from '../Animation/LoadingSkeleton';
const Loading = () => {
    return (
        <LoadingSkeleton className='w-32 h-4' />
    );
}

const Breadcrumb = (props) => {
    const params = useMemo(() => props.params, [props.params])

    return (
        <div className='text-xs md:text-sm capitalize my-1 w-full flex md:gap-1 items-center '>
            {
                params.map((e, i) => (
                    <div
                        key={e.slug}
                        className='inline-block '>
                        <a
                            href={e.slug === '/' ? '/' : `/${e.slug}.html`}
                        >
                            <span
                                className={`text-slate-800 md:mr-1.5  text-ellipsis overflow-hidden 
                                ${i === params.length - 1 ? 'font-bold' : null}`}>
                                {e.name.length > 20 ? e.name.slice(0, 20) + '...' : e.name}
                            </span>
                        </a>
                        {
                            i < params?.length - 1 &&
                            <span className='mr-2'><RiArrowDropRightLine className={'inline-block filter-[#626262]'} /></span>
                        }
                    </div>
                ))
            }
        </div>
    )
};

Breadcrumb.Loading = Loading;
export default Breadcrumb;