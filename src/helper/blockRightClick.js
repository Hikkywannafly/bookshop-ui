const blockRightClick = () => {
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });


    document.addEventListener("keydown", (e) => {
        if (e.keyCode === 123) e.preventDefault();
        if (e.ctrlKey && e.shiftKey && e.keyCode === 73) e.preventDefault();
        if (e.ctrlKey && e.shiftKey && e.keyCode === 74) e.preventDefault();
    });
}

export default blockRightClick;
