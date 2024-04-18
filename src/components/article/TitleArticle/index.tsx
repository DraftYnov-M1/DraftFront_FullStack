import React from 'react';

interface IProps {
    title: string;
}

const Index = ({title} : IProps) => {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
}

export default Index;
