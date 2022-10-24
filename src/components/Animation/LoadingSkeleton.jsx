const LoadingSkeleton = ({ className = '' }) => {
    return (<>
        <div className={`skeleton animate-pulse ${className}`}>

        </div>
    </>);
}

export default LoadingSkeleton;