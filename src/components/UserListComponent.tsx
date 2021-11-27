import { useState } from 'react';
import UserComponent from '../components/UserComponent'
import ActionUserComponent from './ActionUserComponent'
import { IUser } from '../interfaces/interfaces';
import style from '../style/user-list.module.scss';

export default function List(props: { data: { [key: string]: IUser } }) {
    const userObj: IUser = {
        id: '',
        firstName: '',
        lastName: '',
        age: 0,
        phone: '',
    }

    const [users, setusers] = useState(props.data)
    const [isShowActionPage, setIsShowActionPage] = useState(false);
    const [isCreate, setIsCreate] = useState(false);
    const [currentUser, setCurrentUser] = useState(userObj);

    function isShowActionPageFunc(isE: boolean, key?: string, isCre?: boolean) {
        //on edit
        if (key !== undefined) {
            const a = { ...users }
            setCurrentUser(a[key])
        }
        setIsShowActionPage(isE);
        if (isCre !== undefined)
            setIsCreate(isCre)
    }

    function addUser(userData: IUser) {
        const index = (Math.random() * 100000).toFixed(0);
        props.data[index] = userData;
        props.data[index]['id'] = index.toString();
        setusers(users);
        setIsShowActionPage(false);
    }

    function editOrAddUser(key: string, userData: IUser) {
        //add new user
        if (isCreate === true) {
            addUser(userData);
            setIsCreate(false)
            return
        }
        //edit exist user
        props.data[key] = userData;
        setusers(props.data);
        setIsShowActionPage(false)
    }

    function deleteUser(key: string) {
        const b = { ...users }
        delete b[key];
        delete props.data[key];
        setusers(b);
    }

    function searchByFullName(val: string) {
        if (val === "") {
            setusers(props.data);
            return
        }
        const userList = { ...users }
        const arr = Object.values(userList)
        const res = arr.filter(function (item) {
            if (item.lastName !== undefined)
                return item.firstName.toLowerCase().includes(val.toLowerCase()) || item.lastName.toLowerCase().includes(val.toLowerCase());
            else
                return item.firstName.toLowerCase().includes(val.toLowerCase());

        })
        const dictionary: { [key: string]: IUser } = Object.assign({}, ...res.map((x) => ({ [x.id.toString()]: x })));
        setusers(dictionary);
    }

    function searchByUserId(event: any) {
        const val = event.target.value;
        if (val === "") {
            setusers(props.data);
            return
        }
        const userList = { ...users }
        const arr = Object.values(userList)
        const res = arr.filter(function (item) {
            return item.id.includes(val);
        })
        const dictionary: { [key: string]: IUser } = Object.assign({}, ...res.map((x) => ({ [x.id.toString()]: x })));
        setusers(dictionary);
    }

    if (isShowActionPage === false)
        return (
            <div>
                <div className={style.mainContainer}>
                    <button onClick={() => isShowActionPageFunc(true, undefined, true)}>Add New User</button><br />
                    <div className={style.actionButtonsContainer}>
                        <input onChange={(e) => searchByFullName(e.target.value)} placeholder="Search by full name" /><br />
                        <input onChange={searchByUserId} placeholder="Search by ID" />
                    </div>
                    <div className={style.listItemContainer}>
                        {Object.keys(users).map(key => {
                            return (
                                <div>
                                    <UserComponent
                                        key={key}
                                        userData={users[key]}
                                        deleteUser={() => deleteUser(key)}
                                        isShowActionPageFunc={(isEd: boolean) => isShowActionPageFunc(isEd, key)}
                                    />
                                </div>
                            );
                        })
                        }
                    </div>
                </div>
            </div>
        );
    else
        return (
            <ActionUserComponent
                key={currentUser.id}
                userData={currentUser}
                editOrAddUser={(userData: IUser) => editOrAddUser(currentUser.id, userData)}
                isShowActionPageFunc={(isEd: boolean) => isShowActionPageFunc(isEd, undefined, false)}
                isCreate={isCreate}
            />
        );
}