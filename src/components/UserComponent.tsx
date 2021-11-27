import React from 'react';
import { IUser } from '../interfaces/interfaces';
import style from '../style/user-details.module.scss';


export default function UserInfo(props: { userData: IUser, deleteUser: () => void, isShowActionPageFunc: (isEd: boolean) => void }) {
    return (
        <div className={style.mainContainer}>
            <div className={style.actionButtonContainer}>
                <button onClick={() => props.isShowActionPageFunc(true)}>Edit</button>
                <button onClick={props.deleteUser}>Delete</button>
            </div>
            <span className={style.regularText}>ID: {props.userData.id}</span>
            <div>
                <span className={style.boldText}>
                    First Name: {props.userData.firstName} </span>
                <span className={style.boldText}>
                    Last Name: {props.userData.lastName}</span>
            </div>
            <span className={style.regularText}>Age: {props.userData.age}</span>
            <span className={style.regularText}>Phone: {props.userData.phone}</span>
        </div>
    );
}