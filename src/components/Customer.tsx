
interface ICustomerProps {
    name?: string
}
const Customer: React.FC<ICustomerProps> = ({ name }) => {
    return (<div>
        <h3>
            Customer Name: {name}
        </h3>
    </div>);
}

export default Customer;