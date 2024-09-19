import './App.css';
import AuthUser from './components/AuthUser';
import { Buttons } from './components/Button';
import CounterHandler from './components/CounterEventHandler';
import Customer from './components/Customer';
import FuctionWithParam from './components/FunctionWithParam';
import Greet from './components/Greet';
import { Input } from './components/Input';
import Login from './components/Login';
import CustomerComponent from './components/StateManagment';
import UsersComponent from './components/StateWithClassComponent';
import Users from './components/User';
import UserList from './components/UserList';

function App() {
  return (
    <div className="container">
      {/* <div className='row'>
        <div className='col-md-6'>
          <h3>Functional Component with prop</h3>
          <Customer name="daipayan" />
        </div>
        <div className='col-md-6'>
          <h3>Class component Example with prop</h3>
          <Users name="daipayan" age={20} />
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
      <div className='row'>
        <div className='col-md-12'>
          <CounterHandler/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <FuctionWithParam/>
        </div>
      </div> */}
      {/* <div className="row">
        <div className="col-md-12">
          <Login/>
        </div>
      </div> */}
      {/* consditional rendering */}
      <div className="row">
        <div className="col-md-12">
          <AuthUser />

        </div>
      </div>
      <Buttons handleClick={(event, id) => {
        console.log("button clicked", event, id)
      }} />
      <Input handleChange={(event) => {
        console.log("event", event.target.value)
      }} value='' key='text' />
      {/* <Buttons handleClick={(event, id) => {
        console.log("button clicked", event, id)
      }} />
      <Input handleChange={(event) => {
        console.log("event", event.target.value)
      }} value='' key='text' /> */}
      <Greet name='Daiapyan'/>
    </div>
  );
}

export default App;
