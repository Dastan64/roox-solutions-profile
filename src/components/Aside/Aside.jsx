import React from 'react';
import Button from '../../UI/Button/Button';
import './Aside.scss'

const Aside = ({ users, setUsers }) => {

    function sortByCity() {
        const sortedUsers = [...users].sort((a, b) => {
                if (a.address.city < b.address.city) {
                    return -1;
                }
                if (a.address.city > b.address.city) {
                    return 1;
                }
                return 0;
            }
        )
        setUsers(sortedUsers)
    }

    function sortByCompany() {
        const sortedUsers = [...users].sort((a, b) => {
                if (a.company.name < b.company.name) {
                    return -1;
                }
                if (a.company.name > b.company.name) {
                    return 1;
                }
                return 0;
            }
        )
        setUsers(sortedUsers)
    }

    return (
        <aside className="aside">
            <h3 className="aside__title">Сортировка</h3>
            <Button className="aside__button" onClick={sortByCity}>
                по городу
            </Button>
            <Button onClick={sortByCompany}>
                по компании
            </Button>
        </aside>
    );
};

export default Aside;
