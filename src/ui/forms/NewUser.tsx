import React, { useState } from 'react';

const NewUserForm: React.FC = () => {

    const newUser = {
        firstName: '',
        lastName: '',
        middleInitial: '',
        active: '',
        district: 0
    }
    
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        middleInitial: '',
        active: '',
        district: 0
    });

    return (
        <div className="admin-new-user-form">

        </div>
    );
};

export default NewUserForm;