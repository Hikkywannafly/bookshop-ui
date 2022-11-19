import Title from "../Dashboard/Title";
const DashboardPage = ({ title, category, children }) => {
    return (
        <>
            <div className="m-1 md:m-10 mt-1 p-2 md:p-5 bg-white rounded-xl shadow-sm">
                <Title category={category} title={title} />
                {children}
            </div>
        </>
    );
}

export default DashboardPage;