# Intro to React

The moment we all have been wating for is here. Let's get started with React!

<div style="text-align: center;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" style="padding-block: 40px; width: 200px">
</div>

<details>
  <summary>Table of content</summary>

- [What is React?](#what-is-react)

- [What does it solve?](#what-does-it-solve)

  - [Declarative Syntax](#declarative-syntax)
  - [Component-Based Architecture](#component-based-architecture)
  - [Virtual Dom](#virtual-dom)
  - [Reusability](#reusability)
  - [Efficient State Management](#efficient-state-management)
  - [Unidirectional Data Flow](#unidirectional-data-flow)
  - [React Hooks](#react-hooks)
  - [Community and Ecosystem](#community-and-ecosystem)
  - [JSX](#jsx)
  - [React Developer Tools](#react-developer-tools)

- [Components In React](#components-in-react)
- [JSX](#jsx-in-components)
- [Props](#props)

  - [What are props?](#what-are-props)
  - [Passing props](#passing-props)
  - [Accessing props](#accessing-props)
  - [Dynamic data](#dynamic-data)
  - [Immutable](#immutable)
  - [Functions as props](#functions-as-props)

- [Hooks](#hooks)

  - [useState](#usestate)
    - [Two forms of the setState](#two-forms-of-the-setstate)
  - [useEffect](#useeffect)

    - [Common usages of useEffect](#common-usages-of-useeffect)

  - [useRef](#useref)

</details>

## What is React?

React is a JavaScript library for building user interfaces. It simplifies the process of creating interactive and dynamic UIs by using a component-based architecture and a declarative syntax. React efficiently updates the DOM by leveraging a virtual DOM, resulting in improved performance and a smoother user experience. It is widely used for building modern web applications and is known for its simplicity and reusability of components

[Back to top](#intro-to-react)

## What does it solve?

React offers several features and advantages that make life easier for frontend developers compared to using vanilla JavaScript for complex user interfaces. Here are some key benefits:

[Back to top](#intro-to-react)

### **Declarative Syntax**

React uses a declarative syntax, allowing developers to describe the desired outcome rather than specifying step-by-step how to achieve it. This leads to more readable and maintainable code.

[Back to top](#intro-to-react)

### **Component-Based Architecture**

React promotes a modular and component-based approach to building user interfaces. This makes it easier to manage and organize code, especially in large and complex applications, by breaking down the UI into reusable components.

```jsx
// Vanilla JavaScript (without components)
const header = document.createElement("header");
const title = document.createElement("h1");
title.classlist.add("title");
title.innerText = "My app";
header.appendChild(title);
document.querySelector(".root").appendChild(header);

// React ( with componets )
const Header = () => {
  return (
    <header>
      <h1 className="title">My App</h1>
    </header>
  );
};

ReactDOM.render(<Header />, document.getElementById("root"));
```

[Back to top](#intro-to-react)

### **Virtual DOM**

React utilizes a virtual DOM to efficiently update the actual DOM. Instead of directly manipulating the DOM for every state change, React calculates the minimal set of changes needed and updates only those parts. This leads to better performance and a smoother user experience.

[Back to top](#intro-to-react)

### **Reusability**

Components in React are designed to be reusable. Developers can create components once and use them in different parts of the application, promoting code reusability and reducing redundancy.

[Back to top](#intro-to-react)

### **Efficient State Management**

React provides a simple and effective way to manage the state of components. The concept of state and props makes it easier to handle data flow within the application, leading to more predictable behavior.

[Back to top](#intro-to-react)

### **Unidirectional Data Flow**

React follows a unidirectional data flow, meaning that data flows in a single direction from parent components to child components. This simplifies data management and debugging, as it's clear where the data originates and how it propagates through the components.

In vanilla JavaScript, data can flow in any direction whatsoever, making it very difficult to track changes and from where they originate in larger applications.

[Back to top](#intro-to-react)

### **React Hooks**

The introduction of React Hooks allows developers to use state and other React features in functional components. This makes it easier to manage stateful logic in functional components without the need for class components.

[Back to top](#intro-to-react)

### **Community and Ecosystem**

React has a large and active community, which results in a rich ecosystem of libraries, tools, and resources. This community support makes it easier for developers to find solutions to common problems and stay updated on best practices.

[Back to top](#intro-to-react)

### **JSX**

JSX, a syntax extension for JavaScript, allows developers to write HTML elements and components in a syntax that looks similar to XML or HTML. This makes the code more readable and helps in visualizing the structure of the UI within the JavaScript code.

```jsx
// Vanilla JavaScript
const element = document.createElement("div");
element.innerText = "Hello world!";
document.getElementById("root").appendChild(element);

// React
const element = <div>Hello world!</div>;
ReactDom.render(element, document.getElementById("root"));
```

[Back to top](#intro-to-react)

### **React Developer Tools**

The availability of browser extensions like React Developer Tools provides powerful debugging and profiling capabilities. Developers can inspect component hierarchies, view state changes, and optimize performance more effectively.

[Back to top](#intro-to-react)

In summary, React simplifies frontend development by providing a declarative syntax, component-based architecture, virtual DOM, and a strong ecosystem, which collectively enhance code organization, maintainability, and overall developer productivity.

## Components in React

To create a component in React you just have to create a function that starts with a capital letter and returns JSX.

```jsx
export function Footer() {
  return <footer className="footer">This is the footer</footer>;
}
```

This footer can then be used inside another component as a JSX element. In this case I am going to import this footer component inside my app component.

```jsx
import { Footer } from "./Footer";

function App() {
  return (
    <>
      <h1>This is my first App!</h1>
      <div>
        <p>This is the content of my app</p>
        <section>This is a section</section>
      </div>
      <Footer />
    </>
  );
}
```

Remember to import the footer as you do any regular function and then encapsulate that inside a JSX element like the example above. Now React will inject the Footer component inside the App component.

[Back to top](#intro-to-react)

## JSX in components

JSX _( JavaScript XML )_ is a syntax extension for JavaScript that is commonly used with React to describe what the UI should look like. JSX allows you to write HTML-like code in your JavaScript files, making it more intuitive to define the structure of your React components.

Here are some key points about JSX:

- **HTML-Like Syntax**

  JSX looks similar to HTML, making it easier for developers who are already familiar with HTML to work with React. However, it's important to note that JSX is not HTML; it's a syntax extension for JavaScript.

  ```jsx
  const element = <h1>Hello, React!</h1>;
  ```

- **JavaScript Expressions**

  You can embed JavaScript expressions inside JSX by wrapping them in curly braces `{ }`. This allows you to dynamically generate content.

  ```jsx
  const name = "Niklas";
  const element = <p>Hello, {name}!</p>;
  ```

- **Components**

  JSX allows you to create custom components easily. Components in React are reusable and self-contained pieces of code that encapsulate a specific piece of functionality.

  ```jsx
  const Componenet = () => {
    return <div>Hello from Componenet!</div>;
  };
  ```

- **Attributes**

  JSX uses HTML-like attributes for defining component properties. React will convert these attributes into props, which can be accessed within the component.

  ```jsx
  const attrVal = "value";
  const element = <div myProp={attrVal}>Hello, React!</div>;
  ```

- **Self-Closing Tags**

  Just like in HTML, JSX supports self-closing tags for elements that don't have any content.

  ```jsx
  const imgElement = <img src="image.jpg" alt="An example" />;
  ```

- **ClassName vs. Class**

  To specify the CSS class for an element, you use `className` in JSX, not class. This is because class is a reserved keyword in JavaScript.

  ```jsx
  const element = <div className="myClass">Hello, React!</div>;
  ```

- **JSX is Transpiled**

  JSX is not understood by browsers directly. It needs to be transpiled into regular JavaScript before it can be executed in the browser. In the react case, the internal workings of React takes care of that.

  ```jsx
  // JSX
  const element = <h1>Hello, React!</h1>;

  // After transpilation
  const element = React.createElement("h1", null, "Hello, React!");
  ```

  To explain what is happening in the above code, in the method more specifically, it works like this:

1. **Type _ (String or Component )_**: The first argument is the type of the element you want to create. It can be a string representing an HTML tag (like 'div', 'h1', etc.) or a reference to a React component.

2. **Props _( Object or Null )_**: The second argument is an object representing the properties (or props) you want to pass to the element or component. In the transpiled example, null is passed because there are no additional props.

3. **Children _( Any additional arguments )_**: Any additional arguments after the props are considered as children of the element. In the transpiled example, the third argument is the string 'Hello, React!', representing the text content of the `<h1>` element.

The method `React.CreateElement..` will create an object that looks like this:

```jsx
const element = {
  type: "h1",
  props: {
    children: "Hello, React!",
  },
};
```

When React encounters this object during the rendering process, it uses the information stored in the object to create the corresponding DOM elements.

```jsx
// Rendering process (very simplified)
const domElement = document.createElement(element.type);
domElement.textContent = element.props.children;
```

This is a simplified example, and React performs additional optimizations and reconciliations to efficiently update the DOM based on changes in the application state.

In summary, `React.createElement` is a crucial part of the React process, creating a JavaScript object representation of the desired UI element or component. This object is then used by React to efficiently update the DOM when needed.

JSX is a powerful and expressive syntax that simplifies the creation of UI components in React. It combines the declarative nature of React with the familiarity of HTML, making it more readable and maintainable.

[Back to top](#intro-to-react)

## Props

Props is short for "properties," and it refers to the way you pass data from one component to another. Props are a fundamental concept in React and are used to communicate and share information between different parts of your application.

[Back to top](#intro-to-react)

### What are props?

Props are pieces of data that you can pass from a parent component to a child component in React. They allow you to make your components more dynamic and reusable by injecting different data into them.

[Back to top](#intro-to-react)

### Passing props

You pass props from a parent component to a child component by adding attributes to the child component tag in the parent's JSX.

```tsx
function ParentComponent() {
  return <ChildComponent name="John" age={25} />;
}

interface IChildComponentProps {
  name: string;
  age: number;
}

function ChildComponent(props: IChildComponentProps) {
  return (
    <p>
      {props.name} is {props.age} years old.
    </p>
  );
}
```

[Back to top](#intro-to-react)

### Accessing props

In the child component, you can access the passed props through the function's parameter _( often named props )_. Each prop is accessed using dot notation, like `props.name` or `props.age`.

[Back to top](#intro-to-react)

### Dynamic data

Props allow you to make your components more flexible by changing their behavior based on the data passed to them. For example, you can reuse the `ChildComponent` with different names and ages by passing different values as props.

```tsx
function App() {
  return (
    <div>
      <ChildComponent name="Alice" age={30} />
      <ChildComponent name="Bob" age={22} />
    </div>
  );
}

interface IChildComponentProps {
  name: string;
  age: number;
}

function ChildComponent(props: IChildComponentProps) {
  return (
    <p>
      {props.name} is {props.age} years old.
    </p>
  );
}
```

[Back to top](#intro-to-react)

### Immutable

Props in React are immutable, meaning their values cannot be changed inside the child component. They are read-only. If you need to modify data, you typically do it in the parent component and pass the updated data down as a new prop.

### Functions as props

As stated earlier, props of react only flows in one direction: from top to bottom, from parent component to child component. The props can never travel in any other direction. This makes your state handling predictable and you can almost always trace the origin of a piece of state. See this concept as a way for the parent component to communicate with its child components. However, wouldn't it be supurb to somehow emulate a communication in the other direction? From a child component to its parent component? We can do that by passing down a reference to a function from a parent component to a child component. This gives the child component th possibility to invoke a function in its parent component, and depending on how that function is constructed the child component could in reality update state in the parent component that affects the rendering of the said child component. Nice right?!

Let's do an example on a simple todo list. Here we have a `TodoList.tsx` that is responsible for rendering a todo list containing of `TodoListItem.tsx`-components. If we want to remove a todo list item from the list we want to click on an icon of some sort inside the `TodoListItem` right?

When that icon is clicked we want to invoke a deleting function in the parent component and delete the clicked todo list item. Since the parent components is in charge of the state of the todo list, the deleting functionality should be located there.

_TodoList.tsx_

```tsx
import TodoListItem from "./TodoListItem";

export function TodoList(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([]);

  const deleteTodo = (todoId: number): void => {
    // ..code to delete a todo from the todo list and update the state
  };

  return (
    <section className="todo-list">
      {todos.map((todo) => (
        <TodoListItem deleteTodo={deleteTodo} key={todo.id} todo={todo} />
      ))}
    </section>
  );
}
```

_TodoListItem.tsx_

```tsx
interface ITodoListItemProps {
  deleteTodo: (todoId: number) => void;
  todo: ITodo;
}

export function TodoListItem(props: ITodoListItemProps): JSX.Element {
  return (
    <article className="todo">
      <span>{todo.content}</span>
      <span class="material-symbols-outlined" onClick={() => deleteTodo(todo.id)}>
        delete
      </span>
    </article>
  );
}
```

Above we can see something that we haven't seen before, and it's the structure of the handler function on the "onClick" attribute.

`onClick={() => deleteTodo(todo.id)}`

The reason why it looks like this is becase the prop-function needs a parameter, and we can put it like this:

`onClick={deleteTodo(todo.id)}`

This would invoke to function straigh away when the component renders and that would lead to a behaviour that we wouldn't want. So in order to get around that we put the invocation of the prop-functions inside an anomynous arrow function that is not beeing invoked straight away.

`onClick={() => deleteTodo(todo.id)}`

If the prop-function didn't accept a parameter we could have just put the reference to the prop-function inside the curly brackets.

[Back to top](#intro-to-react)

## Hooks

Hooks are functions that allow you to use state and other React features in functional components. They were introduced in React version 16.8 to provide a way to use state and lifecycle features in functional components, which were traditionally only available in class components.

There are several hooks included in React and almost every "react specific third party library" is utilizing and provides hooks for us to use in our applications.

Hooks are very versatile and can be used in many different use cases. Think of them as special JS functions with access to all React features despite not being a component. They usually contain business logic so it can be reused across your application.

There are two rules that must be followed when using and creating them:

1. Only call hooks at the top level of your component.
2. Only call hooks from React functional components or other hooks.

[Back to top](#intro-to-react)

### `useState`

`useState` hook is used to add state to functional components. The useState hook returns an array with two elements: the current state value and a function that allows you to update the state.

```tsx
import React, { useState } from "react";

function Counter() {
  // Declare a state variable named "count" with initial value 0
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* onClick event handler to update the count state */}
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

`useState<number>(0)` initializes the state variable count with an initial value of 0. The setCount function is used to update the value of count. When the button is clicked, it triggers the onClick event, and the setCount function is called to increment the count by 1.

React re-renders the component whenever the state is updated, and the updated state is reflected in the UI.

You can use multiple useState hooks in a single component to manage different pieces of state.

```tsx
import React, { useState } from "react";

function Example() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <p>Your name is: {name}</p>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}
```

In this example, there are two separate state variables, count and name, each with its own useState hook. The setCount and setName functions are used to update these state variables, and the UI is re-rendered accordingly.

[Back to top](#intro-to-react)

#### Two forms of the setState

The set-method from the useState hook comes in two forms and they are:

- **Updating the state based on the previous value**

  If the new state depends on the previous state, it's recommended to use the functional form of `setState`, where you provide a function as an argument to `setState`. This function receives the previous state as its argument and returns the new state.

  ```js
  setState((prevState) => {
    // calculate and return new state based on prevState
    return newState;
  });
  ```

  This ensures that you are working with the latest state and helps prevent race conditions when updating state asynchronously.

- **Updating state without depending on the previous value**

  If the new state does not depend on the previous state, you can simply pass the new state value to `setState`. In this case, you can use the non-functional form of `setState`.

  ```js
  setState(newState);
  ```

Both forms of setState will trigger a re-render of the component with the updated state.

Here is an actual example of the usage of the different forms:

```tsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    // Using the functional form of setState
    setCount((prevCount) => prevCount + 1);
  };

  const reset = () => {
    // Using the non-functional form of setState
    setCount(0);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

In the increment function, the functional form of setCount is used to correctly update the count based on its previous value. In the reset function, the non-functional form is used because the new state _( 0 in this case )_ does not depend on the previous state.

[Back to top](#intro-to-react)

### `useEffect`

`useEffect` is a hook in React that allows functional components to perform side effects. Side effects in React typically include data fetching, subscriptions, manual DOM manipulations, and other operations that cannot be handled during the render phase. useEffect is a replacement for lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in class components.

```jsx
useEffect(() => {
  // Side effect code here

  return () => {
    // Cleanup code (optional)
  };
}, [dependencies]);
```

1. The first argument to useEffect is a function that contains the code for the side effect you want to perform.

2. The second argument is an optional array of dependencies. If the dependencies array is provided, the effect will only re-run if any of the values in the dependencies array change between renders. If the dependencies array is omitted, the effect will run after every render.

3. The function returned from useEffect can be used for cleanup. This cleanup function will be executed before the next render or before the component is unmounted. It's useful for cleaning up resources like subscriptions or timers to prevent memory leaks.

#### Common usages of useEffect

**useEffect() is invoked on every render and state or props change**

```jsx
useEffect(() => {
  console.log("This log runs on every render and on every update of any state or props change");
}); // No second argument
```

**useEffect() that is only invoked on the initial render of the component**

```jsx
useEffect(() => {
  console.log("This log runs only on the initial render of the component.");
}, []); // Second arguments i an empty array, important!
```

**useEffect() that is invoked on the initial render and when a specified dependency is updated**

```jsx
useEffect(() => {
  console.log("This log is run on the initial render and when a specified dependency is updated");
}, [name]); // Second argument is an array with the specific dependency or dependencies that should trigger a invocation of the effect. Think of this as a listener on the specific variable.
```

**useEffect() that includes a clean-up function that runs when the component is demounted or before the next rerendering of the component**

```jsx
useEffect(() => {
  return () => {
    console.log("This clean-up is run before the next render or when the component is demounted");
  };
}); // The second argument can be either an empty array, an array with dependencies or omittet. It all depends on how often you want the clean-up to run.
```

[Back to top](#intro-to-react)

### `useRef`

[Back to top](#intro-to-react)
