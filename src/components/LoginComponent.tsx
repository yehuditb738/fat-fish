import React, { useState } from 'react';
import { IUser } from '../interfaces/interfaces';
import style from '../style/login.module.scss';
export default function Login(props: { data: { [key: string]: IUser }, setLogin: () => void }) {
    const [firstName, setFirstName] = useState('');
    const [id, setId] = useState('');
    const [massege, setMassege] = useState('');

    function loginFunc() {
        if (props.data.hasOwnProperty(id)) {
            setMassege("")
            props.setLogin()
        }
        else {
            setMassege("Data not found!")
        }
    }
    return (
        <div className={style.mainContainer}>
            <div className={style.innerContainer}>
                <span>ENTER FIRST NAME:</span>
                <input value={firstName} onChange={(e) => setFirstName(e.currentTarget.value)} />
                <span>ENTER YOUR ID:</span>
                <input value={id} onChange={(e) => setId(e.currentTarget.value)} />
                <div>
                    <button className={style.btn} onClick={() => loginFunc()}>Login</button>
                </div>
                {massege}
            </div>
        </div>
    );
}