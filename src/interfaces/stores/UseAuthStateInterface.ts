import {User} from "firebase/auth";

export interface UseAuthStateInterface {
    email: string,
    password: string,
    name: string,
    user: User | null,
}