//##################################################
// WHAT DOES REACT CODE LOOK LIKE BEHIND THE SCENE
//##################################################
/* 
  in order to let React work you need:
  1. React library (the general package)
  2. React Dom (this is for dom manipulation and to use React for the browser
     so in that case you'd need another script, as well as for App development and VR and many
     other). So in sum, they separeted this library to render/put on the screen in the browser.
  ------------------------------------------------------------------------------------------------
  This is the first step, the createElement takes 3 parameters:
  1. The HTML element such as, h1
  2. The property such as ID or Classes or Null
  3. The content in between the tags, like the text in a button
  This is coming from the React library from the general package.

  React.createElement('h1', null, 'hello react')

  The we need to render/put our React code in the browser with React Dom.
  This is the Second step and takes 2 parameters:
  1. The element or the app that you want to render on the screen (step one)
  2. The location where you want to render that app out, like the HTML location where
     you wanna put the code. Usually it is a Div with an id of root.

  ReactDOM.render(React.createElement('h1', null, 'hello react'), document.querySelector('#root))
  ------------------------------------------------------------------------------------------------
  Usually for scalability reasons you have a function, called functionApp(),
  that return our element(step one) 
  
  function App() {
    return (React.createElement('h1', null, 'hello react'))
  }

  the step 2 will be to pass that function in the ReactDOM.render

  ReactDOM.render(React.createElement(App), document.querySelector('#root))

  ------------------------------------------------------------------------------------------------
  Now if you wanna add multiple elements you cannot just add them in the return() in the
  function App() because it will be to heavy. So what we can do is: in the React.createElement
  we could pass as the first parameter a 'div', like a father containeer, and add as third
  parameter(the things between tags) an array that takes in another React.createElement or
  multiple. As follow: 

  function App() {
    return (React.createElement('div', null, [
      React.createElement('h1', null, 'hello react'),
      React.createElement('button', null, 'click me!!')
    ]))
  }


  ReactDOM.render(React.createElement(App), document.querySelector('#root))
  ------------------------------------------------------------------------------------------------
  to make it more interesting we could add variables and replace the text of an H1 for instance.
  just to show that you can create elements and adding JS functionalities attached to it.
  And you can also add CSS. Just look the H1 again. Style it is inside an object and takes
  another one. So in sum with React, you do everything in one file. HTML generation,
  JavaScript functions and variables, and CSS.

    function App() {
      const time = new Date().toLocaleDateString()
      const s = {fontSize: 50, color: 'red'}
      return (React.createElement('div', null, [
        React.createElement('h1', {style: s}, time),
        React.createElement('h2', {style: {color: red}}, time),
        React.createElement('button', null, 'click me!!')
      ]))
  }

  ReactDOM.render(React.createElement(App), document.querySelector('#root))
*/

//##################################################
// REWRITE REACT BEHIND THE SCENES INTO JSX
//##################################################
/* 
  This funny tag syntax is neither a string nor HTML. It is called JSX, and it is a syntax 
  extension to JavaScript. Just to avoid to write all the time: React.createElement() etc etc.
  We write JSX so that Babel can do its transpilation from JSX to React.createElement().
  Babel takes some code and transpiles it to something else adaptable to all the broswers.
  We can also add functions and event listener, check the alertHandler on the button and how
  the event listener 'click' is added to the button.

    function App() {
      const time = new Date().toLocaleDateString()
      const ButtonStyle = {fontSize: 50, color: 'red'}
      const alertHandler = () => {
        alert('you clicked the button, careful')
      }
      return (
        <div>
          <h1>{time}</h1>
          <button style={ButtonStyle} onClick{alertHandler}></button>
        </div>
      );
    }

  ReactDOM.render(React.createElement(App), document.querySelector('#root))
*/

//##################################################
// COMPONENTS
//##################################################

