import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';

import Stack from '@mui/material/Stack';

export default function ButtonLoading({ label, loading, type, ...props }) {
    return (
        <Stack direction="row" spacing={2}>
            <LoadingButton
                type={type}
                loading={loading}
                sx={{
                    fontFamily: 'Fira Sans',
                    fontSize: 14,
                    textTransform: 'none',

                }}
                variant="outlined">
                {
                    label
                }
            </LoadingButton>
        </Stack>
    );
}