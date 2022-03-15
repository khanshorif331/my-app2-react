import logo from './logo.svg';
import './App.css';

const number = 55555
const singer = {name: 'Dr Mahfuz', job: 'singer'}
const singer2 = {name: 'Eva Rahman', job: 'singer'}

const singerStyle ={
  color: 'purple',
  backgroundColor: 'white'
}

function App() {
  return (
    <div className="App">
      <Person name="Prottoy Heron" age="40" profession="Actor"></Person>
      <Person name="Saiful Sumon" age="23" profession="Student"></Person>
      <Person name="Abdulla Al Erfan" age="35" profession="Manager"></Person>
      <Person name="Mazharul Islam" age="31" profession="Trader"></Person>
      <h5>New Component!!!Yeee!!!</h5>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}


function Person(props){
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Profession: {props.profession}</p>
      <p>Age:{props.age}</p>
    </div>
  )
}

function Friend (){
  return(
    <div className='container'>
      <h3>Name: Ajay Devgun</h3>
      <p>Profession: Maramari</p>
    </div>
  )
}

export default App;
