import React, {useEffect, useState} from 'react';
import Main from './ui/layout/Main';
import Navbar from './ui/layout/Navbar';

const App: React.FC = () => {

    const message = () => {
        console.log('Ur a full-stack engineer!');
    };


    return (
        <div className="App">
            <Navbar messageTest={message}/>
            <Main />

        </div>
    );
};

export default App;