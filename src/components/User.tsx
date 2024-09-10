import React from "react";
interface IUser {
    name: string,
    age: number
}
export default class Users extends React.Component<IUser> {
    constructor(props: IUser) {
        super(props)
    }
    render(): React.ReactNode {
        return (
            <>
                <h5>User Name: {this.props.name}</h5>
                <h5>Age:{this.props.age}</h5>
            </>
        )
    }
}