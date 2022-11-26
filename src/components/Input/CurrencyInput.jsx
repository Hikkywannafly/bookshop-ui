import * as React from 'react';
import PropTypes from 'prop-types';
import { NumericFormat } from 'react-number-format';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';


const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
        <NumericFormat
            {...other}
            getInputRef={ref}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            valueIsNumericString
            suffix=' đ'
        />
    );
});

NumberFormatCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default function CurrencyInput({ error, handleChange }) {
    const [values, setValues] = React.useState({
        numberformat: '0',
    });

    const handleChangeInput = (event) => {
        handleChange(event);
        setValues({
            ...values,
            [event.target.name]: (event.target.value),
        });
    };

    return (
        <Box >
            <label className="block text-sm capitalize mb-2 font-medium text-gray-900">Product Price</label>
            <TextField
                size="small"
                error={error ? true : false}
                helperText={error}
                sx={{
                    display: 'inline-block',
                    '& .MuiInputBase-input': {
                        fontSize: 15,
                        fontFamily: 'Fira Sans',
                        fontWeight: 500,
                        color: 'royalblue',
                    },
                    '& input': {
                        fontSize: 14,
                    },
                }}
                fullWidth
                value={values.numberformat}
                onChange={handleChangeInput}
                name="price"
                id="formatted-numberformat-input"
                InputProps={{
                    inputComponent: NumberFormatCustom,
                }}

            />
        </Box>
    );
}