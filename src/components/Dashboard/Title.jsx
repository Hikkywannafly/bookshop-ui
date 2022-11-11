import React from 'react';

const Title = ({ category, title }) => (
    <div className=" mb-5 ">
        <p className="text-sm text-gray-400">{category}</p>
        <p className="text-xl font-bold tracking-tight text-slate-900">
            {title}
        </p>
    </div>
);

export default Title;
