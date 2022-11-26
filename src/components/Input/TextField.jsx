import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Fira Sans',
        ].join(','),
        fontSize: 14,
    },
});

export default function TextFields({ label, error, handleBlur, handleChange, name, value, onChange }) {
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
                    onChange={onChange ? (e) => { onChange(e); handleChange(e) } : null}
                    onBlur={handleBlur}
                    value={value}
                    error={error ? true : false}
                    helperText={error}
                    fullWidth
                    size="small"
                    id={name}
                    name={name}
                    placeholder="Placeholder"
                    multiline
                />
            </Box>

        </ThemeProvider>
    );
}