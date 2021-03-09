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