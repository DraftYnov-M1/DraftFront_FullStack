import React from 'react';

interface IProps {
    description: string;
}

const Index = ({description} : IProps) => {
    return (
        <div>
            <p>{description}</p>
        </div>
    );
}

export default Index;
