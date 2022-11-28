import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

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

export default function ModelDialog({ open, setOpen }) {

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
                <Box sx={{ ...style, width: 300 }}>
                    <div className="flex justify-center flex-col gap-2">
                        <h2 className="items-center px-2">Sản phẩm đã được thêm thành công vào giỏ hàng của bạn.</h2>
                        <div className="flex gap-4 justify-between">
                            <Button
                                onClick={handleClose}
                                sx={{
                                    textTransform: 'none',
                                    fontFamily: 'Fira Sans',
                                }}>Tiếp tục mua hàng</Button>

                            <Button
                                sx={{
                                    textTransform: 'none',
                                    fontFamily: 'Fira Sans',
                                }}
                            >Thanh toán </Button>
                        </div>

                    </div>

                </Box>
            </Modal>
        </div>
    );
}

