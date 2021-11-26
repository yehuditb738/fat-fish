import React, { useState } from 'react';
import { IUser } from '../interfaces/interfaces';
import style from '../style/user-action-page.module.scss';

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
        <div className={style.mainContainer}>
            <div className={style.detailsContainer}>
                <span style={{ display: props.isCreate !== true ? "inline" : "none" }}>ID: {props.userData.id}</span>
                First Name:
                <input value={firstName} onChange={(e) => setFirstName(e.currentTarget.value)} />
                Last Name:
                <input value={lastName} onChange={(e) => setLastName(e.currentTarget.value)} />
                Phone:
                <input value={phone} onChange={(e) => setPhone(e.currentTarget.value)} />
                Age:
                <input type="number" value={age} onChange={(e) => setAge(parseInt(e.currentTarget.value))} />
                <div className={style.actionButtonContainer}>
                    <button onClick={() => props.editOrAddUser(userObj)}>Save</button>
                    <button onClick={() => props.isShowActionPage(false, undefined, false)}>Cancel</button>
                </div>
            </div>

        </div>
    );
}