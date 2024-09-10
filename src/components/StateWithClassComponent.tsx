import React from "react";
interface IState {
    name: string,
    title: string
}

interface IUser {
    username: string,
    age: number
}
export default class UsersComponent extends React.Component<IUser, IState> {
    constructor(props: IUser) {
        super(props)
        this.state = {
            name: "Daipayan",
            title: "React again"
        }
    }
    render(): React.ReactNode {
        const { name, title } = this.state;
        const { username, age } = this.props;
        return (
            <>
                <h3 className="bg-success p-1 text-white text-center">
                    Class Component State Managment
                </h3>
                <div>
                    <div className="border px-4 bg-light mb-4">
                    <h3>Values from Props</h3>
                        <h4>
                            Name: <b>{username}</b><br />
                            Name: <b>{age}</b>
                        </h4>
                    </div>
                </div>
                <div>
                    <div className="border px-4 bg-light mb-4">
                    <h3>Values from state</h3>
                        <h4>Name: <b>{name}</b></h4>
                        <h4>Title:<b>{title}</b></h4>
                    </div>
                </div>
            </>
        )
    }
}