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
const SlectProvinces = ({ error, options, label, defaultValue, name, selected, setSelected, defaultOption }) => {
    const [value, setValue] = React.useState(``);
    const handleChange = (event) => {
        setValue(event.target.value);
        setSelected(selected => ({ ...selected, [name]: event.target.value }));
    };
    React.useEffect(() => {
        if (defaultOption) {
            setValue(defaultOption);
        }
    }, [defaultOption])
    return (
        <>
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
                            fontSize="small"
                            size="small"
                            error={error ? true : false}
                            displayEmpty
                            value={value}
                            placeholder="Placeholder"
                            name={name}
                            onChange={handleChange}
                        >
                            {options.length > 0 && options?.map((option, index) => {
                                if (Array.isArray(option)) {
                                    return (
                                        <MenuItem key={index} value={option[0]}>{option[1]}</MenuItem>
                                    )
                                }
                                return (
                                    <MenuItem key={index} value={option.value}
                                    >{option.label}</MenuItem>
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
        </>);
}

export default SlectProvinces;
