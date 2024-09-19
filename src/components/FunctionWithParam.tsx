import { useState } from "react"

interface IState {
    message: string
}
const FuctionWithParam: React.FC = () => {
    const [state, setState] = useState<IState>({ message: "Welcome" })
    const handleMessage = (greet: string): void => {
        setState({ message: greet })
    }
    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <div className="card mt-4" >
                        <div className="card-body">
                            <h1 className="ms-3">
                                {state.message}
                            </h1>
                            <button className="btn btn-danger" onClick={()=>handleMessage('Liked')}>
                                Like
                            </button>
                            <button className="btn btn-success ms-2" onClick={()=>handleMessage('Commented')}>
                                Comments
                            </button>
                            <button className="btn btn-info ms-2" onClick={()=>handleMessage('Subscribed')}>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FuctionWithParam