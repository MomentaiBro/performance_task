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
}[];


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
        console.log('Hey jo');
    };

    const handleDeleteUser = (users: UserType, id: number) => {
        users.filter(user => 
            user.id !== id);
    };

    


    return (
        <div className="admin-user-table" style={{ marginTop: '2rem'}}>
            <Filter />
            <div style={{width: '100vw', marginTop: '2rem'}}>
                <h2 style={{textAlign: 'center', textDecoration: 'underline'}}> Users </h2>
                <ul className="theUl" style={{listStyle: 'none', paddingLeft: 0, height: '30rem', overflow: "auto"}}>
                    <li className="admin-user-table-legend" style={{position: 'sticky', top: 0, fontWeight: 700, borderBottom: '1px solid black', marginBottom: '1rem'}}>
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

                        const isValid = user.verified;
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
                                    <div 
                                        style={{width: '5%'}}
                                    >
                                        { isValid ? (
                                            <div className="check"></div>
                                        ) : (
                                            <div className="cross"></div>
                                        )}
                                    </div>
                                    <div style={{width: '15%'}}>{user.created_at}</div>
                                    <div style={{width: '15%'}}>{user.email}</div>
                                    <div style={{width: '5%', display: 'flex', justifyContent: 'space-between', paddingRight: '2rem'}}>
                                        <button 
                                            className="smol editBtn" 
                                            type="button"
                                            onClick={handleEditUser}
                                        >
                                                Edit
                                        </button>
                                        <button 
                                            className="smol dltBtn" 
                                            type="button"
                                            
                                        >
                                            X
                                        </button>
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