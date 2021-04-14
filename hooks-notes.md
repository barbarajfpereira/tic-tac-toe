Hooks let you use state without writing a class component. They are a way to reuse stateful logic, not state itself.

Don’t call Hooks inside loops, conditions, or nested functions.

Don’t call Hooks from regular JS functions (only from React function components).

# State hook

`useState` returns a pair: the **current state** value and a **function** that lets you **update** it.  
The only argument to `useState` is the **initial state** and it is only used during the first render.

```js
// counter example

import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

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

```js
// sets the document title

import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
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
