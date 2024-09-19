interface IGreetProps {
    name: string
}
const Greet: React.FC<IGreetProps> = (props: IGreetProps) => {
    return <h1>Hello {props.name}</h1>
}

export default Greet;