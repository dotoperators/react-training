import React, { useState } from "react"

interface IState {
    name: string,
    title: string
}
interface ICustomerProps {
    name: string,
    age: number
}

const CustomerComponent: React.FC<ICustomerProps> = (props) => {
    const [state, setState] = useState<IState>({
        name: "Daipayan",
        title: "Software Developer"
    })
    return (
        <>
            <h3 className="bg-success p-1 text-white text-center">
                Functional Component State Managment
            </h3>
            <div>
                <div className="border px-4 bg-light mb-4">
                <h3>Values from props</h3>
                    <h4>
                        Name: <b>{props.name}</b><br />
                        Name: <b>{props.age}</b>
                    </h4>
                </div>
            </div>
            <div className="border px-4 bg-light mb-4">
                <h3>Values from state</h3>
                <h4>Name: <b>{state.name}</b></h4>
                <h4>Title: <b>{state.title}</b></h4>
            </div>
        </>
    )
}

export default CustomerComponent