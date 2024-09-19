import { useState } from "react"

interface IState {
    count: number
}
interface IProps { }
const CounterHandler: React.FC = () => {
    const [state, setState] = useState<IState>({ count: 0 });
    const handleIncrement = () => {
        setState({count:state.count+1})
    }
    const handledecremant = () => {
        setState({count:state.count-1})
    }
    return (
        <>
            <h1>Event Handler</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="display-3">
                                {state.count}
                            </h2>
                            <button className="btn btn-success ms-3" onClick={handleIncrement}>Increment</button>
                            <button className="btn btn-danger ms-3" onClick={handledecremant}>Decrement</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CounterHandler