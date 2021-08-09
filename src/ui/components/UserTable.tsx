import React, { useEffect, useState }  from 'react';
import Filter from './Filter';
import '../stylesheets/main.css';

type UserType = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    verified: boolean;
    middle_initial: string;
    created_at: Date;
    district: number;
    active: boolean;
}[]


const UserTable: React.FC = () => {
    

    const [users, setUsers] = useState<UserType>([]);

    useEffect(() => {
        fetch('./users.json')
            .then(resp => resp.json())
            .then(data => {
                setUsers(data);
            });
    }, []);


    const handleEditUser = () => {
        console.log('');
    };

    const handleDeleteUser = () => {
        console.log('');
    };

    


    return (
        <div className="admin-user-table" style={{ marginTop: '2rem'}}>
            <Filter />
            <div style={{width: '100vw', marginTop: '2rem'}}>
                <h2 style={{textAlign: 'center', textDecoration: 'underline'}}> Users </h2>
                <ul style={{listStyle: 'none', paddingLeft: 0, height: '30rem', overflow: "auto"}}>
                    <li className="admin-user-table-legend" style={{position: 'sticky', top: 0, fontWeight: 700, borderBottom: '1px solid black', marginBottom: '1rem', padding: '1rem'}}>
                        <div style={{display: 'flex', justifyContent: 'space-evenly', textAlign: 'center'}}>
                            <div style={{width: '2%'}}>ID</div>
                            <div style={{width: '10%'}}>Last Name</div>
                            <div style={{width: '10%'}}>First Name</div>
                            <div style={{width: '2%'}}>M.I.</div>
                            <div style={{width: '20%'}}>District</div>
                            <div style={{width: '5%'}}>Verified</div>
                            <div style={{width: '15%'}}>Created</div>
                            <div style={{width: '15%'}}>Email</div>
                            <div style={{width: '5%'}}> Edit</div>
                        </div>
                    </li>

                    {users && users.map(user => { 
                        return (
                            <li 
                                key={user.id}
                                className="user_block"
                                style={{marginBottom: '.5rem', padding: '.5rem'}}>
                                
                                <div  style={{display: 'flex', justifyContent: 'space-evenly', textAlign: 'center', alignItems: 'center', marginBottom: '0.5rem'}}>
                                    <div style={{width: '2%'}}>{user.id}</div>
                                    <div style={{width: '10%'}}>{user.last_name}</div>
                                    <div style={{width: '10%'}}>{user.first_name}</div>
                                    <div style={{width: '2%'}}>{user.middle_initial}</div>
                                    <div style={{width: '20%'}}>{user.district}</div>
                                    <div style={{width: '5%'}}>{user.verified}</div>
                                    <div style={{width: '15%'}}>{user.created_at}</div>
                                    <div style={{width: '15%'}}>{user.email}</div>
                                    <div style={{width: '5%', display: 'flex', justifyContent: 'space-between', paddingRight: '2rem'}}>
                                        <button type="button">Edit</button>
                                        <button type="button">Delete</button>
                                    </div>
                                </div>
                            </li>
                        );
                    })};


                    

                </ul>
            </div>
        </div>
    );
};

export default UserTable;