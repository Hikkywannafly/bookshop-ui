import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { HiSelector } from 'react-icons/hi'
import { useEffect } from 'react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function SelectBar({ label, options, setSubCategory }) {

    const [selected, setSelected] = useState(options[0])
    // useEffect(() => {
    //     if (setSubCategory) {
    //         setSelected(options[0])
    //     }

    // }, [options])
    return (
        <Listbox value={selected}
            onChange={
                (e) => {
                    setSelected(e);
                    setSubCategory && setSubCategory(e.subCategory)
                }
            } >
            {({ open }) => (
                <>
                    <div className='flex flex-col '>
                        <Listbox.Label className="block  capitalize text-sm font-medium text-gray-900">{label}</Listbox.Label>
                        <div className="relative mt-1 ">
                            <Listbox.Button className="relative 
                            duration-200
                        w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3
                         pr-10 text-left shadow-sm focus:border-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-800 sm:text-sm">
                                <span className="flex items-center">
                                    <span className={` block truncate ${selected.slug === null ? ` text-gray-400 ` : null}`}>{selected.name}</span>
                                </span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                    <HiSelector className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </Listbox.Button>

                            <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md
                             bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {options.map((item) => (
                                        <Listbox.Option
                                            key={item.name}
                                            className={({ active }) =>
                                                classNames(
                                                    active ? 'text-white bg-slate-800' : 'text-gray-900',
                                                    'relative cursor-default select-none py-2 pl-3 pr-9'
                                                )
                                            }
                                            value={item}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    <div className="flex items-center">
                                                        <span
                                                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                        >
                                                            {item.name}
                                                        </span>
                                                    </div>
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </div>
                </>
            )}
        </Listbox>
    )
}
