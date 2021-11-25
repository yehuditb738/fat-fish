import React, { useState } from 'react';
import UserComponent from '../components/UserComponent'
import ActionUserComponent from './ActionUserComponent'
import { IUser } from '../interfaces/interfaces';

export default function List(props: { data: { [key: string]: IUser } }) {
    const userObj: IUser = {
        id: '',
        firstName: '',
        lastName: '',
        age: 0,
        phone: '',
    }

    const [users, setusers] = useState(props.data)
    const [isEdit, setIsEdit] = useState(false);
    const [isCreate, setIsCreate] = useState(false);

    const [currentUser, setCurrentUser] = useState(userObj);

    function isShowActionPage(isE: boolean, key?: string, isCre?: boolean) {
        //on edit
        if (key !== undefined) {
            const a = { ...users }
            setCurrentUser(a[key])
        }
        setIsEdit(isE);
        if (isCre === true)
            setIsCreate(isCre)
    }

    function addUser(userData: IUser) {
        const index = Math.random();
        users[index] = userData;
        users[index]["id"] = index.toString();
        setusers(users);
        setIsEdit(false)
    }

    function editOrAddUser(key: string, userData: IUser) {
        //add new user
        if (isCreate === true) {
            addUser(userData);
            return
        }
        //edit exist user
        const c = { ...users }
        c[key] = userData;
        setusers(c);
        setIsEdit(false)
    }

    function deleteUser(key: string) {
        const b = { ...users }
        delete b[key];
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

    function searchByUserId(val: string) {
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

    if (isEdit === false)
        return (
            <div>
                <button onClick={() => isShowActionPage(true, undefined, true)}>Add User</button><br />
                <input onChange={(e) => searchByFullName(e.target.value)} placeholder="Search by full name" /><br />
                <input onChange={(e) => searchByUserId(e.target.value)} placeholder="Search by ID" />

                {Object.keys(users).map(key => {
                    return (
                        <div>
                            <UserComponent
                                key={key}
                                userData={users[key]}
                                deleteUser={() => deleteUser(key)}
                                isShowActionPage={(isEd: boolean) => isShowActionPage(isEd, key)}
                            />
                        </div>
                    );
                })
                }
            </div>
        );
    else
        return (
            <ActionUserComponent
                key={currentUser.id}
                userData={currentUser}
                editOrAddUser={(userData: IUser) => editOrAddUser(currentUser.id, userData)}
                isShowActionPage={(isEd: boolean) => isShowActionPage(isEd)}
                isCreate={isCreate}
            />
        );
}