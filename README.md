# Intro to React

The moment we all have been wating for is here. Let's get started with React!

<div style="text-align: center;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" style="padding-block: 40px; width: 200px">
</div>

<details open>
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
  - [Summary](#summary)

- [Components In React](#components-in-react)
- [JSX](#jsx-in-components)
- [Props](#props)

  - [What are props?](#what-are-props)
  - [Passing props](#passing-props)
  - [Accessing props](#accessing-props)
  - [Dynamic data](#dynamic-data)
  - [Immutable](#immutable)

</details>

## What is React?

React is a JavaScript library for building modern user interfaces. It enables developers to create interactive, dynamic, and scalable UIs using a component-based architecture and declarative syntax. React leverages a virtual DOM to efficiently update the real DOM, which improves performance and provides a smooth user experience.

With features like Hooks for state and lifecycle management, JSX for writing UI in a familiar syntax, and strong support for concurrent rendering in React 18, React has become the industry standard for building reusable, maintainable, and high-performing web applications.

[Back to top](#intro-to-react)

## What does it solve?

React addresses the challenges of building complex, interactive UIs that are hard to manage with plain JavaScript. Instead of manually manipulating the DOM, React introduces a declarative approach where you describe what the UI should look like, and React handles the updates behind the scenes.

By breaking applications into reusable components, React makes it easier to manage state, share logic, and scale projects. Features like Hooks simplify state and lifecycle management, while the virtual DOM ensures efficient rendering and smoother performance.

Ultimately, React helps developers build maintainable, predictable, and scalable web applications with less code and fewer bugs.
[Back to top](#intro-to-react)

### **Declarative Syntax**

React uses a declarative syntax, meaning developers describe what the UI should look like rather than writing step-by-step instructions for updating the DOM. This makes code easier to understand, debug, and maintain, while ensuring the UI automatically stays in sync with the underlying state.

[Back to top](#intro-to-react)

### **Component-Based Architecture**

React encourages building UIs with a component-based architecture, where the interface is divided into small, reusable pieces. Each component manages its own logic and rendering, which makes applications more modular, maintainable, and easier to scale. This approach is especially powerful in large projects, as it promotes reusability, consistency, and clear separation of concerns.

```jsx
// Vanilla JS
const header = document.createElement("header");
const title = document.createElement("h1");
title.classList.add("title");
title.innerText = "My App"
header.appendChild(title);
document.body.appendChild(header);

// React
const Header = (): ReactElement => {
  return (
    <header>
      <h1 className="title">My App</h1>
    </header>
  )
}

createRoot(document.getElementById('root')).render(<Header/>)
```

[Back to top](#intro-to-react)

### **Virtual DOM**

React uses a virtual DOM as an in-memory representation of the real DOM. When state changes, React first updates the virtual DOM, then performs reconciliation — the process of comparing the new virtual DOM with the previous one to determine exactly what changed. Only the affected parts of the actual DOM are then updated, resulting in faster rendering, improved performance, and a smoother user experience.

[Back to top](#intro-to-react)

### **Reusability**

In React, components are designed to be reusable building blocks. Once a component is created, it can be used in multiple places across an application — or even shared between projects. This promotes consistency, reduces redundancy, and makes codebases easier to maintain and scale.

[Back to top](#intro-to-react)

### **Efficient State Management**

React provides a simple and effective way to manage the state of components. The concept of state and props makes it easier to handle data flow within the application, leading to more predictable behavior.

[Back to top](#intro-to-react)

### **Unidirectional Data Flow**

React enforces a unidirectional data flow, where data always moves from parent components down to child components. This makes applications easier to understand, debug, and maintain because it’s always clear where data comes from and how it propagates through the component tree.

In contrast, with plain JavaScript or less structured approaches, data can flow in multiple directions, making it much harder to track changes in larger applications. React’s predictable one-way flow provides structure, clarity, and stability.

[Back to top](#intro-to-react)

### **React Hooks**

React Hooks allow developers to use features like state and side effects directly inside functional components. With Hooks, you can manage component logic in a simple and reusable way. They also enable creating custom hooks to share logic across different parts of an application.

Today, Hooks are the standard for writing modern React applications.

[Back to top](#intro-to-react)

### **Community and Ecosystem**

React has a large, active, and global community, which has created a rich ecosystem of libraries, tools, tutorials, and resources. This strong community support makes it easier for developers to find solutions, learn best practices, and stay up to date with the latest developments in the React world.

- [Official React Docs](https://react.dev/) – the best place to start learning.

- [Awesome React](https://github.com/enaqx/awesome-react) – a community-curated list of React resources.

[Back to top](#intro-to-react)

### **JSX**

JSX is a syntax extension for JavaScript that lets developers write HTML-like code directly inside their JavaScript. This makes components more readable and intuitive, since the UI structure is expressed right alongside the logic that powers it.

Under the hood, JSX is not HTML — it’s compiled into plain JavaScript function calls `React.createElement` before the browser runs it. This is why JSX can mix markup with dynamic JavaScript expressions.

[React Docs](https://react.dev/learn/writing-markup-with-jsx) – Introducing JSX (beginner friendly)

```jsx
// Vanilla JavaScript
const element = document.createElement('div');
element.innerText = 'Hello world!';
document.getElementById('root').appendChild(element);

// React
function Element (): ReactElemenmt {
  return <div>Hello World!</div>
}
```

[Back to top](#intro-to-react)

### **React Developer Tools**

The availability of browser extensions like React Developer Tools provides powerful debugging and profiling capabilities. Developers can inspect component hierarchies, view state changes, and optimize performance more effectively.

[React Developer Tools - Link](https://react.dev/learn/react-developer-tools)

[Back to top](#intro-to-react)

### Summary

In summary, React simplifies frontend development by providing a declarative syntax, component-based architecture, virtual DOM, and a strong ecosystem, which collectively enhance code organization, maintainability, and overall developer productivity.

[Back to top](#intro-to-react)

## Components in React

To create a component in React you just have to create a function that starts with a capital letter and returns JSX.

```tsx
// With function keyword
export function Footer (): ReactElement {
  return <footer className="footer">This is the footer</footer>
}

// With arrow function
export const Footer = (): ReactElement => {
  return <footer className="footer">This is the footer</footer>
}
```

This footer can then be used inside another component as a JSX element. In this case I am going to import this footer component inside my app component.

```tsx
import { Footer } from "./Footer";

function App(): ReactElement {
  return
  // React fragment, components can only render one parent element. In order to get around that we must use fragments.
  <>
    <h1>This is my first App!</h1>
    <div>
      <p>This is the content</p>
      <section>This is a random section</section>
    </div>
    <Footer />
  </>
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

  ```

- **JavaScript Expressions**

  You can embed JavaScript expressions inside JSX by wrapping them in curly braces `{ }`. This allows you to dynamically generate content.

  ```jsx

  ```

- **Components**

  JSX allows you to create custom components easily. Components in React are reusable and self-contained pieces of code that encapsulate a specific piece of functionality.

  ```jsx

  ```

- **Attributes**

  JSX uses HTML-like attributes for defining component properties. React will convert these attributes into props, which can be accessed within the component.

  ```jsx

  ```

- **Self-Closing Tags**

  Just like in HTML, JSX supports self-closing tags for elements that don't have any content.

  ```jsx

  ```

- **ClassName vs. Class**

  To specify the CSS class for an element, you use `className` in JSX, not class. This is because class is a reserved keyword in JavaScript.

  ```jsx

  ```

### **JSX is Transpiled**

JSX is not understood by browsers directly. It must be transpiled into regular JavaScript before execution. In React projects, this is handled automatically by tools like Babel.

```jsx

```

To explain what is happening in the above code, in the method more specifically, it works like this:

1. **Type (string or component)** → The first argument defines the element type, such as "div" or "h1", or a reference to a React component.

2. **Props (object or null)** → The second argument contains the props. In this example, null means no props are passed.

3. **Children (any additional arguments)** → Remaining arguments represent children. Here, "Hello, React!" is the text content inside the <h1>

React then creates an internal object describing the element, for example:

```jsx

```

When React renders, it uses this object to create and efficiently update the DOM.

```jsx

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

```

[Back to top](#intro-to-react)

### Accessing props

In the child component, you can access the passed props through the function's parameter _( often named props )_. Each prop is accessed using dot notation, like `props.name` or `props.age`.

[Back to top](#intro-to-react)

### Dynamic data

Props allow you to make your components more flexible by changing their behavior based on the data passed to them. For example, you can reuse the `ChildComponent` with different names and ages by passing different values as props.

```tsx

```

[Back to top](#intro-to-react)

### Immutable

Props in React are immutable, meaning their values cannot be changed inside the child component. They are read-only. If you need to modify data, you typically do it in the parent component and pass the updated data down as a new prop.
