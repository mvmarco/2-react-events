// #################################
// EVENTS
// #################################
/* 
  React event listener are handled in a simpler way.
  instead of doing the querySelector for a button for instance, and then doing
  .addEventListener('click', handleClick). In React we do as follow:
  const sayHelloHandler = (user) => console.log(`hello ${user}`);
  <button onClick={sayHelloHandler}>Click</button>

  but as soon as we start doing: 
  <button onClick={sayHelloHandler('Marco')}>Click</button>
  in other words putting a parentesis to our function, which is an invocation, you are calling
  the function. In the browser the results of the click the updated with "hello Marco" but the
  click event stops working because we returned it.
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
