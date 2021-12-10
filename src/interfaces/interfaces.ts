export interface IUser {
    id: string;
    firstName: string;
    lastName?: string;
    age?: number;
    phone: string;
}

export interface IState {
    users: { [key: string]: IUser }
}