import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormHelperText from '@mui/material/FormHelperText';
const theme = createTheme({
    typography: {
        fontFamily: [
            'Fira Sans',
        ].join(','),
        fontSize: 14,
    },
    components: {
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                },
            },
        },
    }
});
const SelectUI = ({ label, name, options, selected, setSelected, error, defaultValue }) => {
    const [value, setValue] = React.useState(`0`);
    const handleChangeSelect = (event) => {
        setSelected({ ...selected, [name]: event.target.value });
        setValue(event.target.value);
    };
    React.useEffect(() => {
        setValue(defaultValue ? defaultValue : `0`);
    }, [defaultValue]);
    return (
        <ThemeProvider theme={theme}>
            <Box size="small" >
                <label className="block text-sm capitalize font-medium text-gray-900  mb-2">{label}</label>
                <FormControl fullWidth size="small">
                    <Select
                        MenuProps={{
                            disableScrollLock: true,
                        }}
                        sx={{
                            display: 'inline-block',
                            '& .MuiInputBase-input': {
                                fontSize: 14,

                                color: value === `` ? `#000000` : null,
                                opacity: value === `` ? 0.3 : null,
                            },
                            '& input': {
                                fontSize: 14,
                            },
                        }}

                        id={name}
                        fontSize="small"
                        size="small"
                        name={name}
                        error={error ? true : false}
                        displayEmpty
                        value={value}
                        placeholder="Placeholder"
                        defaultValue={`0`}
                        onChange={handleChangeSelect}
                    >

                        <MenuItem
                            sx={{
                                color: `#000000`,
                                opacity: 0.3,
                            }}
                            disabled value={`0`}>
                            None
                        </MenuItem>
                        {options?.map((option, index) => {
                            return (
                                <MenuItem key={index} value={option.value}>{option.label}</MenuItem>
                            )
                        })}

                    </Select>
                    {error && <FormHelperText
                        sx={{
                            fontSize: 12,
                            color: '#D32F2F',
                        }}
                    >{error}</FormHelperText>}
                </FormControl>
            </Box>
        </ThemeProvider>
    );
}


export default SelectUI;