import { getBookData2 } from '~/redux/Product/ProductRequest';
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
const Pagination = (props) => {
    const location = useLocation();
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams({});
    const { totalPages, currentPage, previous, next } = props;
    const navigate = useNavigate();

    const handlePrevious = () => {
        setSearchParams({ page: previous.split(`?page=`)[1] }, { replace: true });
    }
    const handleNext = () => {
        // getBookData2(next, dispatch);
        setSearchParams({ page: next.split(`?page=`)[1] }, { replace: true });
    }
    return (
        <>
            <nav aria-label="Page navigation ">
                <ul className="inline-flex space-x-2 text-base">
                    {/* previous */}
                    {
                        previous && (<li
                            onClick={handlePrevious}
                        >
                            <button className="flex items-center justify-center w-8 h-8  transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" ></path></svg></button>
                        </li>
                        )

                    }
                    <li><button className="w-8 h-8 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">1</button></li>
                    <li><button className="w-8 h-8  transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">2</button></li>


                    <li><button className="w-8 h-8  transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">...</button></li>


                    <li><button className="w-8 h-8 text-white transition-colors duration-150 bg-slate-800 border border-r-0 rounded-full focus:shadow-outline">3</button></li>

                    {/* next */}

                    {

                        next && (
                            <li
                                onClick={handleNext}
                            ><button className="flex items-center justify-center w-8 h-8  transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-indigo-100">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" ></path></svg></button>
                            </li>
                        )
                    }

                </ul>
            </nav>
        </>
    );
}

export default Pagination;