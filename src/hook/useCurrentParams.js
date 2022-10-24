import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
export const useCurrentParams = () => {
    const [currentParams, setCurrentParams] = useState()
    const location = useLocation();
    useEffect(() => {
        let param = location.pathname.split('.html')[0]
        if (param) {
            setCurrentParams(param);
        }
    }, [location.pathname])

    return currentParams
}