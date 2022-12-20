import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const OrderTableTitle = () => {
    return (<>
        <tr>
            <th scope="col" className="text-sm font-normal text-gray-700 w-32 px-6 py-4 text-left">
                #Mã đơn
            </th>
            <th scope="col" className="text-sm font-normal text-gray-700 px-6 py-4 text-left">
                Khách hàng
            </th>
            <th scope="col" className="text-sm font-normal text-gray-700 px-6 py-4 text-left">
                Tổng tiền
            </th>
            <th scope="col" className="text-sm font-bold text-gray-700 px-6 py-4 text-left items-center">
                Ngày đặt hàng
                {/* <MdKeyboardArrowDown className="ml-2 inline-block text-black font-medium" /> */}
            </th>
            <th scope="col" className="text-sm font-bold text-gray-700 px-6 py-4 text-left ">
                Phương thức thanh toán
            </th>
            <th scope="col" className="text-sm font-bold text-gray-700 px-6 py-4 text-left ">
                Trạng thái
            </th>

        </tr>
    </>);
}

export default OrderTableTitle;