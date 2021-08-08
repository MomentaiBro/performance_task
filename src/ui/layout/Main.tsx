import React from 'react';
import AdminPanel from '../containers/AdminPanel';
import '../stylesheets/main.css';


const Main: React.FC= ()=> {

    return (
        <div className="app-main">
            <AdminPanel />
        </div>
    ); 
};

// Main.propTypes = {
//     users: propTypes.array
// };

export default Main;
