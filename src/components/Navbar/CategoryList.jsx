const CategoryList = (props) => {
    const { name, slug, handleNavigate } = props
    return (
        <>
            <div
                onClick={handleNavigate}
                className="flex items-center mx-4 my-1 px-1 py-3 hover:bg-gray-100 rounded-xl transition ">
                <span className="ml-6 text-gray-900 font-bold capitalize">{name}</span>
            </div>

        </>
    );
}

export default CategoryList;