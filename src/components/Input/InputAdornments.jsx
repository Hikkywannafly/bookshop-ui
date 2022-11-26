import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { ThemeProvider, createTheme, } from '@mui/material/styles';
const theme = createTheme({
    typography: {
        fontFamily: [
            'Fira Sans',
        ].join(','),
        fontSize: 14,
    },
});
export default function InputAdornments({ value, error, handleBlur, handleChange, name }) {


    // const handleChange = (prop) => (event) => {
    //     setValues({ ...values, [prop]: event.target.value });
    // };


    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', width: 200 }}>

                <FormControl>
                    <label className="block text-sm capitalize font-medium text-gray-900 mb-2">Page Number</label>
                    <OutlinedInput
                        size="small"

                        sx={{

                            '& input': {
                                fontSize: 14,
                            },
                        }
                        }
                        name={name}
                        type="number"
                        id="outlined-adornment-weight"
                        value={value}
                        onChange={handleChange}
                        endAdornment={<InputAdornment
                            sx={{
                                '& .MuiInputAdornment-sizeSmall': {
                                    fontSize: 12,
                                }
                            }
                            }
                            position="end" variant="standard" >Page</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                    />

                </FormControl>

            </Box>
        </ThemeProvider>
    );
}