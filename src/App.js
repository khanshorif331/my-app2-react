import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

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



// this portion is for the state changing

function App() {
  
  return ( 
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}


function ExternalUsers(){
  const [users, setUsers] = useState([])
   useEffect( ()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res=>res.json())
     .then(data=>setUsers(data))
   },[])
  

  return(
    <div>
      
      <h1>External Users</h1>
      <h2>{users.length}</h2>
      {
        users.map(user=><User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}
function User (props){
  console.log(props);
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Email: {props.email}</p>
    </div>

  )
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







// this portion is for the components and the dynamically changed data




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
