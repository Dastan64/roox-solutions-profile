import React from 'react';
import Aside from "../Aside/Aside";
import { IUser } from "../../types/types";
import UsersList from "../UsersList/UsersList";

interface UsersListProps {
    users: IUser[];
    setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
}

const Main = ({ users, setUsers }: UsersListProps) => {
    return (
        <>
            <Aside users={users} setUsers={setUsers}/>
            <main className='app__main'>
                <h1>Список пользователей</h1>
                <UsersList users={users}/>
                <p className="app__bottom-caption">
                    Найдено {users.length} пользователей
                </p>
            </main>
        </>
    );
};

export default Main;
