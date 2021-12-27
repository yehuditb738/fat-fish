import { useState } from 'react';
import { IState, IUser } from '../interfaces/interfaces';
import style from '../style/login.module.scss';
import { useSelector } from 'react-redux';

export default function Login(props: { /*data: { [key: string]: IUser },*/ setLogin: () => void }) {
    const [firstName, setFirstName] = useState('');
    const [id, setId] = useState('');
    const [massege, setMassege] = useState('');

    const users = useSelector((state: IState) => state.users);

    function loginFunc() {
        if (users.hasOwnProperty(id)) {
            if (users[id]["firstName"] === firstName) {
                setMassege("")
                props.setLogin()
            }
            else {
                setMassege("Data not found!")
            }
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
                <span className={style.massege}>{massege}</span>
            </div>
        </div>
    );
}