/* 
  Conceptually, components are like JavaScript functions. They accept arbitrary inputs 
  (called “props”) and return React elements describing what should appear on the screen.
  The simplest way to define a component is to write a JavaScript function:

  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  This function is a valid React component because it accepts a single “props” 
  object argument (which stands for properties) with data and returns a React element.
  We call such components “function components” because they are literally JavaScript functions.
  If we take the function we just created we can basically re-used it in any other React 
  projects. Which is cool. We could add to our function App() another element like a <nav></nav>
  or more, but then it will get longer and longer. So it is better to create a new component
  or function. That makes React beautiful because you can re-use components and create new ones.
  Here below we create a function Tweet() that will return some JSX. We want to only show to
  the browser (using ReactDOM), the APP which is the main project, which is inside the 
  function App. So to add a new component to it, we pass to the main <div> inside the 
  App function, another tag with the name of the new componentm which represent tweet function:
  <Tweet/> ***** so we just put in the ReactDOM, the App function. It is a way to stacking
  multiple components. All the time you work on a project, each file will have its own component
  so you just import and export pieces of code. And it is easy to work with people.
  
  In the same way we can restructure it the following:
  ReactDOM.render(React.createElement(App), document.querySelector('#root)
  with: ReactDOM.render(<App/>, document.querySelector('#root)
  check down under.



    function App() {
      const time = new Date().toLocaleDateString()
      const ButtonStyle = {fontSize: 50, color: 'red'}
      const alertHandler = () => {
        alert('you clicked the button, careful')
      }
      return (
        <div>
          <h1>{time}</h1>
          <button style={ButtonStyle} onClick{alertHandler}></button>
          <Tweet/> *****
        </div>
      );
    }

    function Tweet() {
      return (
        <div>
          <h2>Tweet</h2>
          <p>This is the tweet content</p>
        </div>
      );
    }
  

  ReactDOM.render(<App/>, document.querySelector('#root)
*/

//##################################################
// SETUP
//##################################################

/* 
  Important to notice, React is a dependency in the package.json which is needed to let
  the application works or run. Also React comes from NPM, node package manager, allows us
  to download different libraries or packages in your project.

  To start you go here, create a new React app: 
  https://create-react-app.dev/docs/getting-started/
  there you find the commands to initiate the React boilerplate as follow:
  1 IMPORTANT REACT DOC RECcOMMEND TO USE NPM OVER YARN with:
    npx create-react-app my-app --use-npm
    this will create a package-lock.json
    if you do not do that sometimes it will create a yarn.lock which essentially
    it is the same. 

  1a. npx create-react-app APP-NAME  (app name should be without space or weird stuff
     this create a folder called with the APP-NAME)
  1b. you could also do as alternative to the above: npx create-react-app .
     this will create a react app but inside the current folder you are in, without an
     additional folder named as above (APP-NAME)
  2. cd my-app (in case of 1a)
  3. npm start

  We don’t need to install or configure tools like webpack or Babel. 
  They are preconfigured and hidden so that we can focus on the code.
  ---------------------------------------------------------------------------------------------
  After creation, your project should look like this:

              my-app/
                README.md
                node_modules/
                package.json     (show info about the current project we are working on)
                public/
                  index.html
                  favicon.ico
              src/
                App.css
                App.js
                App.test.js
                index.css
                index.js
                logo.svg

  For the project to build, these files must exist with exact filenames:

  1. public/index.html is the page template; it is where there is the root div with id #root
     where you inject your React application
  2. src/index.js is the JavaScript entry point. (in src folder you ad also your CSS and
     React components)

     You may create subdirectories inside src. For faster rebuilds, only files inside src
     are processed by webpack. You need to put any JS and CSS files inside src, otherwise
     webpack won’t see them.

  another thing, if the package-lock.json is missing you gotta do: npm i
  package-lock.json is essentially a file that remain locked with all the info of your project
  in a way that if someone in the future works on the same project, that person will have
  the same setup as you. Avoiding to update or dowgrade the versions etc etc. 
  by default when installing a React app sometiems you get a yarn.lock which is essentially
  the same. Just to be sure use: npx create-react-app my-app --use-npm

  And having yarn.lock and package-lock.json creates conflicts. So avoid that.
  Another file created with the React app is the ".gitignore" which essentially collects and
  ignores all the files and folder in your project that you do not want to upload/push on github.
  For instance the "node_modules", which collects all the packages that you are using by 
  dowloading/using npm. And it is really large, so you don't want to push it on github
  so it goes in a folder called .gitignore 
  ---------------------------------------------------------------------------------------------
  Now in order to see the App on the screen you gotta run:
  npm start
  "npm start" it will take all the code that we wrote in src and display it on the screen

  in fact if you open the "package.json" we have under "scripts":
  1. start: which refers to the npm start, that display stuff on the screen. in other words,
            opens our "developement environment"
  2. build: then when you want to put it on the internet you run "npm run build" which refers to
            to the build script in the package.json. what this will do is to build all of our JS 
            files and create some "dist" folders. Which are basically compiled, minified, compressed 
            versions of our project files. All the time you change a file, the dist will be updated
            after you run "npm run build"
*/


