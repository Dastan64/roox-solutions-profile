import React from 'react';
import './ProfileCard.scss';
import { IUser } from '../../types/types';
import { Link } from 'react-router-dom';

interface CardProps {
  user: IUser;
}

const ProfileCard = ({ user }: CardProps) => {
  const { name, address, company, id } = user;
  return (
    <div className="card">
      <div className="card__line">
        <p className="card__line-title">ФИО:</p>
        <p>{name}</p>
      </div>
      <div className="card__line">
        <p className="card__line-title">Город:</p>
        <p>{address.city}</p>
      </div>
      <div className="card__line">
        <p className="card__line-title">Компания:</p>
        <p>{company.name}</p>
        <Link className="card__link" to={`profile/${id}`}>
          Подробнее
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
