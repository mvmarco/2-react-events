// #################################
// EVENTS
// #################################
/* 
  React event listener are handled in a simpler way.
  instead of doing the querySelector for a button for instance, and then doing
  .addEventListener('click', handleClick). In React we do as follow:

  <button onClick={.......here we add the function......}>Click</button>

*/

import './App.css';
import TweetList from './components/TweetList.js'
import CreateTweet from './components/CreateTweet.js'
function App() {
  const sayHelloHandler = (user) => console.log(`hello ${user}`);
  return (
    <div>
      <h1>Hello React</h1>
      <button onClick={sayHelloHandler('Marco')}>Click</button>
      <CreateTweet />
      <TweetList />
    </div>
  );
}

export default App;
