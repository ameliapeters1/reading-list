import { useState } from "react";

export default function Counter() {

    const [count, setCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false)


    function handleClick(){
      setCount((currCount)=> {return currCount+1});
      setCount((currCount)=> {return currCount+1});
      console.log(count);
    }

    function handleReset(){
      return setCount(0)
    }

    function increment(number:number){
      setCount((currCount)=> {return currCount+number});
    }


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
      <button type="button" onClick={() => (handleClick())}>
        Add two
      </button>
      <button type="button" onClick={() => (handleReset())}>
        Reset
      </button>
      <button type="button" onClick={() => (increment(5))}>
        Plus five
      </button>
      { count>3 && <p>Count bigger than three</p> }
    </div>

  );
}