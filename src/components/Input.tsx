import { useState } from "react"

interface InputProps {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

interface InputState {
    value: string
}
export const Input = (props: InputProps) => {
    const [state, setState] = useState<InputState>({
        value: props.value
    })
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            value: event.target.value
        })
    }
    return <input type="text" value={state.value} onChange={handleInputChange}></input>
}