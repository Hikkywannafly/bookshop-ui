import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const AdminTableTitle = () => {
    return (<>
        <tr>
            <th scope="col" className="text-sm font-normal text-gray-700 w-14 px-6 py-4 text-left">
                #ID
            </th>
            <th scope="col" className="text-sm font-normal text-gray-700 px-6 py-4 text-left">
                Product
            </th>
            <th scope="col" className="text-sm font-normal text-gray-700 px-6 py-4 text-right">
                Quantity
            </th>
            <th scope="col" className="text-sm font-bold text-gray-700 px-6 py-4 text-right items-center">

                Sold
                <MdKeyboardArrowDown className="ml-2 inline-block text-black" font-medium />


            </th>
            <th scope="col" className="text-sm font-bold text-gray-700 px-6 py-4 text-right">
                Revenue
            </th>
            <th scope="col" className="text-sm font-bold text-gray-700 px-6 py-4 text-right">
                Retention
            </th>
            <th scope="col" className="text-sm font-bold text-gray-700 px-6 py-4 text-right">
                Average TBO
            </th>

        </tr>
    </>);
}

export default AdminTableTitle;