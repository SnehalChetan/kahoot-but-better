# kahoot-but-better
Make a quiz site / application with React and using learn by doing approach


### What  is React?
- React is a JavaScript library for building user interfaces.
- React is used to build single-page applications.
- React allows us to create reusable UI components.
- React created by Facebook.

### React JSX
- JSX is a javascript XML which allows to write HTML in React.

```javascript
const myElement = <h1>I Love JSX!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

```

### React Components 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, and work on them independently and merge them all in a parent component which will be your final UI. 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Components in React basically return a piece of JSX code that tells what should be rendered on the screen. 

 Two types of Components : Class components and Function components.

 **Class Componenet :** A class component must include the extends React.Component statement.ehich creates an inheritance to React.Component, and gives newly created component an access to React.Component's functions.
 Each newly created component also requires a render() method, which returns HTML.
 **example:** 
 ```javascript
 class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}
```
 **Function Component :**  Functional components are simply javascript functions. We can create a functional component in React by writing a javascript function. These functions may or may not receive data as parameters.
 ```javascript
 function Car() {
  return <h2>Hi, I am a Car!</h2>;
}
```
#### Difference between Class and Functional Components
- The functional components are not aware of the other components in your program whereas the class components can work with each other.
- Use functional component only when we are sure that our component does not require interacting or work with any other component. That is, these components do not require data from other components however we can compose multiple functional components under a single functional component. We can also use class-based components for this purpose but it is not recommended as using class-based components without need will make your application in-efficient. 

| **functional component**   |       **Class Components**   |
|----------------------------|------------------------------|
| A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX).|A class component requires you to extend from React. Component and create a render function which returns a React element.|
| There is no render method used in functional components. |    It must have the render() method returning JSX (which is syntactically similar to HTML)   |
| Functional component run from top to bottom and once the function is returned it cant be kept alive. |    Class component is instantiated and different life cycle method is kept alive and being run and invoked depending on phase of class component.|
|Also known as Stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI.| Also known as Stateful components because they implement logic and state.|
|React lifecycle methods (for example, componentDidMount) cannot be used in functional components. |	React lifecycle methods can be used inside class components (for example, componentDidMount).|
|Hooks can be easily used in functional components to make them Stateful.example: const [name,SetName]= React.useState(' ');|It requires different syntax inside a class component to implement hooks.example: constructor(props) {   super(props);   this.state = {name: ' '}}|

**composing components**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The merging of all individual components (Navbar, Sidebar, ArticleList) to make a parent component( named App) known as **composing components**. Atlast render this composed parent component.
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
// Navbar Component
const Navbar=()=>
{
    return <h1>This is Navbar.< /h1>
}
// Sidebar Component
const Sidebar=()=> {
    return <h1>This is Sidebar.</h1>
}
// Article list Component
const ArticleList=()=>
{
    return <h1>This is Articles List.</h1>
}
// App Component
const App=()=>
{
    return(
            <div>
                <Navbar />
                <Sidebar />
                <ArticleList />
            </div>
        );
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
);
```
**Decomposing Components**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Decomposing a Component means breaking down the component into smaller components.
It need to increase the reusability of component and by doing this, it increases the code modularity & reuability.

**Pure Components**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ReactJS Pure Component Class compares current state and props with new props and states to decide whether the React component should re-render itself or  Not. As it is no use of re-rendering of the component. Pure Components are Class Components which extends React.PureComponent. 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Extending React Class Components with Pure Components ensures the higher performance of the Component and ultimately makes the application faster.

#### React Props
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Props stand for "Properties." They are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It gives a way to pass data from one component to other components. It is similar to function arguments.