import { type } from 'os';
import React, {useEffect, useState} from 'react';
import Main from './ui/layout/Main';
import Navbar from './ui/layout/Navbar';

// Types 

export type UsersType = {
        id: number;
        first_name: string;
        last_name: string;
        email: string;
        verified: boolean;
        middle_initial: string;
        created_at: Date;
        district: number;
        active: boolean;
    };

const App: React.FC = () => {

    const [users, setUsers] = useState<UsersType[]>([]);

    useEffect(() => {
        fetch('./users.json')
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            setUsers(data);
            });
        }, []);

    users.map( user => {
        console.log(user.first_name);
    });

    return (
        <div className="App">
            <Navbar />
            <Main />
            
        </div>
    );
};

export default App;