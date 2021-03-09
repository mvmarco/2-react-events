import './App.css';
import TweetList from './components/TweetList.js'
import CreateTweet from './components/CreateTweet.js'
function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <CreateTweet />
      <TweetList />
    </div>
  );
}

export default App;
