import React from 'react';

import { useStateContext } from '~/hooks/useStateContext';
import { Link } from 'react-router-dom';
const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width, link }) => {
    const { setIsClicked, initialState } = useStateContext();

    return (
        <Link
            to={link}
        >
            <button
                type="button"
                onClick={() => setIsClicked(initialState)}
                style={{ backgroundColor: bgColor, color, borderRadius }}
                className={` text-${size} p-1 px-2.5 w-${width} rounded-lg hover:drop-shadow-xl hover:bg-${bgHoverColor} duration-300 
            shadow-lg cursor-pointer
            flex items-center gap-2 `}
            >
                {icon} {text}
            </button>
        </Link>
    );
};

export default Button;