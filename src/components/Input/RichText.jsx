import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichText = ({ selected, setSelected }) => {
    const handleChange = (event) => {
        setSelected({ ...selected, decription: event });
    }
    return <ReactQuill theme="snow" className='rounded-md' value={selected.decription} onChange={handleChange} />
}

export default RichText;