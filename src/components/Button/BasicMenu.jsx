import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BsThreeDots, BsPencilSquare } from 'react-icons/bs';
const style = {
    fontFamily: 'Fira Sans',
};

export default function BasicMenu({ handleDelete, id, name }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <BsThreeDots />
            </Button>
            <Menu
                sx={{
                    fontFamily: 'Fira Sans',
                }}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem
                    sx={{
                        fontFamily: 'Fira Sans',
                        fontSize: '14px',
                    }}
                    onClick={handleClose}>

                    Edit</MenuItem>
                <MenuItem sx={{
                    fontFamily: 'Fira Sans',
                    fontSize: '14px',
                }}
                    onClick={() => {
                        handleClose();
                        handleDelete(id, name)
                    }
                    }>
                    Delete
                </MenuItem>
                <MenuItem
                    sx={{
                        fontSize: '14px',
                        fontFamily: 'Fira Sans',
                    }}
                    onClick={handleClose}>Detail</MenuItem>
            </Menu>
        </div >
    );
}