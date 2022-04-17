import logo from './logo.svg';
import './App.css';
import UseStateWidthObjects from './components/UseStateWidthObjects'
import HookCounter from './components/HookCounter'
import UseEffectHook from './components/UseEffectHook'
import UseEffectHookOnce from './components/UseEffectHookOnce'
import UseEffectCounterContainer from './components/UseEffectCounterContainer'

function App() {
  return (
    <div className="App">
      {/* <UseStateWidthObjects/>
      <HookCounter/>
      <UseEffectHook/>
      <UseEffectHookOnce/> */}
      <UseEffectCounterContainer/>
    </div>
  );  
}

export default App;
