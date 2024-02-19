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

[Back to top](#intro-to-react)
