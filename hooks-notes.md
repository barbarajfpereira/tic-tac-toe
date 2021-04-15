# When to use hooks

If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component.

Don’t call Hooks inside loops, conditions, or nested functions. Don’t call Hooks from regular JS functions (only from React function components).

# State hook

`useState` returns a pair: the **current state** value and a **function** that lets you **update** it (similar to `this.state.count` and `this.setState` in a class).  
The only argument to `useState` is the **initial state** and it is only used during the first render.  
The state doesn’t have to be an object. We can keep a number or a string if that’s all we need.  
If we wanted to store two different values in state, we would call `useState()` twice.

```js
// counter example

import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  // You can name your own state variables:
  // const [fruit, setFruit] = useState('banana');

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

# Effect hook

`useEffect` serves the same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in React classes.

Placing `useEffect` inside the component lets us access the `count` state variable (or any props) right from the effect.

```js
// sets the document title

import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate. We pass a function to the useEffect Hook. This function we pass is our effect
  useEffect(() => {
    // Inside our effect, we set the document title using the document.title browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

<hr>

## Mounting

These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

- **`constructor()`**
  - if you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor
- **`render()`**
  - it's the only required method in a class component
- **`componentDidMount()`**
  - instantiate a network request, set up any subscriptions

## Updating

An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:

- **`render()`**
- **`componentDidUpdate()`**

## Unmounting

This method is called when a component is being removed from the DOM:

- **`componentWillUnmount()`**
  - do any necessary cleanup here, such as invalidating timers, canceling network requests or cleaning up subscriptions

<hr>

# Other hooks

- useContext
  - lets you subscribe to React context without introducing nesting
- useReducer
  - lets you manage local state of complex components with a reducer