//##################################################
// TAKING A LOOK ON THE APP.JS
//##################################################

/* 
  looks like a JSX mentioned above. But You can get rid of the header, classes 
  or importing the logo.
  Here commented there is the original.

  import logo from './logo.svg';
  import './App.css';
  
  function App() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
  
  export default App;
*/

//##################################################
// CLASS OR CLASSNAME / FOR OR HTMLFOR
//##################################################


/* 
  in order to add classes (for elements) in React, which still is JSX, we cannot do:
  class="test" but instead you gotta do className="test", even though they work
  the reason is that with React you can create proper classes such as

  class Human{} (example)

  also for instance when you use the "for" in a tag element you gotta need to use
  the htmlfor so you don't confuse it with the for(){}
*/

//##################################################
// IMPORT AND EXPORT
//##################################################

/* 
  since we are using "webpack" we can create our components in different files.
  All the time you want to use a package, you gotta import it from the library.
  such as:
  
  import React from 'react';

  In Index.js, we have imported React and React-dom and as well as out app.js
  so here we do not need it. But here we need to export it, so index.js can read it.
  and then render it in the dom. This is possible because of this export here:

  export default App;

*/


//##################################################
// EXTENTIONS
//##################################################

/* 
  to pre-compile JSX code, like in HTML, go to the bottom right, click JavaScript and select
  in the search bar: JavaScript React.

  If you want this for every JS file, go to the settings.json (you have before to 
  click the icon settings, and then click the weird icon on the top right, that has
  two circle and two arrow forming a rettangular sort of shape) and add:

  "file.associations":{
    "*.js": "javascriptreact"
  }
*/


//#######################################################################
// FOR FURTHER NOTES ABOUT THE CORE CONCEPTS CHECK THE COMPONENTS FOLDER
//#######################################################################

/* 
  PROPS: “Props” is a special keyword in React, which stands for properties and 
  is being used for passing data from one component to another. But the important part
  here is that data with props are being passed in a uni-directional flow.
  example: our tweet component has a props argument, which essentially is an
  object where stores data that we pass inside the child component such as
  <Tweet author={username} age=100 /> EXAMPLE. so the description in the child component,
  can be any name we want and has to be referred as the key of the props object. While the
  value, if it is a variable has to be inside {}. 

  Important: if you pass a variable inside the Tweet function, it is not gonna work inside
  of itself because data are passed from the parent (App) to the child (Tweet).
  App is rendering data to Tweet. But in case we add the TweetList component between
  App and Tweet, that holds all the tweet. Even there, the data will no pass directly
  from App to Tweet, but instead from the direct parent (TweetList) to the direct child (Tweet).

  import './App.css';
  import Tweet from './components/Tweet.js'
  import CreateTweet from './components/CreateTweet.js'

  function App() {
    const name = 'Marco'
    const message = 'I really like my dog';
    return (
      <div>
        <h1>Hello React</h1>
        <CreateTweet />
        <Tweet name={name} status='Active' message={message}/>
      </div>
    );
  }

export default App;
*/
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
