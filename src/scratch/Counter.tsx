import { useState } from "react";

export default function Counter() {

    const [count, setCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false)



  return (
    <div>
      <p>Count: {count}</p>
      <button type="button" onClick={() => (setCount(count + 1))}>
        Increase
      </button>
      <button type="button" onClick={() => (setIsOpen(!isOpen))}>
        {isOpen ? "Hide Paragraph" : "Show Paragraph"}
      </button>
      { isOpen && <p>Here's our paragraph</p> }
    </div>

  );
}
// {books.length === 1 ? "book" : "books"}
// Finally, add a second piece of state to the same 
// component: const [isOpen, setIsOpen] = useState(false), 
// and a button that shows or hides the paragraph. 
// Notice that the two state variables are independent of one another.