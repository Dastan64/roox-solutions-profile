import React from 'react';
import Aside from '../Aside/Aside';
import ProfileCard from '../ProfileCard/ProfileCard';
import Loader from '../../UI/Loader/Loader';
import { IUser } from '../../types/types';

interface UsersListProps {
  users: IUser[];
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
}

const UsersList = ({ users, setUsers }: UsersListProps) => {
  return (
    <div className="app__container">
      <Aside users={users} setUsers={setUsers} />
      <div className="app__list-container">
        <h1>Список пользователей</h1>
        {users.length > 0 ? (
          <>
            <ul className="app__list">
              {users.map((user) => (
                <ProfileCard user={user} key={user.id} />
              ))}
            </ul>
            <p className="app__bottom-caption">
              Найдено {users.length} пользователей
            </p>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default UsersList;
