# Create React App

## Story

Did you know when you use the `create-react-app` script, a working website is generated with content?
How awesome!
You don't need to set up manually the starting files, the package.json and don't need to worry about that you miss something to start working on your cool project.
The bad part of this is that you need to understand what is generated and how it is working.
Let's take a look at the generated code and manipulate it!

## What are you going to learn?

- Using the `create-react-app` script
- Read and understand generated code

## Tasks

1. Create the starting repo.
    - If we run the `npm start`/`yarn start` script in the project repo, A webpage with a logo and a text `Welcome to React` shows up.

2. Add a button to the bottom of the greeting text, when you click the button, it should change its color.
    - There is a button under the `Welcome to React` text with the sign `Click me!`
    - When we click the button, it changes its color randomly

## General requirements

None

## Hints

- To start the project, use the command `npx create-react-app <project name>` in the terminal
- Before you can place a component into the DOM by writing `<your-component>`, you need to import it into the file you want to use it in.
- In a component, you can use native javascript code beside of JSX.

## Background materials

- <i class="far fa-exclamation"></i> [JSX in a nutshell](https://reactjs.org/docs/jsx-in-depth.html)
- <i class="far fa-exclamation"></i> [Import keyword in javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- <i class="far fa-exclamation"></i> [How to start with create-react-app](https://www.codecademy.com/articles/how-to-create-a-react-app)
- <i class="far fa-book-open"></i> [Debugging a React project](https://blog.logrocket.com/debug-react-applications-with-the-new-react-devtools/)
