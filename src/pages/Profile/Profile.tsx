import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Button from '../../UI/Button/Button';
import './Profile.scss';

import { IUser } from '../../types/types';

interface ProfileProps {
    users: IUser[];
}

const Profile = ({ users }: ProfileProps) => {
    const { id } = useParams();
    const [user, setUser] = useState<IUser>();
    const [noEdit, setNoEdit] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        if (id) {
            const user = users.find((user) => user.id === +id);
            setUser(user);
        }
    }, [id, users]);

    function handleEdit() {
        setNoEdit(!noEdit);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        alert('Проверь консоль :)');
        console.log(JSON.stringify(data));
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    }

    return (
        <div className="profile">
            <div className="profile__top">
                <h2>Профиль пользователя</h2>
                <Button onClick={handleEdit}>Редактировать</Button>
            </div>
            <form className="profile__form" onSubmit={handleSubmit}>
                <div className="profile__form-input-container">
                    <label htmlFor="name" className="profile__form-label">
                        Name
                    </label>
                    <input
                        defaultValue={user?.name}
                        className="profile__form-input"
                        type="text"
                        name="name"
                        id="name"
                        readOnly={noEdit}
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="profile__form-input-container">
                    <label htmlFor="name" className="profile__form-label">
                        User name
                    </label>
                    <input
                        defaultValue={user?.username}
                        className="profile__form-input"
                        type="text"
                        id="name"
                        name="username"
                        readOnly={noEdit}
                        autoComplete="username"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="profile__form-input-container">
                    <label htmlFor="name" className="profile__form-label">
                        Email
                    </label>
                    <input
                        defaultValue={user?.email}
                        className="profile__form-input"
                        type="email"
                        id="email"
                        name="email"
                        readOnly={noEdit}
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="profile__form-input-container">
                    <label htmlFor="name" className="profile__form-label">
                        Street
                    </label>
                    <input
                        defaultValue={user?.address?.street}
                        className="profile__form-input"
                        type="text"
                        id="street"
                        name="street"
                        readOnly={noEdit}
                        autoComplete="street-address"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="profile__form-input-container">
                    <label htmlFor="name" className="profile__form-label">
                        City
                    </label>
                    <input
                        defaultValue={user?.address?.city}
                        className="profile__form-input"
                        type="text"
                        id="city"
                        name="city"
                        readOnly={noEdit}
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="profile__form-input-container">
                    <label htmlFor="zip" className="profile__form-label">
                        Zip code
                    </label>
                    <input
                        defaultValue={user?.address?.zipcode}
                        className="profile__form-input"
                        type="text"
                        id="zip"
                        name="zip"
                        readOnly={noEdit}
                        autoComplete="postal-code"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="profile__form-input-container">
                    <label htmlFor="phone" className="profile__form-label">
                        Phone
                    </label>
                    <input
                        defaultValue={user?.phone}
                        className="profile__form-input"
                        type="tel"
                        id="phone"
                        name="phone"
                        readOnly={noEdit}
                        autoComplete="tel"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="profile__form-input-container">
                    <label htmlFor="website" className="profile__form-label">
                        Website
                    </label>
                    <input
                        defaultValue={user?.website}
                        className="profile__form-input"
                        type="text"
                        pattern="[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?"
                        id="website"
                        name="website"
                        readOnly={noEdit}
                        autoComplete="url"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="profile__form-input-container">
                    <label htmlFor="comment" className="profile__form-label">
                        Comment
                    </label>
                    <textarea
                        className="profile__form-textarea"
                        name="comment"
                        id="comment"
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button className="profile__form-btn" disabled={noEdit}>
                    Отправить
                </button>
            </form>
        </div>
    );
};

export default Profile;
