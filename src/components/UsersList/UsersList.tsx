import React from 'react';
import ProfileCard from '../ProfileCard/ProfileCard';
import Loader from '../../UI/Loader/Loader';
import { IUser } from '../../types/types';

interface UsersProps {
    users: IUser[];
}

const UsersList = ({ users }: UsersProps) => {
    return (
        <>
            {users.length > 0 ? (
                <>
                    <ul className="app__list">
                        {users.map((user) => (
                            <ProfileCard user={user} key={user.id}/>
                        ))}
                    </ul>

                </>
            ) : (
                <Loader/>
            )}
        </>
    );
};

export default UsersList;
