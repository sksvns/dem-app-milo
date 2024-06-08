export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export enum ApiState {
    Initial = "initial",
    Loading = "Loading",
    Succeeded = "Succeeded",
    Failed = "Failed"
}