export interface User {
    username: string;
    displayName: string;
    token: string;
    image?: string;
}

//for login and registeration form
export interface UserFormValues {
    email: string;
    password: string;
    displayName?: string;
    username?: string;
    userType:string;
}