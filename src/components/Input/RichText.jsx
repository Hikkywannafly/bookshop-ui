import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichText = ({ label }) => {
    const [value, setValue] = useState('');

    return <ReactQuill theme="snow" className='rounded-md' value={value} onChange={setValue} />
}

export default RichText;