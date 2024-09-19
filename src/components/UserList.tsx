import { useState } from "react"
import { IUser } from "./models/IUser"

interface IUserState {
    users: IUser[]
}
const UserList: React.FC = () => {
    const [state, setState] = useState<IUserState>({
        users: [
            {
                age: 25,
                name: "Daipayan",
                sno: 1
            },
            {
                age: 24,
                name: "Daipayan1",
                sno: 2
            },
            {
                age: 23,
                name: "Daipayan4",
                sno: 3
            }
        ]
    })
    return (<>
        <div className="container">
            <div className="row  w-50 mt-4">
                <h1>User Table</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.users.length > 0 && state.users.map((user) => {
                            return (<tr key={user.sno}>
                                <td> {user.sno}</td>
                                <td> {user.name}</td>
                                <td> {user.age}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>

            </div>
        </div>
    </>)
}

export default UserList