import React, { useState, useEffect } from "react";

export const useResize = () => {
    const [mobile, setMobile] = useState(false);
    const [screenSize, setScreenSize] = useState(undefined);


    return { mobile, screenSize };
};
