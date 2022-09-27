import React from 'react';
import { Link } from 'react-router-dom';

function NoPage() {
    return (
        <>
            <h1>404</h1>
            <Link to="/">Go Back</Link>
        </>
    );
}

export default NoPage;