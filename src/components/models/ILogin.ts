export interface ILogin {
    email: string,
    password: string
    authUser:IAuthState
}

export interface IAuthState {
    isLogin: boolean
}