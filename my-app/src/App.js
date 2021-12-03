import './App.css';
import PersonList from './components/PersonList';
//import UserGreeting from './components/UserGreeting';
//import EventBind from './components/EventBind';
//import ParentComponent from './components/ParentComponent';
//import Counter from './components/Counter';
//import Hello from './components/Hello';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/* <Greet name="JavaScript">Language of the Web</Greet>
      <Greet name="Golang" />
      <Greet name="Swift">Language for IOS app</Greet>
      <hr />
      <Welcome name="Flutter">Language for cross mobile development</Welcome>
      <Welcome name="React Native" />
      <Welcome name="Kotlin"><button>Click here</button></Welcome> */}
      {/* <Hello /> */}
      {/* <Counter /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      <PersonList />
    </div>
  );
}

export default App;
