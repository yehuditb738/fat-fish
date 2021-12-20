

export interface IUser {
    id: string;
    firstName: string;
    lastName?: string;
    age?: number;
    phone: string;
    adress?: IAdress | string
    status?: Status.ACTIVE
}
export interface IAdress{
    city: string;
    street: string;
    num: number;
}

export interface IState {
    users: { [key: string]: IUser }
}

export enum Status{
    ACTIVE = "ACTIVE",
    NOT_ACTIVE = "NOT_ACTIVE"
}