import Tweet from "./Tweet";

function TweetList () {
  const name = 'Marco'
  const message = 'I really like my dog';
  return (
    <div className="tweet-list">
      <Tweet name={name} status='Active' message={message}/>
      <Tweet name={name} status='Offline' message={message} />
      <Tweet name={name} status='Busy' message={message} />
    </div>
  )
}


export default TweetList