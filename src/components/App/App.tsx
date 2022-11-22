import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.scss';
import { IUser } from "../../types/types";

import Profile from "../../pages/Profile/Profile";
import Main from "../Main/Main";

const App = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => setUsers(data)).catch(err => console.error(err))
    }, [])

    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Main users={users} setUsers={setUsers}/>}/>
                <Route path="profile/:id" element={<Profile users={users}/>}/>
            </Routes>
        </div>
    );
}

export default App;

