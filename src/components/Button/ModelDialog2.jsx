import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { BsCheck, BsXLg } from 'react-icons/bs';

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

export default function ModelDialog2({ open, setOpen, value, handleDelete }) {

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
                        <h2 className="items-center px-2">
                            Bạn có chắc chắn muốn xóa sản phẩm <span className=" font-medium ">{value?.name}</span> này không?
                        </h2>
                        <div className="flex gap-4 justify-between">
                            <Button
                                onClick={() => {
                                    handleDelete(value.id);
                                    handleClose();
                                }}
                                sx={{
                                    textTransform: 'none',
                                    fontFamily: 'Fira Sans',
                                }}>
                                <BsCheck className="text-green-600 text-lg" />
                                Có
                            </Button>

                            <Button
                                sx={{
                                    textTransform: 'none',
                                    fontFamily: 'Fira Sans',
                                }}
                                onClick={handleClose}
                            >
                                <BsXLg className="text-red-600 text-[10px] mr-2" />
                                Không
                            </Button>
                        </div>

                    </div>

                </Box>
            </Modal>
        </div >
    );
}

