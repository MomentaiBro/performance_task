import React, { useEffect, useState }  from 'react';
import Filter from './Filter';

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
            <div style={{width: '90vw', marginTop: '2rem'}}>
                <h2 style={{textAlign: 'center', textDecoration: 'underline'}}> Users </h2>
                <ul style={{listStyle: 'none', paddingLeft: 0, height: '30rem', overflow: "auto"}}>
                    <li style={{position: 'sticky', background: "gray", top: 0, fontWeight: 700, borderBottom: '2px solid black', marginBottom: '1rem', padding: '1rem'}}>
                        <div style={{ border: '1px solid red', display: 'flex', justifyContent: 'space-evenly', textAlign: 'center'}}>
                            <div style={{width: '2%'}}>ID</div>
                            <div style={{width: '15%'}}>Last Name</div>
                            <div style={{width: '20%'}}>First Name</div>
                            <div style={{width: '5%'}}>M.I.</div>
                            <div style={{width: '20%'}}>District</div>
                            <div style={{width: '10%'}}>Verified</div>
                            <div style={{width: '20%'}}>Created</div>
                            <div style={{width: '20%'}}>Email</div>
                        </div>
                    </li>

                    {users && users.map(user => { 
                        return (
                            <li key={user.id} style={{marginBottom: '2rem', background: '#fff', border: '1px solid black', padding: '1rem'}}>
                                <div style={{display: 'flex', justifyContent: 'space-evenly', textAlign: 'center', marginBottom: '0.5rem'}}>
                                    <div style={{width: '2%'}}>{user.id}</div>
                                    <div style={{width: '15%'}}>{user.last_name}</div>
                                    <div style={{width: '20%'}}>{user.first_name}</div>
                                    <div style={{width: '5%'}}>{user.middle_initial}</div>
                                    <div style={{width: '20%'}}>{user.district}</div>
                                    <div style={{width: '10%'}}>{user.verified}</div>
                                    <div style={{width: '20%'}}>{user.created_at}</div>
                                    <div style={{width: '20%'}}>{user.email}</div>
                                </div>
                                <div style={{marginLeft: 'auto', width: '10rem', display: 'flex', justifyContent: 'space-between', paddingRight: '2rem'}}>
                                    <button type="button">Edit</button>
                                    <button type="button">Delete</button>
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