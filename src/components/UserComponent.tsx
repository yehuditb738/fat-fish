import { IUser } from '../interfaces/interfaces';
import style from '../style/user-details.module.scss';


export default function UserInfo(props: { userData: IUser, deleteUser: () => void, isShowActionPageFunc: (isEd: boolean) => void }) {
    return (
        <div className={style.mainContainer}>
            <div className={style.actionButtonContainer}>
                <button onClick={() => props.isShowActionPageFunc(true)}>EDIT</button>
                <button onClick={props.deleteUser}>DELETE</button>
            </div>
            <div>
                <span className={style.boldText}>ID: </span>
                <span className={style.regularText}>{props.userData.id} </span>
            </div>
            <div>
                <span className={style.boldText}> First name: </span>
                <span className={style.regularText}>{props.userData.firstName} </span>
                <span className={style.boldText}> Last name: </span>
                <span className={style.regularText}>{props.userData.lastName} </span>
            </div>
            <div>
                <span className={style.boldText}>Age: </span>
                <span className={style.regularText}>{props.userData.age} </span>
            </div>
            <div>
                <span className={style.boldText}>Phone: </span>
                <span className={style.regularText}>{props.userData.phone} </span>
            </div>
        </div>
    );
}