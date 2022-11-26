import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Paper from "@mui/material/Paper";
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { ThemeProvider, createTheme, } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Fira Sans',
        ].join(','),
        fontSize: 14,
    },
});


const filter = createFilterOptions();

export default function AutoCompelete({ label, error, handleBlur, options, name, selected, setSelected }) {
    const [value, setValue] = React.useState(null);

    return (
        <ThemeProvider theme={theme}>
            <Stack>
                <label className="block text-sm capitalize font-medium text-gray-900 mb-2">{label}</label>
                <Autocomplete
                    name={name}
                    sx={{
                        '& input': {
                            fontSize: 14,
                        },
                    }
                    }
                    onBlur={handleBlur}
                    size="small"
                    value={value}
                    fullWidth
                    onChange={(event, newValue) => {
                        console.log(newValue.title);
                        setSelected({ ...selected, [name]: newValue.title });
                        if (typeof newValue === 'string') {
                            setValue({
                                title: newValue,
                            });
                        } else if (newValue && newValue.inputValue) {
                            // Create a new value from the user input
                            setValue({
                                title: newValue.inputValue,
                            });
                        } else {
                            setValue(newValue);
                        }
                    }}
                    filterOptions={(options, params) => {
                        const filtered = filter(options, params);

                        const { inputValue } = params;
                        // Suggest the creation of a new value
                        const isExisting = options.some((option) => inputValue === option.title);
                        if (inputValue !== '' && !isExisting) {
                            filtered.push({
                                inputValue,
                                title: `${inputValue}`,
                            });
                        }

                        return filtered;
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="free-solo-with-text-demo"
                    options={options}
                    getOptionLabel={(option) => {
                        // Value selected with enter, right from the input
                        if (typeof option === 'string') {
                            return option;
                        }
                        // Add "xxx" option created dynamically
                        if (option.inputValue) {
                            return option.inputValue;
                        }
                        // Regular option
                        return option.title;
                    }}
                    renderOption={(props, option) => <li
                        style={{ fontSize: 14 }}
                        {...props}>{option.title}</li>}

                    freeSolo
                    renderInput={(params) => (
                        <TextField
                            error={error ? true : false}
                            helperText={error}
                            {...params} />
                    )}
                />
            </Stack>

        </ThemeProvider>


    );
}
