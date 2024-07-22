import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';
import UseStateExample from './Components/React Hooks/UseStateExample';
import UseEffectExample from './Components/React Hooks/UseEffectExample';
import UseReducerExample from './Components/React Hooks/UseReducerExample';
import UncontrolledFormsExample from './Components/React Forms/UncontrolledFormsExample';
import ControlledFormsExample from './Components/React Forms/ControlledFormExample';
import ControlledFormCustomHook from './Components/React Forms/ControlledFormCustomHook';
import FetchUsingHooks from './Components/Asynchronous React/FetchUsingHooks';
import HandlingDataLoadingStates from './Components/Asynchronous React/HandlingDataLoadingStates';
import FetchFromGraphQL from './Components/Asynchronous React/FetchFromGraphQL';
import DataRenderProps from './Components/Asynchronous React/DataRenderProps';
import Convertor from './Components/CurrencyConvertor/Currency';



export function Home() {
  return (
  <div>
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
    </nav>
    <h1>My Home Page</h1>
  </div>
  );
}

export function About() {
  return (
  <div>
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
    </nav>
    <h1>About Me Page</h1>
  </div>
  );
}

export function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* <UseStateExample/>
      <UseEffectExample/>
      <UseReducerExample/>
      <UncontrolledFormsExample/>
      <ControlledFormsExample/>
      <ControlledFormCustomHook/>
      <FetchUsingHooks/>
      <HandlingDataLoadingStates/>
      <FetchFromGraphQL />
      <DataRenderProps/> */}
      <Home />
      <About />
      <Convertor />
    </div>
  );
}
