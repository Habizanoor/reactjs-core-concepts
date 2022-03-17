import logo from './logo.svg';
import './App.css';
const number = 5555;
const singers = [
  {name:'Dr. Mahfuz', job:'Singer'},
  {name: 'Eva Rahman', job:'Singer2'},
  {name: 'Agun', job:'Singer3'},
  {name: 'Hero Alam', job:'Singer4'},
]
const singer = {name:'Dr. Mahfuz', job:'Singer'}
const singer2 = {name: 'Eva Rahman', job:'Singer2'}
const singerStyle = {
  color:'green',
  backgroundColor:'white'
}
function App() {
  const nayoks = ['rubel','bappaRaj','kuber','joshim','razzak']
  return (
    <div className="App">
      <header className="App-header">
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
        {
          nayoks.map(nayok => <Person name ={nayok}></Person>)
        }
        {
          singers.map(singer => <Person name={singer.name}></Person>)
        }
        
        <Person name= {nayoks[0]} naika="moushumi"></Person>
        <Person name={nayoks[1]} naika= "cheka"></Person>
        <Person naika= "shabana"></Person>
        <p>yaaaaa.... react shikhi</p>
        <Friend name="chendler" bestFriend="joe"></Friend>
        <Friend name="monika" bestFriend="rachel"></Friend>
        <Friend name="ross" bestFriend="forever alone"></Friend>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>Hello Dude. React. How are you?</h3>  
        </div>
        <div className="music">
        <p>Name: {2222 + number}</p> 
        <p style={singerStyle}>Name: {singer.name} {singer.job}</p> 
        <p style={{color:'blue',
  backgroundColor:'yellow'}}>Name: {singer2.name} {singer2.job}</p> 
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
function Person(props){
  console.log(props)
  return (
    <div className="person">
      <h3>{props.name}</h3>
      <p style={{color:'red'}}>{props.naika}</p>
    </div>
  
  );
}
function Friend(props){
  return(
    <div className='container'>
      <h3>Name: {props.name}</h3>
      <p>{props.bestFriend}</p>
    </div>
  );
}
export default App;
