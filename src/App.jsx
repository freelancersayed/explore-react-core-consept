import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './fridnds';

function App() {


  function handleClick(){
    alert('button clicked')
  }
  // function handleClick2(){
  //   alert('button 2 clicked')
  // }
const addToFive = (num)=>{
  alert(num +5);
}
  return (
    <>
      <h1>React core Concepts</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={()=>{alert('arrey function')}}>Click 2</button>

      {/* vejailla */}
      <button onClick={() => addToFive(5)}>Four</button>

    
    </>
  )
}

export default App


