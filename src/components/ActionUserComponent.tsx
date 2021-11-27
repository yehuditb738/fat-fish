import { useState } from 'react';
import { IUser } from '../interfaces/interfaces';
import style from '../style/user-action-page.module.scss';

export default function EditUserInfo(props: {
    userData: IUser, editOrAddUser: (userData: IUser) => void,
    isShowActionPageFunc: (isEd: boolean, key?: string, isCre?: boolean) => void, isCreate: boolean
}) {
    const [firstName, setFirstName] = useState(!props.isCreate ? props.userData.firstName : "");
    const [lastName, setLastName] = useState(!props.isCreate ? props.userData.lastName : "");
    const [age, setAge] = useState(!props.isCreate ? props.userData.age : 0);
    const [phone, setPhone] = useState(!props.isCreate ? props.userData.phone : "");
    const [validationMessege, setValidationMessege] = useState("");
    //const [id, setID] = useState(!props.isCreate ? props.userData.id : "");

    const userObj: IUser = {
        id: props.userData.id,
        firstName: firstName,
        lastName: lastName,
        age: age,
        phone: phone,
    }

    function validatuinFunc(userObj: IUser) {
        if (userObj.firstName !== "" && userObj.phone.length > 9) {
            props.editOrAddUser(userObj)
        }
        else
            if (userObj.firstName === "" && userObj.phone.length < 9)
                setValidationMessege("First name and phone number are required fields");
            else
                if (userObj.firstName !== "" && userObj.phone.length < 9)
                    setValidationMessege("A phone is required filed and must contain at least 9 digits");
                else
                    if (userObj.firstName === "" && userObj.phone.length > 8)
                        setValidationMessege("First name is required filed");
    }

    return (
        <div className={style.mainContainer}>
            <div className={style.detailsContainer}>
                <span style={{ display: props.isCreate !== true ? "inline" : "none" }}>ID: {props.userData.id}</span>
                {/* <span style={{ display: props.isCreate !== true ? "inline" : "none" }}>ID:</span>
                <input value={id} style={{ display: props.isCreate !== true ? "inline" : "none" }} onChange={(e) => setID(e.currentTarget.value)} /> */}
                {/* ID:
                <input value={id} onChange={(e) => setID(e.currentTarget.value)} /> */}
                First Name:
                <input value={firstName} onChange={(e) => setFirstName(e.currentTarget.value)} />
                Last Name:
                <input value={lastName} onChange={(e) => setLastName(e.currentTarget.value)} />
                Phone:
                <input value={phone} onChange={(e) => setPhone(e.currentTarget.value)} />
                Age:
                <input type="number" value={age} onChange={(e) => setAge(parseInt(e.currentTarget.value))} />
                <div className={style.actionButtonContainer}>
                    <button onClick={() => props.isShowActionPageFunc(false, undefined, false)}>Cancel</button>
                    <button onClick={() => validatuinFunc(userObj)}>Save</button>
                </div>
                <span className={style.validationMessege}>{validationMessege}</span>
            </div>
        </div>
    );
}