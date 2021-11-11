import React from 'react';
import './App.css';

const App = () => {
    return (
        <div
            style={{
                textAlign: 'center',
                margin: '25vh',
                border: '1px solid black',
                padding: '3rem',
            }}
        >
            <h1>
                Hello{' '}
                <span role="img" aria-label="rocket">
                    🚀
                </span>
            </h1>
        </div>
    );
};

export default App;
