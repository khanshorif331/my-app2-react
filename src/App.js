import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const number = 55555
const singers = [
                  {name: 'Dr Mahfuz', job: 'singer'},
                  {name: 'Eva Rahman', job: 'singer'},
                  {name: 'Agun', job: 'shopno'},
                  {name: 'Shuvrodev', job: 'pathor'}
                  ]

const singerStyle ={
  color: 'purple',
  backgroundColor: 'white'
}


function App() {
  
  return ( 
    <div className="App">
      <Counter></Counter>

    </div>
  );
}

function Counter (){
  const [count,setCount]=useState(20)
  const increaseCount =()=>setCount(count+1);
  const decreaseCount =()=>setCount(count-1);
  // console.log(abc);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}





// function App() {
//   const nayoks = ['Rubel','Bapparaz','Kuber','Nayan','Pappi']
  
//   return ( 
//     <div className="App">    
//       {
//         nayoks.map(nayok=><li>Name: {nayok}</li>)
//       }
//       {/* {
//         nayoks.map(nayok=><Person name={nayok}></Person>)
//       } */}
//       {
//         singers.map(singer=><Person name={singer.name} job={singer.job}></Person>)
//       }
      
//       <Person name="Prottoy Heron" age="40" profession="Actor"></Person>
//       <Person name="Saiful Sumon" age="23" profession="Student"></Person>
//       <Person name="Abdulla Al Erfan" age="35" profession="Manager"></Person>
//       <Person name="Mazharul Islam" age="31" profession="Trader"></Person>
//       <h5>New Component!!!Yeee!!!</h5>
//       <Friend></Friend>
//       <Friend></Friend>
//       <Friend></Friend>
//       <Friend></Friend>
//     </div>
//   );
// }


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
  // console.log(props);
  return(
    <div className='container'>
      <h3>Name: Ajay Devgun</h3>
      <p>Profession: Maramari</p>
    </div>
  )
}

export default App;
