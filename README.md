# ReactJS Course Notes

[x] Custom Hook
Bennefits

- Reuse logic across multiple components
  - Fetching data
  - Managing forms
  - Toggling values
  - Handling localStorage
  - Timer logic
  - Authentication logic
- Keep components clean and small
- Avoid duplicate code

Keep in maind

1. Starts with use
2. Returns values/functions
3. Does not return JSX
4. Uses other React Hooks inside it

```js
import { useState } from "react";

export default function useGreeting() {
  const [name, setName] = useState("");
  const greeting = name ? `Welcome to ${name}!` : "Enter your name";
  return { name, setName, greeting };
}
```

```js
import useGreeting from "";

export default function GreetingComponent(){
    const {name, setName, greeting} = useGreeting();
    return (
        <div>
            <input type = "text" placeholder = "Enter your name" value = {value} onChange = {
                onchange={(e) => setName(e.target.value)}
            } />

            <h1>{greeting} </h1>
        </div>
    )
}
```
