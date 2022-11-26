
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import { InputAdornment } from "@mui/material";
const theme = createTheme({
    typography: {
        fontFamily: [
            'Fira Sans',
        ].join(','),
        fontSize: 14,
    },
});

export default function InputNumber({ label, error, handleBlur, handleChange, name, value }) {
    return (
        <ThemeProvider theme={theme}>
            <Box
                noValidate
                autoComplete="off"
            >
                <label className="block text-sm capitalize mb-2 font-medium text-gray-900">{label}</label>
                <TextField
                    sx={{
                        display: 'inline-block',
                        '& .MuiInputBase-input': {
                            fontSize: 14,
                        },
                        '& input': {
                            fontSize: 14,
                        },
                    }}
                    fullWidth
                    size="small"
                    id={name}
                    type="number"
                    name={name}
                    onChange={handleChange}
                    value={value}
                    error={error ? true : false}
                    placeholder="Placeholder"
                    helperText={error}
                    // variant="standard"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

            </Box>

        </ThemeProvider>
    );
}