import React from 'react';
import { IUser } from '../interfaces/interfaces';

export default function UserInfo(props: { userData: IUser, deleteUser: () => void, isShowActionPage: (isEd: boolean) => void }) {
    return (
        <div>
            <div>
                id: {props.userData.id}
                firstName: {props.userData.firstName}
                lastName: {props.userData?.lastName}
                age: {props.userData?.age}
            </div>
            <div>
                <button onClick={() => props.isShowActionPage(true)}>Edit</button>
                <button onClick={props.deleteUser}>Delete</button>
            </div>
        </div>
    );
}