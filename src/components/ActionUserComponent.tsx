import React, { useState } from 'react';
import { IUser } from '../interfaces/interfaces';

export default function EditUserInfo(props: {
    userData: IUser, editOrAddUser: (userData: IUser) => void,
    isShowActionPage: (isEd: boolean, key?: string, isCre?: boolean) => void, isCreate: boolean
}) {
    const [firstName, setFirstName] = useState(!props.isCreate ? props.userData.firstName : "");
    const [lastName, setLastName] = useState(!props.isCreate ? props.userData.lastName : "");
    const [age, setAge] = useState(!props.isCreate ? props.userData.age : 0);
    const [phone, setPhone] = useState(!props.isCreate ? props.userData.phone : "");

    const userObj: IUser = {
        id: props.userData.id,
        firstName: firstName,
        lastName: lastName,
        age: age,
        phone: phone,
    }

    return (
        <div>
            <div>
                <span style={{ display: props.isCreate !== true ? "inline" : "none" }}>id: {props.userData.id}</span>
                firstName:
                <input value={firstName} onChange={(e) => setFirstName(e.currentTarget.value)} />
                lastName:
                <input value={lastName} onChange={(e) => setLastName(e.currentTarget.value)} />
                phone:
                <input value={phone} onChange={(e) => setPhone(e.currentTarget.value)} />
                age:
                <input type="number" value={age} onChange={(e) => setAge(parseInt(e.currentTarget.value))} />
            </div>
            <div>
                <button onClick={() => props.editOrAddUser(userObj)}>Save</button>
                <button onClick={() => props.isShowActionPage(false, undefined, false)}>Cancel</button>
            </div>
        </div>
    );
}