import { Fragment, useState, memo, useMemo, useEffect } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { HiSelector } from 'react-icons/hi'
const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
}
const SelectBar = ({ label, options, error, handleSort }) => {
    const [selected, setSelected] = useState(options[0])

    return (
        <Listbox value={selected}
            onChange={
                (e) => {
                    setSelected(e);
                    handleSort(e.value);
                }
            }
        >
            {({ open }) => (
                <>
                    <div className='flex flex-col justify-center  w-[180px] '>
                        <Listbox.Label className="block capitalize text-sm font-medium text-gray-900">{label}</Listbox.Label>
                        <div className="relative mt-1 ">
                            <Listbox.Button
                                style={error ? { borderColor: `coral` } : { borderColor: `rgb(209 213 219)` }}
                                className={`
                                relative
                              mt-1
                              
                w-full cursor-default rounded-md border border-gray-300 bg-white py-[3px] pl-3
                pr-3 text-left shadow-sm  focus:outline-none focus:ring-1 ${error ? 'focus:ring-[#FF7F50]' : 'focus:ring-slate-800'} sm:text-sm
                duration-200
                `}
                            >
                                <span className="flex items-center">
                                    <span className={` block truncate ${selected.value === null ? ` text-gray-400 ` : null}`}>{selected.name}</span>
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
                                                    'relative cursor-default select-none py-1 pl-1 pr-3'
                                                )
                                            }
                                            disabled={item.value === null ? true : false}
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

export default memo(SelectBar);