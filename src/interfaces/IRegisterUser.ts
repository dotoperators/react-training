export interface IRegisterUser {
    _id?:string,
    email?: string,
    name?: string,
    password?:string
    createdOn?: Date,
    modifiedOn?: Date
}