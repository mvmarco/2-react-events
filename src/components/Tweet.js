//#####################
// PROPS
//#####################

// import React from 'react'; (old way of doing things)
// this function is exported to APP and APP is exported to index.js

/* 
  function Tweet(props) {
    console.log(props); // props is an object with properties passed when we call tweet in App.js
    return(
      <div className="tweet">
        <h2>Name: {props.name}, status: {props.status}</h2>
        <h3>Message: {props.message}</h3>
        <button>Delete</button>
        <button>Like</button>
      </div>
    )
  }

  we could destructure the props as follow, remembering that if we have
  object = {name:'marco', dog:'lapo'}
  instead of doing: 
  const marco = object.name       getting --> marco
  const lapo = object.dog         getting --> lapo
  we could do: const {name, dog} = object 

  check this out: https://www.javascripttutorial.net/es6/javascript-object-destructuring/

  --------------------------------------------------------------------------------------------
 
  Important: if you pass a variable inside the Tweet function, it is not gonna work
  inside the Tweet function, because data are passed from the parent (App) to the child (Tweet).
  App is rendering data to Tweet. But in case we add the TweetList component between
  App and Tweet, that holds all the tweet. Even there, the data will no pass directly
  from App to Tweet, but instead from the direct parent (TweetList) to the direct child (Tweet)

  function Tweet({name,status, message}) {
    // const = 21/12/1991 you cannot use it inside the Tweet function, has to be in the parent
    return (
      <div className="tweet">
        <h2>Name: {name}, status: {status}</h2>
        <h3>Message: {message}</h3>
        <button>Delete</button>
        <button>Like</button>
      </div>
    )
  }
  export default Tweet;


  but what we could do is to create a TweetList component. Where App renders some data to it,
  and TweetList renders some data to Tweet. Check the TweetList.js file
  --------------------------------------------------------------------------------------------
*/

  function Tweet({name, message, status}) {
    return (
      <div className="tweet">
        <h2>Name: {name}</h2>
        <h3>Message: {message}, status: {status}</h3>
        <button>Delete</button>
        <button>Like</button>
      </div>
    )
  }
  export default Tweet;