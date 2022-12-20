import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    fontSize: 14,
    pt: 2,
    px: 2,
    pb: 1,
    borderRadius: '8px',
    fontFamily: 'Fira Sans',
    textTransform: 'none',
};

export default function ModelDialog({ open, setOpen, content, button, returnButton }) {
    const navigate = useNavigate();
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Modal
                disableScrollLock={true}
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"

            >
                <Box sx={{ ...style, width: 400 }}>
                    <div className="flex justify-center flex-col gap-2">
                        <h2 className="items-center px-2">{content}</h2>
                        <div className="flex gap-4 justify-between">
                            <Button
                                onClick={() => {
                                    navigate('/all-category.html');
                                }}

                                sx={{
                                    textTransform: 'none',
                                    fontFamily: 'Fira Sans',
                                }}>{returnButton}</Button>

                            <Button
                                sx={{
                                    textTransform: 'none',
                                    fontFamily: 'Fira Sans',
                                }}
                            >{button} </Button>
                        </div>

                    </div>

                </Box>
            </Modal>
        </div>
    );
}

