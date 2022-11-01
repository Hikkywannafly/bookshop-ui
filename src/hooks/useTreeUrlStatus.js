import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
const useTreeUrlStatus = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [state, setState] = useState(() => {
        return {
            selected: searchParams.get("selected") ?? "",
            expanded: searchParams.get("expanded")
                ? searchParams.get("expanded").split(",")
                : []
        };
    });

    useEffect(() => {
        if (
            searchParams.get("selected") !== state.selected ||
            searchParams.get("expanded") !== state.expanded
        ) {
            setSearchParams({
                selected: state.selected,
                expanded: state.expanded.join(",")
            });
        }
    }, [state, searchParams, setSearchParams]);

    const updateState = (key, value) => {
        setState((prevState) => {
            const newState = { ...prevState, [key]: value };
            return newState;
        });
    };

    return [state, updateState];
};

export default useTreeUrlStatus;