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
  - [Return value of components](#return-value-of-components)
- [JSX](#jsx)
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

[Back to top](#intro-to-react)

### Return value of Components

[ReactNode vs JSX Element vs ReactElement](https://www.totaltypescript.com/jsx-element-vs-react-reactnode)

[Back to top](#intro-to-react)

## JSX

[Back to top](#intro-to-react)

## Props

[Back to top](#intro-to-react)
