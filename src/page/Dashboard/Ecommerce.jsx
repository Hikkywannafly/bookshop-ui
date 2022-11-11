import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
// import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import Button from '~/components/Dashboard/Button';
import { useStateContext } from '~/hooks/useStateContext';


// const DropDown = ({ currentMode }) => (
//     <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
//         <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
//     </div>
// );

const Ecommerce = () => {
    const { currentColor, currentMode } = useStateContext();

    return (
        <div className="mt-24  ">
            <div className="flex flex-wrap lg:flex-nowrap justify-center ">
                <div className="bg-white h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 
                shadow-lg
                bg-hero-pattern bg-no-repeat bg-cover bg-center">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-bold text-gray-400">Earnings</p>
                            <p className="text-2xl">$63,448.78</p>
                        </div>
                        <button
                            type="button"
                            style={{ backgroundColor: currentColor }}
                            className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
                        >
                            <BsCurrencyDollar />
                        </button>
                    </div>
                    <div className="mt-6">
                        <Button
                            color="white"
                            // bgColor={currentColor}
                            text="Download"
                            borderRadius="10px"
                        />
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Ecommerce;
