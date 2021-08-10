import React, { useEffect, ChangeEvent, useState }  from 'react';
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
    const [modalState, setModalState] = useState(false);

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

    const handleDeleteUser = (id: number): void => {
        setUsers(users.filter((user)=>{
            return user.id != id;
        }));
    };

    const showModal = () => {
        setModalState(!modalState);

    };

    // const handleAddUser = (): void => {
    // }


    return (
        <div className="admin-user-table" style={{ marginTop: '2rem'}}>
            <div className={`modalBG modalShowing-${modalState}`}> 
                <div className="modalInner">
                    <img 
                        src='./caution.png' 
                        alt="caution sign"
                        style={{width: '150px'}}
                    />
                    <div className="modalText">
                        <h2>Caution</h2>
                        <p>Do you wish to proceed?</p>
                        <div className="modalBtns">
                            <button> 
                                Delete 
                            </button>
                            <button> Go Back </button>
                        </div>
                    </div>
                </div>    
            </div>
            <Filter />
            <div style={{width: '100vw', marginTop: '2rem'}}>
                <h2 style={{textAlign: 'center', textDecoration: 'underline'}}> Users </h2>
                <ul className="theUl" style={{listStyle: 'none', paddingLeft: 0, height: '30rem', overflow: "auto"}}>
                    <li className="admin-user-table-legend" style={{position: 'sticky', top: 0, fontWeight: 700, borderBottom: '1px solid black', marginBottom: '1rem'}}>
                        <div style={{display: 'flex', justifyContent: 'space-evenly', textAlign: 'center'}}>
                            <div 
                                aria-label="ID"
                                style={{width: '2%'}}>ID</div>
                            <div 
                                aria-label="Last Name"
                                style={{width: '10%'}}>Last Name</div>
                            <div 
                                aria-label="First Name"
                                style={{width: '10%'}}>First Name</div>
                            <div 
                                aria-label="Middle Initial"
                                style={{width: '2%'}}>M.I.</div>
                            <div 
                                aria-label="District"
                                style={{width: '20%'}}>District</div>
                            <div 
                                aria-label="Verified"
                                style={{width: '5%'}}>Verified</div>
                            <div 
                                aria-label="date of creation"
                                style={{width: '15%'}}>Created</div>
                            <div 
                                aria-label="email"
                                style={{width: '15%'}}>Email</div>
                            <div 
                                aria-label="edit"
                                style={{width: '5%'}}> Edit</div>
                        </div>
                    </li>

                    {users && users.map(user => { 

                        const isValid = user.verified;
                        const districtNum = user.district;

                        return (
                            <li 
                                key={user.id}
                                className="user_block"
                                style={{marginBottom: '.5rem', padding: '.5rem'}}>
                            
                                <div  style={{display: 'flex', justifyContent: 'space-evenly', textAlign: 'center', alignItems: 'center', marginBottom: '0.5rem'}}>
                                    <div 
                                        aria-label={`${user.id}`}
                                        style={{width: '2%'}}>{user.id}</div>
                                    <div 
                                        aria-label={user.last_name}
                                        style={{width: '10%'}}>{user.last_name}</div>
                                    <div 
                                        aria-label={user.first_name}
                                        style={{width: '10%'}}>{user.first_name}</div>
                                    <div 
                                        aria-label={user.middle_initial}
                                        style={{width: '2%'}}>{user.middle_initial}</div>
                                    <div 
                                        style={{width: '20%'}}
                                    >
                                        {districtNum }
                                    </div>
                                    <div 
                                        aria-label={ isValid ? ("Validated") : ("Not Validated")}
                                        style={{width: '5%'}}
                                    >
                                        { isValid ? (
                                            <div className="check"></div>
                                        ) : (
                                            <div className="xBox">
                                                <div className="slash"></div>
                                            </div>
                                        )}
                                    </div>
                                    <div 
                                        aria-label={`${user.created_at}`}
                                        style={{width: '15%'}}>{user.created_at}</div>
                                    <div 
                                        aria-label={user.email}
                                        style={{width: '15%'}}>{user.email}</div>
                                    <div 
                                        className="btnHolder"
                                        style={{width: '5%', display: 'flex', justifyContent: 'space-between', paddingRight: '2rem'}}
                                    >
                                        <button
                                            aria-label="Edit Button" 
                                            className="smol editBtn" 
                                            type="button"
                                        >
                                                Edit
                                        </button>
                                        <button
                                            aria-label="Delete Button" 
                                            className="smol dltBtn" 
                                            type="button"
                                            onClick={()=> {
                                                showModal();
                                                // handleDeleteUser(user.id);
                                            }}
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