import './App.css';
import { Buttons } from './components/Button';
import Customer from './components/Customer';
import { Input } from './components/Input';
import CustomerComponent from './components/StateManagment';
import UsersComponent from './components/StateWithClassComponent';
import Users from './components/User';

function App() {
  return (
    <div className="container">
      <div className='row'>
        <div className='col-md-6'>
          <h3>Functional Component with prop</h3>
          <Customer name="daipayan" />
        </div>
        <div className='col-md-6'>
          <h3>Class component Example with prop</h3>
          <Users name="daipayan" age={20}/>
        </div>
      </div>
      <div className='row'>
      <div className='col-md-6'>
          <CustomerComponent name={'Daipayan Tripathy'} age={30} />
        </div>
        <div className='col-md-6'>
          <UsersComponent username={'Daipayan Tripathy'} age={30} />
        </div>
      </div>
      {/* <Buttons handleClick={(event, id) => {
        console.log("button clicked", event, id)
      }} />
      <Input handleChange={(event) => {
        console.log("event", event.target.value)
      }} value='' key='text' /> */}
    </div>
  );
}

export default App;
