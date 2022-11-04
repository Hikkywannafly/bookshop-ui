import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
const StateContext = createContext();

const initialState = {
    chat: false,
    userProfile: false,
    notification: false,
    category: false,
    suppliers: false,
    price: false,
    from: false,
    navCategory: false,
};

export const ContextProvider = ({ children }) => {
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#1e1e30');
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);

    // resize
    const [mobile, setMobile] = useState(false);
    const [click, setClick] = useState(false);
    const [link, setLink] = useState([]);
    // const setMode = (e) => {

    //     setCurrentMode(e.target.value);
    //     localStorage.setItem('themeMode', e.target.value);
    // };

    // const setColor = (color) => {
    //     setCurrentColor(color);
    //     localStorage.setItem('colorMode', color);
    // };

    const handleClick = (clicked) => setIsClicked({ ...isClicked, [clicked]: !isClicked[clicked] });

    // const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true })
    // resize
    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        // unmount
        return () => { window.removeEventListener('resize', handleResize) };
    })

    useEffect(() => {
        screenSize <= 900 ? setMobile(true) : setMobile(false);
    }, [screenSize])

    // reset
    

    useEffect(() => {
        if (!mobile) {
            setIsClicked({ ...initialState, navCategory: false });
        }
    }, [mobile, setClick])
    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <StateContext.Provider value={{
            activeMenu, screenSize, setScreenSize,
            handleClick, isClicked, initialState,
            setIsClicked, setActiveMenu,
            mobile, setMobile, click, setClick
            , link, setLink,
            currentColor, setCurrentColor
        }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
