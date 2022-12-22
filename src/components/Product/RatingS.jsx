import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { AiOutlineStar } from 'react-icons/ai';

const labels = {
    1: 'Vô cùng tệ',
    2: 'Tệ',
    3: 'Ổn',
    4: 'Tốt',
    5: 'Tuyệt vời',
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function RatingS({ review, setReview }) {
    const [value, setValue] = React.useState(5);
    const [hover, setHover] = React.useState(-1);

    React.useEffect(() => {
        setReview({ ...review, rating: value });
    }, [value, setReview]);
    return (
        <Box
            sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Rating
                name="hover-feedback"
                value={value}
                precision={1}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
                emptyIcon={<AiOutlineStar style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
        </Box>
    );
}