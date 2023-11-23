import Spinner from '@/Components/Spinner/Spinner';
import React from 'react';

const loading = () => {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-100px)]">
            <Spinner />
        </div>
    );
};

export default loading;